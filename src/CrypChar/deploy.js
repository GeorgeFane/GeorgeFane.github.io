const Web3 = require('web3')
const contract = require('contract.json')

const url = 'https://sandbox.truffleteams.com/' + '8f7572d1-e253-420a-93bc-2ed8a6f051e6'
const web3 = new Web3(url);

const user = "0x61eB15d8A761Fc80387F50d84Fbf7Ff47a97d92F";
const charity = "0x596Aa50158BFf76F8D08F848d701C83a4F754d9c";
const store = "0xAf951AE00Ab357b8a2cFa66901E0D4D0F96e397B";

const myContract = new web3.eth.Contract(abi);

myContract.deploy({
    data: 
})
.send({
    from: user,
    gas: 1500000,
    gasPrice: '30000000000000'
})
.on('receipt', function(receipt){
   console.log(receipt.contractAddress) // contains the new contract address
})
.then(function(newContractInstance){
    console.log(newContractInstance.options.address) // instance with the new contract address
});