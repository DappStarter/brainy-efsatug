require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name razor oil history inner private slot gaze'; 
let testAccounts = [
"0xa176e826440a35f37142d0e9e488b1597b60726755b9a3f2ded1184003f5855f",
"0xaa708bdc11fb0f574f2f4bcb6a9e134804c234203cf613297448ddb463d150a1",
"0x327dfb2da406ddd957f792ace583a107f97446ab6f85c44265005e23604ba758",
"0xb907dd97a67499e6bcc821bde99c2014cb9682072ebb7591e56946d7f357179f",
"0xea2f7f9820afbaf08bd27f46d3bda57bd1ff47841e0ba12e3a08984f9ebde2dd",
"0x8ca42cbb5d9f9336aeb2ffcaf977c598d1be8b9781cd89a7e8a0b4c56917c858",
"0xc62032907e1058dd0a1e8e12ceeb96e31bbf6c8a0951e70d070cb68a4eddf7ad",
"0x2c697720437f60d15c3eb510ad1975948282d811e401dea851f68bed5fa85ffc",
"0xfa56e33f210122d035f8e3ae8659cc004e66eebb1fae9b85fbf43f7a6c8b52b6",
"0x5618f275d93d6afc7694ca53cfa84ac77e59941ab4fc22cc7d01b9264ec3a9bf"
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

