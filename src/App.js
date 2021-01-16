import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import NominationList from './components/NominationList'
import{ Grid, CssBaseline, createMuiTheme, Card }from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  searchContainer: {
    margin: 'auto'
  }
}) 

const theme = createMuiTheme({
  palette: {
    type: "dark"
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={4}  >
        <Grid item xs={12} className={classes.searchContainer} >
          <SearchBar query={ searchQuery } setQuery={ setSearchQuery }/>
        </Grid>
        <Grid item xs={6} >
          <MovieList movies={ movies } nominateMovie={ setNominatedMovies } nominatedMovies={ nominatedMovies }/>
        </Grid>
        <Grid item xs={6} >
          <NominationList nominated={ nominatedMovies } setNominatedMovies={ setNominatedMovies } />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
  
}

export default App

