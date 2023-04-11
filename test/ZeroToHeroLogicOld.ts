import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("zeroToHeroLogicOld", function () {
  let zeroToHeroLogicOld:Contract;

  beforeEach(async function () {
    const ZeroToHeroLogicOld = await ethers.getContractFactory("ZeroToHeroLogicOld");
    zeroToHeroLogicOld = await ZeroToHeroLogicOld.deploy();
    await zeroToHeroLogicOld.deployed();
    await zeroToHeroLogicOld.initialize(100);
  })

  it("check value", async function () {
    expect(await zeroToHeroLogicOld.value1()).to.equal(BigNumber.from('100'));

    await zeroToHeroLogicOld.setValue1(11);
    expect(await zeroToHeroLogicOld.value1()).to.equal(BigNumber.from('11'));
  })
})