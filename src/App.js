import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import NominationList from './components/NominationList'

const App = () => {

  const [movies, setMovies] = useState([])
  const [nominatedMovies, setNominatedMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=a48618b7&s=${searchQuery}`)
    .then(res => res.json())
    .then(data => setMovies(data.Search))
  }, [searchQuery])


  return (
    <div>
      <SearchBar query={ searchQuery } setQuery={ setSearchQuery }/>
      <MovieList movies={ movies } nominateMovie={ setNominatedMovies } nominatedMovies={ nominatedMovies }/>
      <NominationList nominated={ nominatedMovies } setNominatedMovies={ setNominatedMovies } />
    </div>
  )
}

export default App

