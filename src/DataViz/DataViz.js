import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import Mdining from './Mdining';
import CryptoQuotes from './CryptoQuotes';
const tabs = [
    { label: 'Mdining', content: <Mdining /> },
    { label: 'CryptoQuotes', content: <CryptoQuotes /> },
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
                <AppBar position="static">
                    <TabList onChange={handleChange}>
                        {tabs.map((tab, value) => <Tab label={tab.label} value={value} />)}
                    </TabList>
                </AppBar>
                {tabs.map((tab, value) => <TabPanel value={value}>{tab.content}</TabPanel>)}
            </TabContext>
        </div>
    );
}

export default LabTabs;