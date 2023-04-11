import { ethers,upgrades } from "hardhat"
import { readAddressList, writeAddressList } from "./helper";

async function main() {

  const ZeroToHeroProxy = await ethers.getContractFactory("ZeroToHeroLogicOld")
  console.log("Deploying zeroToHeroLogicOld...")
  console.log("Deployer: ", ethers.provider)
  
  const zeroToHeroProxy = await upgrades.deployProxy(ZeroToHeroProxy,[100], { initializer: 'initialize' })
  await zeroToHeroProxy.deployed();
  console.log("zeroToHeroProxyOld contract address: ", zeroToHeroProxy.address)

  const admin = await upgrades.erc1967.getAdminAddress(zeroToHeroProxy.address);
  console.log("admin contract address: ", admin);

  const zeroToHeroLogicOld = await upgrades.erc1967.getImplementationAddress(zeroToHeroProxy.address);
  console.log("zeroToHeroLogicOld contract address: ", zeroToHeroLogicOld)

  const addressList = readAddressList();

  addressList['proxyOld'] = zeroToHeroProxy.address;
  addressList['adminOld'] = admin;
  addressList['zeroToHeroLogicOld'] = zeroToHeroLogicOld;
  writeAddressList(addressList);

}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})