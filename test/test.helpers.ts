import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";

export const getMigrateWithSigSignature = async (
  chainId: number,
  wallet: SignerWithAddress,
  verifyingContract: string,
  user: string,
  tokens: string[],
  migratorContract: string,
  destination: string,
  signatureExpiry: number,
  nonce: number,
) => {
  const domain = {
    chainId: chainId,
    name: "ZtakingPool",
    verifyingContract: verifyingContract,
    version: "1",
  };

  const types = {
    Migrate: [
      { name: "user", type: "address" },
      { name: "migratorContract", type: "address" },
      { name: "destination", type: "address" },
      { name: "tokens", type: "address[]" },
      { name: "signatureExpiry", type: "uint256" },
      { name: "nonce", type: "uint256" },
    ],
  };

  const value = {
    destination,
    migratorContract,
    nonce,
    signatureExpiry,
    tokens: tokens,
    user,
  };
  // Signing the data
  const signature = await wallet._signTypedData(domain, types, value);

  return signature;
};

export const getMigrateSignature = async (
  chainId: number,
  wallet: SignerWithAddress,
  verifyingContract: string,
  migratorContract: string,
  signatureExpiry: number,
) => {
  // generate the signature
  const hash = ethers.utils.keccak256(
    ethers.utils.solidityPack(
      ["address", "uint256", "address", "uint256"],
      [migratorContract, signatureExpiry, verifyingContract, chainId],
    ),
  );
  const signature = await wallet.signMessage(ethers.utils.arrayify(hash));
  return signature;
};
