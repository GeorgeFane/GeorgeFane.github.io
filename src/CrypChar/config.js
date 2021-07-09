import Web3 from 'web3';
import hex2ascii from 'hex2ascii';

import contract from './contract';
import env from '../env';

const url = 'https://sandbox.truffleteams.com/' + env.truffle;
const web3 = new Web3(url);

const user = "0x61eB15d8A761Fc80387F50d84Fbf7Ff47a97d92F";
const charity = "0x596Aa50158BFf76F8D08F848d701C83a4F754d9c";
const store = "0xAf951AE00Ab357b8a2cFa66901E0D4D0F96e397B";

const myContract = new web3.eth.Contract(contract.abi, contract.address);

const continents = ['Asia', 'Africa', 'NorthAmerica', 'SouthAmerica', 'Antarctica', 'Europe', 'Australia']