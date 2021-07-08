import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Box, Paper, Button, Grid, InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField } from '@material-ui/core';
import Web3 from 'web3';
import hex2ascii from 'hex2ascii';

import contract from './contract';
import env from '../env';
import Dgrid from './Dgrid';
import Form from './Form';
import TempDrawer from './TempDrawer';

const url = 'https://sandbox.truffleteams.com/' + env.truffle;
const web3 = new Web3(url);

const user = "0x61eB15d8A761Fc80387F50d84Fbf7Ff47a97d92F";
const charity = "0x596Aa50158BFf76F8D08F848d701C83a4F754d9c";
const store = "0xAf951AE00Ab357b8a2cFa66901E0D4D0F96e397B";

const myContract = new web3.eth.Contract(contract.abi, contract.address);

const continents = ['Asia', 'Africa', 'NorthAmerica', 'SouthAmerica', 'Antarctica', 'Europe', 'Australia']

function CrypChar() {
    const [bals, setBals] = React.useState({});
    const [events, setEvents] = React.useState([]);

    continents.map( (cont, i) => {
        myContract.methods.bals(i)
            .call( (error, result) => bals[cont] = result);
    });

    function getEvents(error, data) {
        const rows = data.map(row => row.returnValues);
        rows.forEach( (row, id) => {
            row['id'] = id;
            row.TimestampEST = hex2ascii(row.TimestampEST);
            row.Memo = hex2ascii(row.Memo);
            row.Value = Number(row.Value);
        })
        setEvents(rows)
        console.log(events)
    }

    function load() {
        myContract.getPastEvents('trans', {
            fromBlock: 0,
            toBlock: 'latest',
        }, getEvents)
    }

    return (
        <div>
            <Form web3={web3} myContract={myContract} />
            <TempDrawer bals={bals} />
            <Button variant="outlined" color="secondary" onClick={load}>
                Show Commitments
            </Button>
            <Dgrid events={events} />
        </div>
    );
}

export default CrypChar;
