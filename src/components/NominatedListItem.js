import React, { useEffect } from 'react'
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Typography,
    IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import {  makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    avatar: {
        width: "50px",
        height: "auto",
        marginRight: "10px",
    }
})

const NominatedListItem = ({ movie, handleRemove, nominationList }) => {

    const classes = useStyles()

    return (
        <ListItem key={movie.imdbID}>
            <ListItemAvatar >
                <img 
                    alt={movie.Title}
                    src={movie.Poster}
                    className={classes.avatar}
                />
            </ListItemAvatar>
            <ListItemText 
                primary={movie.Title}
                secondary={
                    <Typography
                        component='span'
                        variant='body2'
                        color='textPrimary'
                        style={{ display: 'inline' }}
                    >
                        { movie. Year }
                    </Typography>
                }
            />
            <ListItemSecondaryAction>
                <IconButton
                    edge='end'
                    onClick={ () => handleRemove(nominationList, movie.imdbID) } 
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default NominatedListItem
