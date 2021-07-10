import React from 'react';
import clsx from 'clsx';
import { createMuiTheme, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Paper, ThemeProvider, Tooltip, Button } from '@material-ui/core';
import { Menu, ChevronLeft, Brightness3, Brightness7, LiveTv, AccountBalance, TableChart, GitHub, LinkedIn, Create, Home } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';

import Me from './Me';
import RatingsMap from './RatingsMap/RatingsMap';
import CrypChar from './CrypChar/CrypChar';
import DataViz from './DataViz/DataViz';

const tabs = [
    {
        icon: <Home />, label: 'Me', content: <Me />
    },
    {
        icon: <TableChart />, label: 'DataViz', content: <DataViz />,
        sub: "There is some information that is both important to me and not presented well. I retrieved this data myself, through web scraping and API calls."
    },
    {
        icon: <AccountBalance />, label: 'CrypChar', content: <CrypChar />,
        sub: "This is an MVP that uses blockchain to make charity operations more accountable. Made for Blockchain@Michigan's summer cohort project, this uses web3.js to call a Solidity smart contract."
    },
    {
        icon: <LiveTv />, label: 'RatingsMap', content: <RatingsMap />,
        sub: "I saw a great visual of Better Call Saul's ratings, with a color-coded cell for every episode of every season. There wasn't a single episode that wasn't green. Now you can see that for any show."
    },
];

const drawerWidth = 240;
const useStyles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: '100%',
        backgroundColor: theme.palette.background.default,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
});
export const light = {
    palette: {
        type: "light"
    }
};
export const dark = {
    palette: {
        type: "dark"
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            value: 0,
            theme: false,
        }
    }

    setOpen = open => this.setState({ open });
    setValue = value => this.setState({ value });
    handleDrawerOpen = () => this.setState({ open: true });
    handleDrawerClose = () => this.setState({ open: false });
    switchTheme = () => this.setState({ theme: !this.state.theme });

    Top(){
        const { classes } = this.props;
        return (
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: this.state.open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: this.state.open,
                        })}
                    >
                        <Menu />
                    </IconButton>
                    
                    <Typography variant="h4" className={classes.title}>
                        George Fane
                    </Typography>

                    <IconButton 
                        color='inherit'
                        onClick={this.switchTheme}
                    >
                        {this.state.theme ? <Brightness3 /> : <Brightness7 />}
                    </IconButton>

                </Toolbar>
            </AppBar>
        );
    }

    Side() {
        const { classes } = this.props;
        return (
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeft />                    
                    </IconButton>
                </div>
                <Divider />
    
                <List>    
                    {tabs.map((row, index) => (
                        <ListItem 
                            button 
                            onClick={() => this.setValue(index)}
                        >
                            <ListItemIcon style={{ color: row.color }}>
                                { row.icon }
                            </ ListItemIcon>
                            <ListItemText style={{ color: row.color }} primary={row.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }

    Bottom() {
        const { classes } = this.props;
        //return tabs[this.state.value].content
        return (
            <Paper className={classes.content}>
                <div className={classes.toolbar} />

                <Typography variant='h2'>
                    {tabs[this.state.value].label}

                    <IconButton
                        color='inherit'
                        href={"https://github.com/GeorgeFane/GeorgeFane.github.io/tree/master/src/" + tabs[this.state.value].label}
                        target='_blank'                            
                    >
                        <GitHub fontSize='large' />
                    </IconButton>
                </Typography>

                <Typography>
                    {tabs[this.state.value].sub}
                </Typography>

                {tabs[this.state.value].content}
            </Paper>
        );
    }
    
    DataGridDemo(rows) {
        if (!rows.length){
            return (
                <div>
                    No Rows
                </div>
            );
        }

        var columns = [{field: 'id'}].concat(Object.keys(rows[0])
            .map(key => (
                {
                    field: key,
                    width: 200,
                }
            ))
        );
        
        rows.forEach((row, index) => row['id'] = index);
    
        const data = {
            rows: rows,
            columns: columns,
            pageSize: 5,
            autoHeight: true,
        };
        
        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid {...data} />
            </div>
        );
    }

    render() {
        //return <Priority1 />;

        const { classes } = this.props;
        const appliedTheme = createMuiTheme(this.state.theme ? light : dark);

        return (
            <ThemeProvider theme={appliedTheme}>
                <div className={classes.root}>
                    <CssBaseline />
                    {this.Top()}
                    {this.Side()}
                    {this.Bottom()}
                </div>
            </ThemeProvider>
        );
    }
}

export default withStyles(useStyles)(App);
