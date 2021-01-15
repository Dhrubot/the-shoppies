import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import NominationList from './components/NominationList'
import{ Container, Grid }from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
}) 

const App = () => {

  const classes = useStyles()

  const [movies, setMovies] = useState([])
  const [nominatedMovies, setNominatedMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=a48618b7&s=${searchQuery}`)
    .then(res => res.json())
    .then(data => setMovies(data.Search))
  }, [searchQuery])


  return (
    <div className={classes.root}>
      <Grid container direction='row' alignItems='center' justify='center' >
        <SearchBar query={ searchQuery } setQuery={ setSearchQuery }/>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <MovieList movies={ movies } nominateMovie={ setNominatedMovies } nominatedMovies={ nominatedMovies }/>
        </Grid>
        <Grid item sx={6}>
          <NominationList nominated={ nominatedMovies } setNominatedMovies={ setNominatedMovies } />
        </Grid>
      </Grid>
    </div>
  )
}

export default App

