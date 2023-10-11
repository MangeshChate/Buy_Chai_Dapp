
const hre = require("hardhat");

async function main() {


  const chai = await hre.ethers.deployContract("Chai");

  await chai.waitForDeployment();

  console.log(
    `Chai deployed to ${chai.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0x5ADA1ed50A589b9Fb846EaaAEbc468D2cEBfB07e