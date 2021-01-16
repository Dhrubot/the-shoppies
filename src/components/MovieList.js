import React from 'react'
import MovieCard from './MovieCard'
import { makeStyles } from "@material-ui/core/styles"
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
  } from "@material-ui/core";


  const useStyles = makeStyles({
    moviesListBox: {
        minHeight: '40vh',
        maxHeight: '80vh',
        overflow: 'auto',
        margin: 20,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
})

const MovieList = ({ movies, nominateMovie, nominatedMovies }) => {

    const classes = useStyles()
    const movieListHeader = <h2>Movielist</h2>
    const movieList = (
        <>
            { movies === undefined || movies.length === 0  ? (
                <></>
            ) : (
                movies.map(movie => {
                    return (
                        <MovieCard movie={movie} nominateMovie={nominateMovie} nominatedMovies={ nominatedMovies }/>
                    )
                })
            )}
        </>
    )

    return (
        <>
            <Card className={classes.moviesListBox}>
                { movieList }
            </Card>
        </>
    )
}

export default MovieList
