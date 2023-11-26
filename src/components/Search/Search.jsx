import React from 'react'

const Search = ({ search, setSearch }) => {

    return (
        <form className='search' onSubmit={(e) => e.preventDefault()} >
            <input
                id='searchBox'
                type='text'
                role='searchbox'
                placeholder='Search... '
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    )
}

export default Search
