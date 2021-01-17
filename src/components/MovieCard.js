import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DefaultImg from '../images/NoImage.jpg'
import { useSnackbar } from 'notistack';
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


    // Notification if wants to add movies afer 5 movies
    const { enqueueSnackbar } = useSnackbar()
    const handleAddingNomination = (nominatedMovies, movie) => {
        const message = "You've nominated maxmium number of movies. Consider deleting from your nominated movie list."
        const snackbarColor = { variant: 'error' }

        nominatedMovies.length === 5 ? enqueueSnackbar(message, snackbarColor ) 
        : nominateMovie([...nominatedMovies, movie])
    }
    //Notifications after done adding 5 movies
    const success = nominatedMovies.length === 5 ? enqueueSnackbar('Thank you for helping.', { variant: 'success' }) : ''

    

    // default movie poster
    const poster = movie?.Poster === 'N/A' ? DefaultImg : movie.Poster
    

    return (
        <Card className={classes.card} key={movie.imdbID}>
            <CardActionArea>
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
