import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import NominationList from "./components/NominationList";
import { Header } from "./components/Header";
import { Grid, CssBaseline, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useSnackbar } from "notistack";


const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => {

  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState( JSON.parse(localStorage.getItem("nominatedMovies")) || [] )
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState(0)
  
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    getMovies(searchQuery, page)
  }, [searchQuery, page]);

  const getMovies = (query, page) => {
    fetch(`https://www.omdbapi.com/?apikey=a48618b7&type=movie&s=${query}&page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.Search)
      setTotalResult(data.totalResults)
    });
  }
  //local storage for persisiting data

  const onSetNomination = (nominations) => {
    setNominatedMovies(nominations);
    localStorage.setItem("nominatedMovies", JSON.stringify(nominations));
  };
  

  const handleAddingNomination = (movie) => {
    const message =
      "You've nominated maxmium number of movies. Delete items from nominations list to add more.";
    const snackbarColor = { variant: "error" };

    nominatedMovies.length === 5
      ? enqueueSnackbar(message, snackbarColor)
      : onSetNomination([...nominatedMovies, movie])
  };

  const handleClearList = () => {
    onSetNomination([]);
  };



  const handleRemoveNomination = (movieID) => {
    if (nominatedMovies === undefined || nominatedMovies === 0) {
      return [];
    } else {
      let newState = nominatedMovies.filter((m) => movieID !== m.imdbID);
      onSetNomination(newState);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value)
    getMovies(searchQuery, page)
  }

  return (
    <ThemeProvider theme={theme}>
      {console.log(nominatedMovies)}
      <Header />
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
          <MovieList
            movies={movies}
            nominateMovie={ handleAddingNomination }
            nominatedMovies={nominatedMovies}
            query={searchQuery}
            page={page}
            handlePageChange={ handlePageChange }
            totalResult={totalResult}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <NominationList
            nominatedMovies={nominatedMovies}
            removeMovie={ handleRemoveNomination }
            clearList={ handleClearList }
          />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
