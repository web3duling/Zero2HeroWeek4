import { ethers,upgrades } from "hardhat"
import { readAddressList, writeAddressList } from "./helper";

const addressList = readAddressList();
const proxyAddress = addressList['proxyOld'];

async function main() {
  console.log("zeroToHeroProxyOld contract address: ", proxyAddress);
  const ZeroToHeroLogicNew = await ethers.getContractFactory("ZeroToHeroLogicNew");
  console.log("upgrade to ZeroToHeroLogicNew...");
  const proxyAddress2 = await upgrades.upgradeProxy(proxyAddress, ZeroToHeroLogicNew);

  const zeroToHeroLogicNew = await upgrades.erc1967.getImplementationAddress(proxyAddress2.address);

  const admin = await upgrades.erc1967.getAdminAddress(proxyAddress2.address);

  console.log("zeroToHeroProxyNew contract address: ", proxyAddress2.address)
  console.log("admin contract address: ", admin);
  console.log("zeroToHeroLogicNew contract address: ", zeroToHeroLogicNew)

  addressList['proxyNew'] = proxyAddress2.address;
  addressList['adminNew'] = admin;
  addressList['zeroToHeroLogicNew'] = zeroToHeroLogicNew;
  writeAddressList(addressList);
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})