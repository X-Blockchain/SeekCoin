/**
 * @dev Deploy the SeekCoin contract using Truffle.
 * The SeekCoin contract will be deployed to the blockchain.
 */
const SeekCoin = artifacts.require("SeekCoin");

module.exports = function (deployer) {
  deployer.deploy(SeekCoin);
};
