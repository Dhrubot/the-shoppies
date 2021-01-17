import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DefaultImg from '../images/NoImage.jpg'
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: 250,
        height: 400,
        margin: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    cardMedia: {
        width: '100%',
        height: 250,
        display: 'block',
        paddingTop: '56.25%',
        marginTop:'10px'
    },
    cardHeader: {
        color: 'white',
        backgroundColor: 'rgba 0 0 0 0.1',
    },
})

const MovieCard = ({ movie, nominateMovie, nominatedMovies }) => {

    const classes = useStyles()
    const { enqueueSnackbar } = useSnackbar();



    const handleAddingNomination = (nominatedMovies, movie) => {
        nominatedMovies.length === 5 ? enqueueSnackbar("You've nominated maxmium number of movies. Consider deleting from your nominated movie list.") : nominateMovie([...nominatedMovies, movie])
    }

    const poster = movie?.Poster === 'N/A' ? DefaultImg : movie.Poster
    

    return (
        <Card className={classes.card} key={movie.imdbID}>
            <CardActionArea
            >
                <CardContent>
                    <Typography>
                        {movie.Title}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.cardMedia}
                    image={poster}
                />
            </CardActionArea>
            <CardContent>
                <Button fullWidth variant='contained' style={{color: 'red'}} onClick={ () => handleAddingNomination(nominatedMovies, movie)} disabled={nominatedMovies.includes(movie)}>NOMINATE</Button>
            </CardContent>
        </Card>
    )
}

export default MovieCard
