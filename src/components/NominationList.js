import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { 
    Card, 
    CardHeader, 
    Divider,
    Grid,
    Typography,
    IconButton,
    Button,
    List,
    CardContent,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const useStyles = makeStyles ((theme) => ({
    nominatedListBox: {
        height: '60vh',
        maxHeight: '100vh',
        overflow: 'auto',
        margin: 20
    },
    button:{
       margin: theme.spacing(1),
       marginLeft: 50,
       backgroundColor: '#e53935',
       color: 'white'
    }
}))

const NominationList = ({ nominatedMovies, setNominatedMovies }) => {

    const classes = useStyles()

    const handleClearList = () => {
        setNominatedMovies([])
    }

    const handleRemove = (nominatedMovies, movieID) => {
        let newState = nominatedMovies.filter(m => movieID !== m.imdbID)
        setNominatedMovies(newState)
    }
    
    return (
        <Card className={classes.nominatedListBox} >
            <CardHeader title='Nominations List' subheader='Maximum 5 nominations allowed.'/>
            <Divider variant="middle" />
            <Grid container alignItems='center'>
                <Grid item xs={6}> 
                    <Typography component='h6' style={{ display: "flex", marginLeft: "16px" }}>
                        {nominatedMovies ? nominatedMovies?.length : '0'} Nominations
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="outlined"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        size='small'
                        onClick={handleClearList}
                    >
                        CLEAR LIST
                    </Button>
                </Grid>
            </Grid>
            <Divider variant="middle" />
        {/* { nominatedMovies?.length ? nominatedMovies.map((movie, idx) => 
        <CardHeader key={idx}>
            <>
                <h2>{ movie.Title }</h2>
                <button onClick={ () => handleRemove(nominatedMovies, movie.imdbID) }>Remove</button>
            </>
        </CardHeader>
        ) : <Card className={classes.nominatedListBox}>No movies yet!</Card>} */}
            <CardContent>
                <List>
                    {nominatedMovies?.length ? (
                        nominatedMovies.map((movie, idx) =>
                        <ListItem key={idx}>
                            <ListItemAvatar>
                                <img 
                                    alt={movie.Title}
                                    src={movie.Poster}
                                />
                            </ListItemAvatar>
                        </ListItem>)
                        ) : (
                        <h1></h1>)}
                </List>
            </CardContent>
        </Card>
    )
}

export default NominationList
