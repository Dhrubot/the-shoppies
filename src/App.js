import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import NominationList from './components/NominationList'

const App = () => {

  return (
    <div>
      <SearchBar />
      <MovieList />
      <NominationList />
    </div>
  )
}

export default App

