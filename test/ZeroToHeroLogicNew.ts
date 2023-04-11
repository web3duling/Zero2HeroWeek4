import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("zeroToHeroLogicNew", function () {
  let zeroToHeroLogicNew:Contract;

  beforeEach(async function () {
    const ZeroToHeroLogicNew = await ethers.getContractFactory("ZeroToHeroLogicNew");
    zeroToHeroLogicNew = await ZeroToHeroLogicNew.deploy();
    await zeroToHeroLogicNew.deployed();
  })

  it("check value", async function () {
    expect(await zeroToHeroLogicNew.value2()).to.equal('');

    await zeroToHeroLogicNew.setValue2("test value2");
    expect(await zeroToHeroLogicNew.value2()).to.equal('test value2');

    await zeroToHeroLogicNew.setValue2("test value2 again");
    expect(await zeroToHeroLogicNew.value2()).to.equal('test value2 again');
  })
})