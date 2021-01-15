import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies, nominateMovie, nominatedMovies }) => {

    const movieList = (
        <ul>
            { movies === undefined || movies.length === 0  ? (
                <></>
            ) : (
                movies.map(movie => {
                    return (
                        <MovieCard movie={movie} nominateMovie={nominateMovie} nominatedMovies={ nominatedMovies }/>
                    )
                })
            )}
        </ul>
    )

    return (
        <div>
            { movieList }
        </div>
    )
}

export default MovieList
