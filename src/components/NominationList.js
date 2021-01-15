import React from 'react'

const NominationList = ({ nominated, setNominatedMovies }) => {

    const handleRemove = (nominatedMovies, movieID) => {
        let newState = nominatedMovies.filter(m => movieID !== m.imdbID)
        setNominatedMovies(newState)
    }
    
    return (
        <div>
            { nominated && nominated.map((movie, idx) => 
                <>
                <h2 key={idx}>{ movie.Title }</h2>
                <button onClick={ () => handleRemove(nominated, movie.imdbID) }>Remove</button>
                </>
            )}
        </div>
    )
}

export default NominationList
