import ReactMarkdown from 'react-markdown';

import content from './reviews/Barry.md';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { TextField, IconButton, Typography } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import VerticalTabs from './VerticalTabs';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 333,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    review: {
        width: 777,
        padding: theme.spacing(2),
    },
});

const tabs = require('./reviewed.json');
console.log(tabs)

class LabTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            markdown: '',
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });

        import(`./reviews/${tabs[value]}.md`)
            .then(path => fetch(path.default)
                .then(response => response.text() )
                .then(markdown => this.setState({ markdown }) )
            )
    };

    componentDidMount() {
        this.handleChange(null, 0);
    }

    render() {
        const { classes } = this.props;
        const { value, markdown } = this.state;

        return <VerticalTabs
            handleChange={this.handleChange}
            value={this.state.value}
            state={this.state}
            markdown={this.state.markdown}
            tabs={tabs}
        />
    }
}

export default withStyles(makeStyles)(LabTabs);
