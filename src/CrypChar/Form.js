import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Box, Paper, Button, Grid, InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField } from '@material-ui/core';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        padding: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: '100%',
    },
});

const continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia']

const user = "0x61eB15d8A761Fc80387F50d84Fbf7Ff47a97d92F";
const charity = "0x596Aa50158BFf76F8D08F848d701C83a4F754d9c";
const store = "0xAf951AE00Ab357b8a2cFa66901E0D4D0F96e397B";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agent: 'User',
            continent: 0,
            value: 0,
            memo: '',
        };
    }

    donate() {
        this.props.web3.eth.sendTransaction({
            from: user,
            to: charity,
            value: this.state.value
        })
            .on('transactionHash', hash => {
                // console.log(
                //     new Date().toISOString(), 
                //     charity, 
                //     this.state.continent,
                //     this.state.value, 
                //     this.state.memo,
                //     hash
                // );
                this.props.myContract.methods.give(
                    new Date().toISOString(), 
                    charity, 
                    this.state.continent,
                    this.state.value, 
                    '',
                    hash
                ).send({ from: user });
            });
    }

    spend() {
        this.props.web3.eth.sendTransaction({
            from: charity,
            to: store,
            value: this.state.value
        })
            .on('transactionHash', hash => {
                this.props.myContract.methods.give(
                    new Date().toISOString(), 
                    store, 
                    this.state.continent,
                    this.state.value, 
                    this.state.memo,
                    hash
                ).send({ from: charity });
            });
    }

    send = (event) => this.state.agent === 'User' ? this.donate() : this.spend();

    render() {
        const classes = this.props.classes;
        return (
            <Grid container spacing={3}>

                <Grid item xs={1}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title}>
                            Form
                        </Typography>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Agent" value={this.state.agent} select
                            onChange={(event) => this.setState({ agent: event.target.value })}
                        >
                            {'User Charity'.split(' ').map(x => (
                                <MenuItem value={x}>{x}</MenuItem>
                            ))}
                        </TextField>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Continent" value={this.state.continent} select
                            onChange={(event) => this.setState({ continent: event.target.value })}
                        >
                            {continents.map((x, i) => (
                                <MenuItem value={i}>{x}</MenuItem>
                            ))}
                        </TextField>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Amount" type='number'
                            onChange={(event) => this.setState({ value: event.target.value })}
                        />
                    </Paper>
                </Grid>
            
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Memo (only stored for Charity)"
                            onChange={(event) => this.setState({ memo: event.target.value })}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={2}>
                    <div className={classes.paper}>
                        <Button 
                            variant="contained" color="primary"
                            onClick={this.send}
                        >
                            Submit
                        </Button>
                    </div>
                </Grid>
            
            </Grid>        
        );
    }
}

export default withStyles(useStyles)(Form);