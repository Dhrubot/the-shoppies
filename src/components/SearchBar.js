import React from 'react'

const SearchBar = ({ query, setQuery }) => {

    const handleOnChange = e => {
        setQuery(e.target.value)
    }


    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label>
                    <input type='text' value={ query } onChange={ handleOnChange }/>
                </label>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
