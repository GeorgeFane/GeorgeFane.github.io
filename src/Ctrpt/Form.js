import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Paper, Button, Grid, InputLabel, MenuItem, FormHelperText, FormControl, Select, TextField } from '@material-ui/core';

import Score from './Score';
import Abcjs from './Abcjs';

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

export default function Form() {
    const classes = useStyles();

    function FormRow({ line }) {
        const classes = useStyles();
        const [clef, setClef] = React.useState('Treble');
        const [key, setKey] = React.useState('C');
        const [notes, setNotes] = React.useState('');

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
                                value={clef}
                                onChange={(event) => setClef(event.target.value)}
                            >
                                {'Treble Alto Bass'.split(' ')
                                    .map(clef => (
                                        <MenuItem value={clef}>
                                            {clef}
                                        </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Key
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id={line + '-key'}
                                value={key}
                                onChange={(event) => setKey(event.target.value)}
                            >
                                {'A, A#, Bb, B, C, C#, Db, D, D#, Eb, E, F, F#, Gb, G, G#'.split(', ').map(clef => (
                            <MenuItem value={clef}>{clef}</MenuItem>

                                ))}
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField 
                            label="Notes"
                            onChange={(event) => setNotes(event.target.value)}
                        />
                    </Paper>
                </Grid>
                
                <Abcjs
                    abcNotation={`                    
K:Dm
V: 1 clef=${clef.toLowerCase()}
L:1/1
${notes}
${notes}
                    `}
                />
            </React.Fragment>
        );
    }

    return (
        <Grid container spacing={1}>
            {'Counterpoint, Cantus Firmus'.split(', ').map(line => (
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
