import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card } from '@material-ui/core'

const useStyles = makeStyles({
    input: {
        borderRadius: '20px',
        height: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.10)',
        borderStyle: 'none'
    },
    container: {
        width: '70%',
        justifyContent: 'center'
    }
})

const SearchBar = ({ query, setQuery }) => {
    const classes = useStyles()
    const handleOnChange = e => {
        setQuery(e.target.value)
    }


    return (
        <Card className={classes.container}>
        <form onSubmit={e => e.preventDefault()}>
            <input className={classes.input} type='text' value={ query } onChange={ handleOnChange } style={{width: '60%'}}/>
            <button>Search</button>
        </form>
        </Card>
    )
}

export default SearchBar
