import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import NominationList from './components/NominationList'

const App = () => {

  const API_KEY = 'a48618b7'
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`

  const [movies, setMovies] = useState([])
  const [nominatedMovies, setNominatedMovies] = useState(['I am the one you nominated'])
  const [searchQuery, setUserQuery] = useState('Search me!!!')

  useEffect(() => {
    getMovies(searchQuery)
  }, [searchQuery])

  const getMovies = query =>{
    fetch(`${API_URL}${query}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <SearchBar query={ searchQuery } setQuery={ setUserQuery }/>
      <MovieList movies={ movies }/>
      <NominationList nominated={ nominatedMovies }/>
    </div>
  )
}

export default App

