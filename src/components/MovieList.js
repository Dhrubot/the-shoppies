import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.map((m, idx) => <h6>{m}</h6>)}
        </div>
    )
}

export default MovieList
