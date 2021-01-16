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
        fontSize: 16,
    },
    containerCard: {
        width: '75%',
        backgroundColor: 'rgba(48, 48, 48, 0.1)',
        border: 'none',
        boxShadow: 'none',
        display: 'flexbox',
        marginLeft: '15%'
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
            <form onSubmit={e => e.preventDefault()}>
                <input className={classes.input} type='text' value={ query } onChange={ handleOnChange } placeholder='Search for your favorite movie here'/>
            </form>
        </Card>
        </>
    )
}

export default SearchBar
