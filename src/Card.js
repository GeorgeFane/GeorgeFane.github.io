import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        width: 151,
        height: 151,
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    const { title, desc, image, href } = props;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={image}
                title={title + ' cover'}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography
                        component="h5"
                        variant="h5"
                    >
                        <Link
                            href={href}
                            target='_blank'
                        >
                            {title}
                        </Link>
                    </Typography>
                    <Typography variant="subtitle1">
                        {desc}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}
