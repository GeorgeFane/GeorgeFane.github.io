import React from "react";
import axios from "axios";

import { TextField, Box, Grid, ThemeProvider, CssBaseline, Typography, InputBase } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

import SearchAppBar from './SearchAppBar';
import ScrollTabs from './ScrollTabs';
import TestTabs from './TestTabs';

var colors = 'darkGreen green goldenRod darkGoldenRod indianRed fireBrick'.split(' ');
const useStyles = theme => {
    var root = { padding: theme.spacing(3) };
    colors.forEach(color => {
        root['& .' + color] = { backgroundColor: color };
    })
    return { root: root };
};

// api functions
const url = 'https://www.omdbapi.com/';

function search(title) {
    return axios.get(url, {
        params: {
            apikey: '14f8eef1',
            s: title,
            type: 'series',
        }
    })
        .then(x => x.data.Search || []);
}

function getShow(imdbID) {
    return axios.get(url, {
        params: {
            apikey: '14f8eef1',
            i: imdbID,
        }
    })
        .then(x => x.data || []);
}

function getSeason(imdbID, Season) {
    return axios.get(url, {
        params: {
            apikey: '14f8eef1',
            i: imdbID,
            Season: Season,
        }
    });
}

function getAll(imdbID, totalSeasons) {
    var requests = [];
    for (var i = 0; i < totalSeasons; i++){
        requests.push(
            getSeason(imdbID, i + 1)
        );
    }
    return axios.all(requests)
        .then(axios.spread( (...responses) => (
            responses.map(response => response.data) 
        )));
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [],
            show: {},
            seasons: [],
        }

        this.onChange = this.onChange.bind(this);
    }

    // components

    Form() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField 
                    label='Search Show'
                    variant='filled'
                    required
                    inputRef={(textarea) => this.body = textarea}
                />
            </form>
        );
    }

    ImageGridList() {
        if (this.state.rows.length) {
            return (
                <Grid container justify='left' spacing={2}>
                    {this.state.rows
                        .filter(tile => tile.Poster !== 'N/A')
                        .map((tile) => (
                            <Grid item onClick={() => this.handleSelect(tile.imdbID)}>
                                <img src={tile.Poster} alt={tile.Title} width={144} />
                            </Grid>
                        )
                    )}
                </Grid>
            );
        }
        
        <Box component="div" display="inline">inline</Box>
        return this.state.rows
            .map((tile) => (
                <Box component="div" display="inline">
                    <img src={tile.Poster} alt={tile.Title} width={99} />
                </Box>
            ));
    }
    
    process() {
        var seasons = this.state.seasons;
        if (!seasons.length){
            return false;
        }
    
        var rows = []
        var numbers = [];
        seasons.forEach(season => {
            var row = {};
            const episodes = season.Episodes || [];
            episodes.forEach(episode => {
                row[episode.Episode] = episode.imdbRating
            });
            rows.push(row);
    
            numbers.push(
                Math.max( ...Object.keys(row).map(Number) )
            );
        })
        
        var max = Math.max( ...numbers );
        var columns = [{ 
            field: 'id',
            headerName: 'Season',
        }]
        for (var i = 1; i < max + 1; i++){
            columns.push({
                field: i,
                headerName: 'E' + i,
            });
        }
        
        rows.forEach((row, index) => row['id'] = index + 1);
    
        return {
            rows: rows,
            columns: columns,
        };
    }

    RatingsMap() {
        const data = this.process();
        if (!data){
            return <div></div>;
        }
        
        const { classes } = this.props;
        return (
            <Box className={classes.root}>
                <DataGrid 
                    {...data}
                    autoHeight
                    getCellClassName={(params) => {
                        if (params.field === 'id' || !params.value || isNaN(params.value)) {
                            return '';
                        }
                        for (const [index, color] of colors.entries()) {
                            if (Number(params.value) >= (9 - index)) {
                                return color;
                            }
                        }
                        return colors[colors.length - 1];
                    }}
                />
            </Box>
        );
    }

    render() {
        return (
            <div>
                {this.Form()}
                <br />

                {this.ImageGridList()}
                <br />

                {this.RatingsMap()}
            </div>
        );
    }
    
    // hooks

    handleSubmit(event) { 
        event.preventDefault();     // prevents page from reloading on submit
        search(this.body.value)
            .then(x => {
                this.setState({ rows: x });
            });
    }

    onChange(event) { 
        event.preventDefault();     // prevents page from reloading on submit
        console.log(event.target.value);
        search(event.target.value)
            .then(x => {
                this.setState({ rows: x });
            });
    }
    
    handleSelect(imdbID) {
        getShow(imdbID)
            .then(x => {
                this.setState({ show: x });

                getAll(
                    this.state.show.imdbID,
                    Number(this.state.show.totalSeasons),
                )
                    .then(x => {
                        this.setState({ seasons: x });
                    });
            });        
    }
} // end CommentForm component

export default withStyles(useStyles)(CommentForm);