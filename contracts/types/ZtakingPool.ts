/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ZtakingPoolInterface extends utils.Interface {
  contractName: "ZtakingPool";
  functions: {
    "acceptOwnership()": FunctionFragment;
    "balance(address,address)": FunctionFragment;
    "blockMigrator(address,bool)": FunctionFragment;
    "depositETHFor(address)": FunctionFragment;
    "depositFor(address,address,uint256)": FunctionFragment;
    "eip712Domain()": FunctionFragment;
    "migrate(address[],address,address,uint256,bytes)": FunctionFragment;
    "migrateWithSig(address,address[],address,address,uint256,bytes)": FunctionFragment;
    "migratorBlocklist(address)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setStakable(address,bool)": FunctionFragment;
    "setZircuitSigner(address)": FunctionFragment;
    "tokenAllowlist(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "zircuitSigner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "blockMigrator",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETHFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFor",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "migrate",
    values: [string[], string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateWithSig",
    values: [string, string[], string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "migratorBlocklist",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setStakable",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setZircuitSigner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAllowlist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "zircuitSigner",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockMigrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositETHFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "migrateWithSig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migratorBlocklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setZircuitSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenAllowlist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "zircuitSigner",
    data: BytesLike
  ): Result;

  events: {
    "BlocklistChanged(address,bool)": EventFragment;
    "Deposit(uint256,address,address,uint256)": EventFragment;
    "EIP712DomainChanged()": EventFragment;
    "Migrate(uint256,address,address[],address,address,uint256[])": EventFragment;
    "OwnershipTransferStarted(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "SignerChanged(address)": EventFragment;
    "TokenStakabilityChanged(address,bool)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdraw(uint256,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BlocklistChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Migrate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenStakabilityChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type BlocklistChangedEvent = TypedEvent<
  [string, boolean],
  { migrator: string; blocked: boolean }
>;

export type BlocklistChangedEventFilter =
  TypedEventFilter<BlocklistChangedEvent>;

export type DepositEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  { eventId: BigNumber; depositor: string; token: string; amount: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type EIP712DomainChangedEvent = TypedEvent<[], {}>;

export type EIP712DomainChangedEventFilter =
  TypedEventFilter<EIP712DomainChangedEvent>;

export type MigrateEvent = TypedEvent<
  [BigNumber, string, string[], string, string, BigNumber[]],
  {
    eventId: BigNumber;
    user: string;
    tokens: string[];
    destination: string;
    migrator: string;
    amounts: BigNumber[];
  }
>;

export type MigrateEventFilter = TypedEventFilter<MigrateEvent>;

export type OwnershipTransferStartedEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferStartedEventFilter =
  TypedEventFilter<OwnershipTransferStartedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type SignerChangedEvent = TypedEvent<[string], { newSigner: string }>;

export type SignerChangedEventFilter = TypedEventFilter<SignerChangedEvent>;

export type TokenStakabilityChangedEvent = TypedEvent<
  [string, boolean],
  { token: string; enabled: boolean }
>;

export type TokenStakabilityChangedEventFilter =
  TypedEventFilter<TokenStakabilityChangedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type WithdrawEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  { eventId: BigNumber; withdrawer: string; token: string; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface ZtakingPool extends BaseContract {
  contractName: "ZtakingPool";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZtakingPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    blockMigrator(
      _migrator: string,
      _blocklisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositETHFor(
      _for: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositFor(
      _token: string,
      _for: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    eip712Domain(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, BigNumber[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
      }
    >;

    migrate(
      _tokens: string[],
      _migratorContract: string,
      _destination: string,
      _signatureExpiry: BigNumberish,
      _authorizationSignatureFromZircuit: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrateWithSig(
      _user: string,
      _tokens: string[],
      _migratorContract: string,
      _destination: string,
      _signatureExpiry: BigNumberish,
      _stakerSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migratorBlocklist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStakable(
      _token: string,
      _canStake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setZircuitSigner(
      _signer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenAllowlist(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zircuitSigner(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balance(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  blockMigrator(
    _migrator: string,
    _blocklisted: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositETHFor(
    _for: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositFor(
    _token: string,
    _for: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  eip712Domain(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, string, string, BigNumber[]] & {
      fields: string;
      name: string;
      version: string;
      chainId: BigNumber;
      verifyingContract: string;
      salt: string;
      extensions: BigNumber[];
    }
  >;

  migrate(
    _tokens: string[],
    _migratorContract: string,
    _destination: string,
    _signatureExpiry: BigNumberish,
    _authorizationSignatureFromZircuit: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrateWithSig(
    _user: string,
    _tokens: string[],
    _migratorContract: string,
    _destination: string,
    _signatureExpiry: BigNumberish,
    _stakerSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migratorBlocklist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStakable(
    _token: string,
    _canStake: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setZircuitSigner(
    _signer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenAllowlist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zircuitSigner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    balance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blockMigrator(
      _migrator: string,
      _blocklisted: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETHFor(_for: string, overrides?: CallOverrides): Promise<void>;

    depositFor(
      _token: string,
      _for: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    eip712Domain(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, BigNumber[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
      }
    >;

    migrate(
      _tokens: string[],
      _migratorContract: string,
      _destination: string,
      _signatureExpiry: BigNumberish,
      _authorizationSignatureFromZircuit: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    migrateWithSig(
      _user: string,
      _tokens: string[],
      _migratorContract: string,
      _destination: string,
      _signatureExpiry: BigNumberish,
      _stakerSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    migratorBlocklist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setStakable(
      _token: string,
      _canStake: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setZircuitSigner(_signer: string, overrides?: CallOverrides): Promise<void>;

    tokenAllowlist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    withdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    zircuitSigner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "BlocklistChanged(address,bool)"(
      migrator?: null,
      blocked?: null
    ): BlocklistChangedEventFilter;
    BlocklistChanged(
      migrator?: null,
      blocked?: null
    ): BlocklistChangedEventFilter;

    "Deposit(uint256,address,address,uint256)"(
      eventId?: BigNumberish | null,
      depositor?: string | null,
      token?: string | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      eventId?: BigNumberish | null,
      depositor?: string | null,
      token?: string | null,
      amount?: null
    ): DepositEventFilter;

    "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
    EIP712DomainChanged(): EIP712DomainChangedEventFilter;

    "Migrate(uint256,address,address[],address,address,uint256[])"(
      eventId?: BigNumberish | null,
      user?: string | null,
      tokens?: null,
      destination?: null,
      migrator?: null,
      amounts?: null
    ): MigrateEventFilter;
    Migrate(
      eventId?: BigNumberish | null,
      user?: string | null,
      tokens?: null,
      destination?: null,
      migrator?: null,
      amounts?: null
    ): MigrateEventFilter;

    "OwnershipTransferStarted(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferStartedEventFilter;
    OwnershipTransferStarted(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferStartedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "SignerChanged(address)"(newSigner?: null): SignerChangedEventFilter;
    SignerChanged(newSigner?: null): SignerChangedEventFilter;

    "TokenStakabilityChanged(address,bool)"(
      token?: null,
      enabled?: null
    ): TokenStakabilityChangedEventFilter;
    TokenStakabilityChanged(
      token?: null,
      enabled?: null
    ): TokenStakabilityChangedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Withdraw(uint256,address,address,uint256)"(
      eventId?: BigNumberish | null,
      withdrawer?: string | null,
      token?: string | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      eventId?: BigNumberish | null,
      withdrawer?: string | null,
      token?: string | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blockMigrator(
      _migrator: string,
      _blocklisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositETHFor(
      _for: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositFor(
      _token: string,
      _for: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;

    migrate(
      _tokens: string[],
      _migratorContract: string,
      _destination: string,
      _signatureExpiry: BigNumberish,
      _authorizationSignatureFromZircuit: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrateWithSig(
      _user: string,
      _tokens: string[],
      _migratorContract: string,
      _destination: string,
      _signatureExpiry: BigNumberish,
      _stakerSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migratorBlocklist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStakable(
      _token: string,
      _canStake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setZircuitSigner(
      _signer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenAllowlist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zircuitSigner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockMigrator(
      _migrator: string,
      _blocklisted: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositETHFor(
      _for: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositFor(
      _token: string,
      _for: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    migrate(
      _tokens: string[],
      _migratorContract: string,
      _destination: string,
      _signatureExpiry: BigNumberish,
      _authorizationSignatureFromZircuit: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrateWithSig(
      _user: string,
      _tokens: string[],
      _migratorContract: string,
      _destination: string,
      _signatureExpiry: BigNumberish,
      _stakerSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migratorBlocklist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStakable(
      _token: string,
      _canStake: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setZircuitSigner(
      _signer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenAllowlist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zircuitSigner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
