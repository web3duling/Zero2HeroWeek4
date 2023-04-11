import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import "hardhat-deploy";
import "./tasks";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    localhost: {
      url: process.env.BNBTestnet_URL,
      accounts: process.env.LocalTest_PRIVATE_KEY !== undefined ? [process.env.LocalTest_PRIVATE_KEY] : [],
    },
    bnbtest: {
      url: process.env.BNBTestnet_URL || "",
      accounts: process.env.BNBTest_PRIVATE_KEY !== undefined ? [process.env.BNBTest_PRIVATE_KEY] : [],
    },
  }
};

export default config;
