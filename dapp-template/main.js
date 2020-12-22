var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
        contractInstance = new web3.eth.Contract(abi, "0x3BdA6bd0f3DD975df54336833510d3d64f1D1638", {from: accounts[0]});
    });

});
