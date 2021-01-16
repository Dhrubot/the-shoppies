import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { 
    Card, 
    CardHeader, 
    Divider,
    Grid
} from '@material-ui/core'


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
        <Card className={classes.nominatedListBox} >
            <CardHeader title='Nominations List' subheader='Maximum 5 nominations allowed.'/>
            <Divider variant="middle" />
            <Grid container>
                <Grid item xs={8}> 
                </Grid>
            </Grid>
        { nominated?.length ? nominated.map((movie, idx) => 
        <CardHeader key={idx}>
            <>
                <h2>{ movie.Title }</h2>
                <button onClick={ () => handleRemove(nominated, movie.imdbID) }>Remove</button>
            </>
        </CardHeader>
        ) : <Card className={classes.nominatedListBox}>No movies yet!</Card>}
        </Card>
    )
}

export default NominationList
