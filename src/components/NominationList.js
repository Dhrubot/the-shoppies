import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Card } from '@material-ui/core'


const useStyles = makeStyles({
    nominatedListBox: {
        height: '60vh',
        maxHeight: '100vh',
        overflow: 'auto',
        margin: 20
    }
})

const NominationList = ({ nominated, setNominatedMovies }) => {

    const classes = useStyles()

    const handleRemove = (nominatedMovies, movieID) => {
        let newState = nominatedMovies.filter(m => movieID !== m.imdbID)
        setNominatedMovies(newState)
    }
    
    return (
        <>
        { nominated?.length ? nominated.map((movie, idx) => 
        <Card className={classes.nominatedListBox} key={idx}>
            
                <>
                <h2>{ movie.Title }</h2>
                <button onClick={ () => handleRemove(nominated, movie.imdbID) }>Remove</button>
                </>
            
        </Card>
        ) : <Card className={classes.nominatedListBox}>No movies yet!</Card>}
        </>
    )
}

export default NominationList
