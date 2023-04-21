const hre = require("hardhat")
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
    // Setup accounts & variables
    const [deployer] = await ethers.getSigners()
  
    // Deploy contract
    const Funding = await ethers.getContractFactory("Funding")
    const funding = await Funding.deploy()
    await funding.deployed()
  
    console.log(`Deployed Funding Contract at: ${funding.address}\n`)
  
    
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});