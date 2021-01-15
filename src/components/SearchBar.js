import React from 'react'
import{ Grid }from '@material-ui/core'

const SearchBar = ({ query, setQuery }) => {

    const handleOnChange = e => {
        setQuery(e.target.value)
    }


    return (
        <Grid item xs={12}>
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    <input type='text' value={ query } onChange={ handleOnChange } style={{width: '80%'}}/>
                </label>
                <button>Search</button>
            </form>
        </Grid>
    )
}

export default SearchBar
