'use strict';

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

const provider = (endpoint) => {
  if (process.env.HDWALLET_MNEMONIC) {
    return new HDWalletProvider(process.env.HDWALLET_MNEMONIC, endpoint, 0);
  } else {
    return new Web3.providers.HttpProvider(endpoint);
  }
}

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      gas: 5000000,
      network_id: '*'
    },
    ropsten: {
      gasPrice: 50000000000,
      provider: () => provider("https://ropsten.infura.io") ,
      network_id: "3" // Ropsten network ID
    }
  }
};