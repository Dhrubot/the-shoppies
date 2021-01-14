import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import NominationList from './components/NominationList'

const App = () => {

  const [movies, setMovies] = useState(["I am a movie!!!", "I am movie number 2"])

  return (
    <div>
      <SearchBar />
      <MovieList movies={movies}/>
      <NominationList />
    </div>
  )
}

export default App

