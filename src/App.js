import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import NominationList from './components/NominationList'

const App = () => {

  const [movies, setMovies] = useState(["I am a movie!!!", "I am movie number 2"])
  const [nominatedMovies, setNominatedMovies] = useState(['I am the one you nominated'])
  const [searchQuery, setQuery] = useState('Search me!!!')

  return (
    <div>
      <SearchBar query={ searchQuery } />
      <MovieList movies={ movies }/>
      <NominationList nominated={ nominatedMovies }/>
    </div>
  )
}

export default App

