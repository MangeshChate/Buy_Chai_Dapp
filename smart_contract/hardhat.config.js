require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SIPOLA_URL =  process.env.SIPOLA_URL ;
const PRIVATE_KEY = process.env.PRIVATE_KEY ;

module.exports =  {
  solidity:"0.8.19",
  networks:{
    sepolia:{
      url:SIPOLA_URL,
      accounts:[PRIVATE_KEY],
    },
  },
}
