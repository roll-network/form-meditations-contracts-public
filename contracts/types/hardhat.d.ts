/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IL1ERC20Bridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL1ERC20Bridge__factory>;
    getContractFactory(
      name: "IL1StandardBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL1StandardBridge__factory>;
    getContractFactory(
      name: "IL2ERC20Bridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL2ERC20Bridge__factory>;
    getContractFactory(
      name: "L2StandardBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2StandardBridge__factory>;
    getContractFactory(
      name: "CrossDomainEnabled",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossDomainEnabled__factory>;
    getContractFactory(
      name: "ICrossDomainMessenger",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICrossDomainMessenger__factory>;
    getContractFactory(
      name: "IL2StandardERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IL2StandardERC20__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Ownable2Step",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable2Step__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "IERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271__factory>;
    getContractFactory(
      name: "IERC5267",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC5267__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeERC20__factory>;
    getContractFactory(
      name: "Address",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Address__factory>;
    getContractFactory(
      name: "ECDSA",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ECDSA__factory>;
    getContractFactory(
      name: "EIP712",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Math",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Math__factory>;
    getContractFactory(
      name: "Nonces",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Nonces__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ShortStrings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShortStrings__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "L1StandardBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1StandardBridge__factory>;
    getContractFactory(
      name: "IMigrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMigrator__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "IZtakingPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZtakingPool__factory>;
    getContractFactory(
      name: "MigratorDefault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MigratorDefault__factory>;
    getContractFactory(
      name: "MigratorETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MigratorETH__factory>;
    getContractFactory(
      name: "MigratorETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MigratorETH__factory>;
    getContractFactory(
      name: "L2ERC20Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2ERC20Receiver__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "ZtakingPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZtakingPool__factory>;

    getContractAt(
      name: "IL1ERC20Bridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL1ERC20Bridge>;
    getContractAt(
      name: "IL1StandardBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL1StandardBridge>;
    getContractAt(
      name: "IL2ERC20Bridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL2ERC20Bridge>;
    getContractAt(
      name: "L2StandardBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L2StandardBridge>;
    getContractAt(
      name: "CrossDomainEnabled",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossDomainEnabled>;
    getContractAt(
      name: "ICrossDomainMessenger",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICrossDomainMessenger>;
    getContractAt(
      name: "IL2StandardERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IL2StandardERC20>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Ownable2Step",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable2Step>;
    getContractAt(
      name: "IERC1155Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "IERC1271",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271>;
    getContractAt(
      name: "IERC5267",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC5267>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SafeERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeERC20>;
    getContractAt(
      name: "Address",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Address>;
    getContractAt(
      name: "ECDSA",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ECDSA>;
    getContractAt(
      name: "EIP712",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Math",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Math>;
    getContractAt(
      name: "Nonces",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Nonces>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ShortStrings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShortStrings>;
    getContractAt(
      name: "Strings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "L1StandardBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L1StandardBridge>;
    getContractAt(
      name: "IMigrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMigrator>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "IZtakingPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZtakingPool>;
    getContractAt(
      name: "MigratorDefault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MigratorDefault>;
    getContractAt(
      name: "MigratorETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MigratorETH>;
    getContractAt(
      name: "MigratorETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MigratorETH>;
    getContractAt(
      name: "L2ERC20Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.L2ERC20Receiver>;
    getContractAt(
      name: "MockERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC20>;
    getContractAt(
      name: "ZtakingPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ZtakingPool>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
