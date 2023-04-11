import { task } from "hardhat/config";
import { readAddressList } from "../scripts/helper";

task("ZeroToHeroLogicOld", "test ZeroToHeroLogicOld").setAction(async (_, hre) => {

  const addressList = readAddressList();
  const proxyAddress = addressList['proxyOld'];
  const zeroToHeroLogicOld = await hre.ethers.getContractAt("ZeroToHeroLogicOld", proxyAddress);

  console.log("当前value1: ", await zeroToHeroLogicOld.value1());
  console.log("value1改为11: ", await zeroToHeroLogicOld.setValue1(11));
  console.log("当前value1应是11: ", await zeroToHeroLogicOld.value1());
});

task("ZeroToHeroLogicNew", "test ZeroToHeroLogicNew").setAction(async (_, hre) => {

  const addressList = readAddressList();
  const proxyAddress = addressList['proxyNew'];
  const zeroToHeroLogicNew = await hre.ethers.getContractAt("ZeroToHeroLogicNew", proxyAddress);


  console.log("当前value1: ", await zeroToHeroLogicNew.value1());
  console.log("当前value2: ", await zeroToHeroLogicNew.value2());
  console.log("value2改为test2: ", await zeroToHeroLogicNew.setValue2("test2"));
  console.log("当前value2应是test2: ", await zeroToHeroLogicNew.value2());
});