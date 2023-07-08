const SeekCoin = artifacts.require("SeekCoin");

module.exports = function (deployer) {
  deployer.deploy(SeekCoin);
};
