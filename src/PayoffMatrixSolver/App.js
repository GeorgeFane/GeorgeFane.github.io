import React, { useState, Component } from 'react';
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';

import * as gpm from './gpm';

const columns = 'id index payoffs'.split(' ').map(field => (
    { field }
));
console.log(columns);

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

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            players: 2,
            strats: 2,
            rows: [],
            loading: true,
        };
    }

    Dgrid() {
        const { rows, loading } = this.state;
        const data = { rows, columns, loading, autoHeight: true }
        return <DataGrid {...data} />;
    }

    render() {
        const { classes } = this.props;
        const { players, strats } = this.state;
        console.log(this.state)
        return (
            <div>

                <Typography variant='h6'>
                    The randomly-generated matrix will be used only if the 'Payoff Matrix' field is blank. Also, the minimum game is 2 players and 2 strategies.
                </Typography>

                <Grid container spacing={1}>
                    
                    <Grid item xs>
                        <Paper className={classes.paper}>                    
                            <Typography variant='h6'>
                                Generate Random Matrix:
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>                    
                            <TextField 
                                label="No. Players" type='number' required
                                value={players}
                                onChange={(event) => {
                                    var players = Number(event.target.value);
                                    if (players < 2) {
                                        players = 2;
                                    }
                                    this.setState({ players });
                                }}
                            />
                        </Paper>
                    </Grid>
                    
                    <Grid item xs>
                        <Paper className={classes.paper}>                    
                            <TextField 
                                label="No. Strategies" type='number' required
                                value={strats}
                                onChange={(event) => {
                                    var strats = Number(event.target.value);
                                    if (strats < 2) {
                                        strats = 2;
                                    }
                                    this.setState({ strats });
                                }}
                            />
                        </Paper>
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>                    
                            <Typography variant='h6'>
                                OR Input Matrix:
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>                    
                            <TextField 
                                label="Payoff Matrix"
                            />
                        </Paper>
                    </Grid>
                </Grid>
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                        const rows = gpm.solve(players, strats);
                        console.log(rows);
                        const loading = false;
                        this.setState({ rows, loading });
                    }}
                >
                    Submit
                </Button>

                {this.Dgrid()}
            </div>
        );
    }
}

export default withStyles(useStyles)(App);
