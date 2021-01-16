import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'

const useStyles = makeStyles({
    input: {
        borderRadius: '20px',
        height: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderStyle: 'none',
        width: '100%',
        color: 'white',
        outline: 'none',
        fontSize: 20,
        paddingLeft: '50px'
    },
    containerCard: {
        width: '50%',
        minWidth: '200px',
        backgroundColor: 'rgba(48, 48, 48, 0.1)',
        border: 'none',
        boxShadow: 'none',
        display: 'flex',
        marginLeft: '25%',
        justifyContent: 'center'
    }
})

const SearchBar = ({ query, setQuery }) => {
    const classes = useStyles()
    const handleOnChange = e => {
        setQuery(e.target.value)
    }


    return (
        <>
        <Card className={classes.containerCard}>
            <form onSubmit={e => e.preventDefault()} style={{width: '100%'}}>
                <input className={classes.input} type='text' value={ query } onChange={ handleOnChange } placeholder='Search for your favorite movies here'/>
            </form>
        </Card>
        </>
    )
}

export default SearchBar
