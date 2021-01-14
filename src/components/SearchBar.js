import React from 'react'

const SearchBar = ({ query }) => {
    return (
        <div>
            <form>
                <label>
                    <input type='text' value={ query }/>
                </label>
            </form>
        </div>
    )
}

export default SearchBar
