import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardActions } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        margin: "120px auto 50px",
        maxWidth: 345,
        overflow: "visible",
    },
    cardMedia: {
        margin: "-70px auto 0",
        width: "80%",
        height: 140,
        borderRadius: "4px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        position: "relative",
        zIndex: 1000
    },
    cardHeader: {
        color: 'black',
        backgroundColor: 'white'
    },
})

const MovieCard = ({ movie, nominateMovie, nominatedMovies }) => {

    const classes = useStyles()

    const handleAddingNomination = (nominatedMovies, movie) => {
        nominatedMovies.length === 5 ? <h2>You already chose 5 movies.</h2> : nominateMovie([...nominatedMovies, movie])
    }
    

    return (
        <Card className={classes.card} key={movie.imdbID}>
            <CardMedia
                className={classes.cardMedia}
                image={movie.Poster}
            />
            <CardHeader className={classes.cardHeader} title={movie.Title}/>
            <CardActions>
                <button onClick={ () => handleAddingNomination(nominatedMovies, movie)} disabled={nominatedMovies.includes(movie)}>Nominate</button>
            </CardActions>
        </Card>
    )
}

export default MovieCard
