import React from 'react'

const MovieCard = ({ movie, nominateMovie, nominatedMovies }) => {

    const handleAddingNomination = (nominatedMovies, movie) => {
        nominateMovie([...nominatedMovies, movie])
    }
    

    return (
        <div>
            <h4>{movie.Title}</h4>
            <button onClick={ () => handleAddingNomination(nominatedMovies, movie)} disabled={nominatedMovies.includes(movie)}>Nominate</button>
        </div>
    )
}

export default MovieCard
