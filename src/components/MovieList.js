import React from 'react'
import MovieCard from './MovieCard'
import { makeStyles } from "@material-ui/core/styles"
import {
    Card,
    CardHeader,
    Divider,
    Grid,
  } from "@material-ui/core";
import { SnackbarProvider } from 'notistack';


  const useStyles = makeStyles({
    moviesListBox: {
        minHeight: '40vh',
        maxHeight: '100vh',
        overflow: 'auto',
        margin: 20,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
})

const MovieList = ({ movies, nominateMovie, nominatedMovies, query }) => {

    const classes = useStyles()

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

    const movieListHeader = (<>
        { movies === undefined || movies.length === 0  ? (
            <CardHeader title='Search By Movie Name.' subheader='Use 3 or more character.'/>)
            :
            (<CardHeader title={`Search result for "${query}"`}/>
        ) }
    </>)

    return (
        <SnackbarProvider  
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            preventDuplicate
        >
            <Card className={classes.moviesListBox}>
                <Grid container >
                    <Grid Item xs={12}>
                        { movieListHeader }
                        <Divider variant="middle" />
                    </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                    { movieList }
                </Grid>
            </Card>
        </SnackbarProvider>
    )
}

export default MovieList
