import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactMarkdown from 'react-markdown';

const tabs = require('./reviewed.json');

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 333,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        textAlign: 'center',
    },
    review: {
        width: '88%',
        padding: theme.spacing(2),
    },
}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const { handleChange, state } = props;
    const { value, markdown } = state;

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {tabs.map( (tab, value) => (
                    <Tab
                        label={tab}
                        value={value}
                    />
                ))}
            </Tabs>
            
            <div className={classes.review}>
                <ReactMarkdown children={markdown} />
            </div>
            
        </div>
    );
}
