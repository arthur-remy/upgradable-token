import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "solidity-coverage";
import "hardhat-contract-sizer";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ]
  },

  networks: {
    goerli: {
      url: process.env.GOERLI_L1_RPC_URL || "",
      accounts:
        process.env.GOERLI_L1_PRIVATE_KEY !== undefined && process.env.GOERLI_L1_PRIVATE_KEY_2 !== undefined
          ? [process.env.GOERLI_L1_PRIVATE_KEY, process.env.GOERLI_L1_PRIVATE_KEY_2]
          : [],
    },
    goerliLinea: {
      url: process.env.GOERLI_LINEA_RPC_URL || "",
      accounts:
        process.env.GOERLI_LINEA_PRIVATE_KEY !== undefined && process.env.GOERLI_LINEA_PRIVATE_KEY_2 !== undefined
          ? [process.env.GOERLI_LINEA_PRIVATE_KEY, process.env.GOERLI_LINEA_PRIVATE_KEY_2]
          : [],
    },
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "goerliLinea",
        chainId: 59140,
        urls: {
          apiURL: "https://explorer.goerli.linea.build/api",
          browserURL: "https://explorer.goerli.linea.build",
        },
      },
    ],
  },
};

export default config;
