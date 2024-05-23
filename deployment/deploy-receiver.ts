import { ethers, network } from "hardhat";

const main = async () => {
  const factory = await ethers.getContractFactory("L2ERC20Receiver");
  const contract = await factory.deploy("0x4200000000000000000000000000000000000010");
  await contract.deployed();
  console.log("L2ERC20Receiver deployed to:", contract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
