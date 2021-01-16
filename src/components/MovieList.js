import React from 'react'
import MovieCard from './MovieCard'
import { makeStyles } from "@material-ui/core/styles"
import {
    Card,
    Grid,
    Typography,
  } from "@material-ui/core";


  const useStyles = makeStyles({
    moviesListBox: {
        height: '100vh',
        overflow: 'auto',
        margin: 20
    }
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
                {movieListHeader}
                { movieList }
            </Card>
        </>
    )
}

export default MovieList
