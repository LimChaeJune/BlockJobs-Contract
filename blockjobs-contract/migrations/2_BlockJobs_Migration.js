const Coin = artifacts.require("BlockJobsCoin");
const NFT = artifacts.require("BlockJobsNFT");
const BlockJobs = artifacts.require("BlockJobsContract");

module.exports = async function (deployer,network, accounts) {
  const coin_name = "BlockJobsCoin";
  const coin_symbol = "BJC";
  const coin_Supply = 100000000;
  await deployer.deploy(Coin, coin_name, coin_symbol, coin_Supply);
  const coin_ = await Coin.deployed();

  
  const nft_name = "BlockJobsCoin";
  const nft_symbol = "BJC";
  await deployer.deploy(NFT, nft_name, nft_symbol);
  const nft_ = await NFT.deployed();
  
  // 실제 배포
  // const account_ = "0xcf2336e23F39638a1a42e7dd4A2Aa8cDBe9bFE42";
  const acocunt_ = accounts[0];
  await deployer.deploy(BlockJobs, coin_.address, nft_.address);  
};
