import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

    const handleAddingNomination = (nominatedMovies, movie) => {
        nominatedMovies.length === 5 ? <h2>You already chose 5 movies.</h2> : nominateMovie([...nominatedMovies, movie])
    }
    

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
                    image={movie.Poster}
                />
            </CardActionArea>
            <CardContent>
                <Button fullWidth variant='contained' style={{color: 'red'}} onClick={ () => handleAddingNomination(nominatedMovies, movie)} disabled={nominatedMovies.includes(movie)}>NOMINATE</Button>
            </CardContent>
        </Card>
    )
}

export default MovieCard
