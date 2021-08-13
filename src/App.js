import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, ThemeProvider, Tooltip, Button, ButtonGroup, Toolbar, Divider } from '@material-ui/core';
import { GitHub, LinkedIn, Create } from '@material-ui/icons';

import Header from './Header';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

const items = [
    {
        title: 'MDining Scraper',
        desc: 'Aggregates all Michigan Dining Hall menus',
        href: 'https://georgefane.github.io/mdining/',
        image: 'https://pbs.twimg.com/profile_images/1321853034637512708/U6qI6-aq_400x400.jpg',
    },
    {
        title: 'RatingsMap',
        desc: 'Creates a heatmap of IMDB ratings for all episodes of a show',
        href: 'https://georgefane.github.io/ratingsmap/',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Better_Call_Saul_Season_4.jpg/220px-Better_Call_Saul_Season_4.jpg',
    },
    {
        title: 'CryptoCharity',
        desc: 'A blockchain MVP to make charity contributions more accountable. Made with Alex Beloiu, Abbas Kagal, and Will Wang.',
        href: 'https://georgefane.github.io/cryptocharity/',
        image: 'https://georgefane.github.io/cryptocharity/static/media/logo.bd51f56a.png',
    },
]

function CenteredGrid() {
    const classes = useStyles();

    const cards = items.map(item => (
        <Grid item xs={3}>
            <Card {...item} />
        </Grid>
    ));

    return (
        <div>
            <Header />

            <div className={classes.root}>

                <Typography variant='h4'>
                    About Me
                </Typography>

                <Grid container spacing={3}>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}>    
                            <img
                                width='100%'
                                alt='George Fane profile'
                                src='https://avatars.githubusercontent.com/u/39439818?v=4'
                            />
                            
                            <Typography variant='h6'>
                                Hi! I'm George Fane, a sophomore at the University of Michigan studying Business Adminstration and Computer Science.
                            </Typography>
                        </Paper>                        
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant='h6'>
                                I've liked the show Mad Men for a while, but just this summer I got into music and movies from that era. Since May during my free time I've watched eleven films from the 60s and earlier, seven of them starring Audrey Hepburn. There are some conference rooms on campus that I like going to: I hook my computer up to the big screen, turn off the lights, put my feet up, and enjoy the movie.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant='h6'>
                                Speaking of music, there was a Bobby Vinton song in the last season of Mad Men. It drew my attention to a whole century of music that I had ignored. Recently I've been listening to a lot of Bee Gees and Sam Cooke. There was one day that I practiced basketball shooting for an hour or two, listening to Moon River from Breakfast at Tiffany's on a loop.
                            </Typography>
                        </Paper>
                    </Grid>

                </Grid>
            
                <br />

                <Typography variant='h4'>
                    Projects
                </Typography>

                <Grid container spacing={3}>
                    {cards}
                </Grid>

            </div>
        </div>
    );
}

export default CenteredGrid;
                                                