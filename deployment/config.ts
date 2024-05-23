import { DeployConfig } from "./tools";

export interface DeployConfigMap {
  [key: string]: {
    meta: DeployConfig;
  };
}

export enum ContractsKeys {
  CurvesERC20Factory = "CurvesERC20Factory",
  CurvesGroups = "CurvesGroups",
  FeeSplitter = "FeeSplitter",
  ZtakingPool = "ZtakingPool",
}

export const deployConfigMap: DeployConfigMap = {
  [ContractsKeys.ZtakingPool]: {
    meta: {
      create2Salt: undefined,
      isUpgradable: false,
      key: ContractsKeys.ZtakingPool,
      name: "ZtakingPool",
      params: [
        "0x75A3FEF67B4eD2CcF902fD288743FCa937f6593d",
        ["0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"],
        "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      ],
    },
  },
  [ContractsKeys.CurvesGroups]: {
    meta: {
      create2Salt: undefined,
      isUpgradable: false,
      key: ContractsKeys.CurvesGroups,
      name: "CurvesGroups",
      params: [],
    },
  },
  [ContractsKeys.CurvesERC20Factory]: {
    meta: {
      create2Salt: undefined,
      isUpgradable: false,
      key: ContractsKeys.CurvesERC20Factory,
      name: "CurvesERC20Factory",
      params: [],
    },
  },
  [ContractsKeys.FeeSplitter]: {
    meta: {
      create2Salt: undefined,
      isUpgradable: false,
      key: ContractsKeys.FeeSplitter,
      name: "FeeSplitter",
      params: [],
    },
  },
};
