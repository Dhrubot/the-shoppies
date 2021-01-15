import React from 'react'

const MovieCard = ({ movie, nominateMovie, nominatedMovies }) => {

    const handleAddingNomination = (nominatedMovies, movie) => {
        nominatedMovies.length === 5 ? <h2>You already chose 5 movies.</h2> : nominateMovie([...nominatedMovies, movie])
    }
    

    return (
        <div>
            <h4>{movie.Title}</h4>
            <button onClick={ () => handleAddingNomination(nominatedMovies, movie)} disabled={nominatedMovies.includes(movie)}>Nominate</button>
        </div>
    )
}

export default MovieCard
