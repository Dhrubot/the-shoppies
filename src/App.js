import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import NominationList from './components/NominationList'
import { Header } from './components/Header'
import { Grid, CssBaseline, createMuiTheme }from '@material-ui/core'
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
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
    fetch(`http://www.omdbapi.com/?apikey=a48618b7&type=movie&s=${searchQuery}`)
    .then(res => res.json())
    .then(data => setMovies(data.Search))
  }, [searchQuery])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <Grid container spacing={2}  >
        <Grid item xs={12} >
          <SearchBar query={ searchQuery } setQuery={ setSearchQuery }/>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
          <MovieList movies={ movies } nominateMovie={ setNominatedMovies } nominatedMovies={ nominatedMovies } query={searchQuery}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <NominationList nominatedMovies={ nominatedMovies } setNominatedMovies={ setNominatedMovies } />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  )
  
}

export default App

