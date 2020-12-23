var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts) {
        contractInstance = new web3.eth.Contract(abi, "0x46852b33798EDecCE021aba7131d93E5A8c64A72", {from: accounts[0]});
        console.log(contractInstance);
    });
    $("#add_data_button").click(inputData);
    $("#get_data_button").click(outputData);
});

function inputData() {
    // Form inputs
    var name = $("#name_input").val();
    var age = $("#age_input").val();
    var height = $("#height_input").val();
    
    // Metamask signing params
    var sendConfig = {
        value: web3.utils.toWei("1", "ether")
    };

    // Let Metamask send the transaction
    contractInstance.methods.createPerson(name, age, height).send(sendConfig)
        // Gett the tx hash
        .on("transactionHash", function(hash) {
            console.log("Tx hash: " + hash);
        })
        // Get tx confirmations, min 12 recommended for mainnet
        .on("confirmation", function(confirmationNr) {
            console.log("Confimations: " + confirmationNr);
        })
        // Get tx receipt, outcome & state changes of the tx
        .on("receipt", function(receipt) {
            console.log("Receipt: " + JSON.stringify(receipt));
        });
}

function outputData() {

}