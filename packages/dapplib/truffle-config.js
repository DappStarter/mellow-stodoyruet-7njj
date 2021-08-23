require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rifle spider uncle hunt slide outer sleep'; 
let testAccounts = [
"0x3772dcbf65eb53a40b1eb3a4b7b637b58f79bd33c2451f54c07ac20f1d6e486d",
"0x10b79854dc67fa0e4c2cd41bee57ac971ded7c0ec33be0353bb827841a1694ba",
"0xfde9ff11085441f7c3f61ef16bed9511f4caef2873e13dcf6172002ddc7efe6f",
"0x4ea4041e431fd84e512e0cfadef3d89cc393d0154b1f52578959dc8606a0e901",
"0x6e235be8a1944ce7357984e5e70fec5b44d07c0609091a235887e65d33c6d420",
"0x9ac397ba86f31a8eaa8c0b5bb1ddecf8d3c89796c54c1f6919b54687bf5566e0",
"0x6210bb2cb1f631c7dc60c48c75699f5ce2f5b1eb6a5c2b9831c947787cf135ff",
"0x55d9a7141f5a18755c2c0cd2617377bd198397d90f111e36720b884d5e2ef257",
"0x0d639316f5eb89678f295d37230937ac4753a05c381b9c0e35e99bbf1655f646",
"0x1fe5acc43c86d79f663377fe159715cbfb407f5593b0b4d7ed24205c89403fba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

