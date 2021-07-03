import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
        
    var entries = Object.entries(props.show);
    if (!entries.length){
        return <div></div>;
    }

    entries.splice(14, 1);
    return (
        <Paper className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {entries.map( ([key, value]) => (
                        <Tab label={key} />
                    ))}
                </Tabs>
            </AppBar>
            
            <Box p={3}>
                <Typography>{entries[value][1]}</Typography>
            </Box>
            
        </Paper>
    );
}
