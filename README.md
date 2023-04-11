# ZeroToHero Week4 Task
操作流程
1.部署三个合约
npx hardhat run scripts/deploy.ts --network bnbtest

代理合约:  0x3eE0A336E8CeFc8A9CE7f008d864bDF2C22609AB
管理员合约:  0x6e10Ef2EE59d754E0ed807379edbd6C0c504b802
初版逻辑合约:  0x0eBE986218a9dCA7E665fc58c61eC8ce519D3B0c

2.执行一轮验证
npx hardhat ZeroToHeroLogicOld --network bnbtest 

3.升级合约
npx hardhat run scripts/upgrade.ts --network bnbtest

4.升级后验证
npx hardhat ZeroToHeroLogicNew --network bnbtest