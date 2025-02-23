/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Address, AddressInterface } from "../Address";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206dd747c0e978cc1560ee55c34052134589490d9b95f6c51ca5faef5117643d7a64736f6c63430008180033";

type AddressConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Address__factory extends ContractFactory {
  constructor(...args: AddressConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Address";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Address> {
    return super.deploy(overrides || {}) as Promise<Address>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Address {
    return super.attach(address) as Address;
  }
  connect(signer: Signer): Address__factory {
    return super.connect(signer) as Address__factory;
  }
  static readonly contractName: "Address";
  public readonly contractName: "Address";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressInterface {
    return new utils.Interface(_abi) as AddressInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Address {
    return new Contract(address, _abi, signerOrProvider) as Address;
  }
}
