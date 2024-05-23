import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";
use(solidity);
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
//@ts-ignore
import { ethers } from "hardhat";

import {
  type MigratorDefault,
  type MockERC20,
  type ZtakingPool,
  MigratorDefault__factory,
  MockERC20__factory,
  ZtakingPool__factory,
} from "../contracts/types";
import { getMigrateSignature, getMigrateWithSigSignature } from "./test.helpers";

const WETH_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const HARDHAT_CHAIN_ID = 1337;

describe("ZtakingPool Contract test", () => {
  let testContract: ZtakingPool,
    owner: SignerWithAddress,
    signer: SignerWithAddress,
    friend: SignerWithAddress,
    addrs: SignerWithAddress[];
  let migratorDefault: MigratorDefault;
  let token1: MockERC20, token2: MockERC20, token3: MockERC20;

  beforeEach(async () => {
    [owner, signer, friend, ...addrs] = await ethers.getSigners();
    const mockERC20Factory = new MockERC20__factory(owner);
    token1 = await mockERC20Factory.deploy("Token1", "TK1", 18);
    token2 = await mockERC20Factory.deploy("Token2", "TK2", 18);
    token3 = await mockERC20Factory.deploy("Token3", "TK3", 18);

    const ztakingPoolFactory = new ZtakingPool__factory(owner);
    testContract = await ztakingPoolFactory.deploy(
      signer.address,
      [token1.address, token2.address, token3.address, WETH_ADDRESS],
      WETH_ADDRESS,
    );

    const migratorDefaultFactory = new MigratorDefault__factory(owner);
    migratorDefault = await migratorDefaultFactory.deploy();
  });

  describe("True", () => {
    it("Should be true", async () => {
      expect(true).to.equal(true);
    });
  });

  describe("ZtakingPool test", () => {
    it("Should be able to stake / unstake ERC20", async () => {
      const amount = 1000;
      await token1.mint(owner.address, amount);
      await token1.approve(testContract.address, amount);

      await testContract.depositFor(token1.address, owner.address, amount);
      const balance = await testContract.balance(token1.address, owner.address);
      expect(balance).to.equal(amount);

      await testContract.withdraw(token1.address, amount);
      const balance2 = await testContract.balance(token1.address, owner.address);
      expect(balance2).to.equal(0);
    });

    it("Should be able to stake / unstake ETH", async () => {
      const amount = 1000;

      await testContract.depositETHFor(owner.address, { value: amount });
      const balance = await testContract.balance(WETH_ADDRESS, owner.address);
      expect(balance).to.equal(amount);

      await testContract.withdraw(WETH_ADDRESS, amount);
      const balance2 = await testContract.balance(WETH_ADDRESS, owner.address);
      expect(balance2).to.equal(0);
    });

    it("Should be able to migrate with user signature", async () => {
      const amount = 1000;
      await token1.mint(owner.address, amount);
      await token1.approve(testContract.address, amount);

      await testContract.depositFor(token1.address, friend.address, amount);

      // get current block timestamp
      const block = await ethers.provider.getBlock("latest");

      const signer = friend;
      const verifyingContract = testContract.address;
      const user = friend.address;
      const tokens = [token1.address];
      const migratorContract = migratorDefault.address;
      const destination = addrs[0].address;
      const signatureExpiry = block.timestamp + 1000;
      const nonce = (await testContract.nonces(friend.address)).toNumber();

      const signature = await getMigrateWithSigSignature(
        HARDHAT_CHAIN_ID,
        signer,
        verifyingContract,
        user,
        tokens,
        migratorContract,
        destination,
        signatureExpiry,
        nonce,
      );

      await testContract.migrateWithSig(user, tokens, migratorContract, destination, signatureExpiry, signature);

      const balance = await token1.balanceOf(destination);
      expect(balance).to.equal(amount);
    });
  });

  it("Should be able to migrate with protocol signature", async () => {
    const amount = 1000;
    await token1.mint(owner.address, amount);
    await token1.approve(testContract.address, amount);

    await testContract.depositFor(token1.address, friend.address, amount);

    // get current block timestamp
    const block = await ethers.provider.getBlock("latest");

    const verifyingContract = testContract.address;
    const tokens = [token1.address];
    const migratorContract = migratorDefault.address;
    const destination = addrs[0].address;
    const signatureExpiry = block.timestamp + 1000;

    const signature = await getMigrateSignature(
      HARDHAT_CHAIN_ID,
      signer,
      verifyingContract,
      migratorContract,
      signatureExpiry,
    );

    await testContract.connect(friend).migrate(tokens, migratorContract, destination, signatureExpiry, signature);

    const balance = await token1.balanceOf(destination);
    expect(balance).to.equal(amount);
  });
});
