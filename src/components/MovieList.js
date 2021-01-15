import React from 'react'

const MovieList = ({ movies }) => {
    const movieList = (
        <ul>
            { movies === undefined || movies.length === 0  ? (
                <></>
            ) : (
                movies.map((movie, idx) => {
                    return <li key={ idx }>{ movie.Title }</li>
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
