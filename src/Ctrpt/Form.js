import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Paper, Button, Grid, InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Submit() {
    return (
        <Box
            display="flex"
            justifyContent="flex-end"
        >
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
}

function FormRow({ line }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.title}>
                        {line}
                    </Typography>
                </Paper>
            </Grid>
            
            <Grid item xs>
                <Paper className={classes.paper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">
                            Clef
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id={line + '-clef'}
                        >
                                {'Treble Alto Bass'.split(' ').map(clef => (
                            <MenuItem value={clef}>{clef}</MenuItem>

                                ))}
                        </Select>
                    </FormControl>
                </Paper>
            </Grid>
            
            <Grid item xs>
                <Paper className={classes.paper}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Key</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id={line + '-key'}
                        >
                                {'A, A#, Bb, B, C, C#, Db, D, D#, Eb, E, F, F#, Gb, G, G#'.split(', ').map(clef => (
                            <MenuItem value={clef}>{clef}</MenuItem>

                                ))}
                        </Select>
                    </FormControl>
                </Paper>
            </Grid>
            
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <TextField 
                        id={line + '-notes'}
                        label="Notes"
                    />
                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default function Form() {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            {'Counterpoint CantusFirmus'.split(' ').map(line => (
                <Grid container item spacing={2}>
                    <FormRow line={line} />
                </Grid>
            ))}
        </Grid>
    );
}

export function NestedGrid() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Typography variant="h2" className={classes.title}>
                Counterpoint Checker
            </Typography>

            <Stages />

            <Form />
            <br />

            <Preview />
        </div>
    );
}
