import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { 
    Card, 
    CardHeader, 
    Divider,
    Grid,
    Typography,
    IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const useStyles = makeStyles({
    nominatedListBox: {
        height: '60vh',
        maxHeight: '100vh',
        overflow: 'auto',
        margin: 20
    }
})

const NominationList = ({ nominatedMovies, setNominatedMovies }) => {

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
                    <Typography component='h6' style={{ display: 'flex', marginLeft: '16px'}}>
                        {nominatedMovies ? nominatedMovies?.length : '0'} Nominations
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Grid>
            <Grid item xs={2}>

            </Grid>
        { nominatedMovies?.length ? nominatedMovies.map((movie, idx) => 
        <CardHeader key={idx}>
            <>
                <h2>{ movie.Title }</h2>
                <button onClick={ () => handleRemove(nominatedMovies, movie.imdbID) }>Remove</button>
            </>
        </CardHeader>
        ) : <Card className={classes.nominatedListBox}>No movies yet!</Card>}
        </Card>
    )
}

export default NominationList
