import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { TextField, Box, Grid, Tooltip, IconButton, Typography, InputBase } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import Mdining from './Mdining';
import CryptoQuotes from './CryptoQuotes';
const tabs = [
    {
        label: 'Mdining', content: <Mdining />, repo: 'MDining-Scraper',
        sub: "Michigan's dining hall menus are split by hall and are not displayed concisely. Here's a better option that I actually used daily during first semester."
    },
    {
        label: 'CryptoQuotes', content: <CryptoQuotes />, repo: 'cmc-api',
        sub: "My dad is really into crypto trading. He showed me CoinMarketCap.com, where he gets quotes, and I disliked that it is very slow and loads only 100 quotes at a time. I offered to build him a tool."
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function LabTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabContext value={value}>
                <TabList onChange={handleChange}>
                    {tabs.map( (tab, value) => <Tab 
                        label={tab.label} value={value} 
                    />)}
                </TabList>
                
                {tabs.map( (tab, value) => <div>
                    <TabPanel value={value}>
                        <Typography>
                            <IconButton
                                color='inherit'
                                href={"https://github.com/GeorgeFane/" + tab.repo}
                                target='_blank'                            
                            >
                                <GitHub fontSize='large' />
                            </IconButton>

                            {tab.sub}
                        </Typography>
                        {tab.content}
                    </TabPanel>
                </div>
                )}
            </TabContext>
        </div>
    );
}

export default LabTabs;