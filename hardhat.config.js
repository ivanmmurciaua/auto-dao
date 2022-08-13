require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.15",
        settings: {
          optimizer: {
            enabled: true,
          },
        },
      },
    ],
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: "EUR",
    token: "MATIC",
    gasPriceApi: "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice",
    showTimeSpent: true,
    coinmarketcap: process.env.GAS_KEY,
  },
  // networks: {
  //   matic: {
  //     url: `https://rpc-mumbai.maticvigil.com`,
  //     accounts: [process.env.privateKey],
  //   },
  // },
  // etherscan: {
  //   apiKey: {
  //     polygonMumbai: [process.env.apiKey],
  //   },
  // },
};