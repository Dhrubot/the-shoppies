import React from "react";
import MovieCard from "./MovieCard";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Divider, Grid } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  moviesListBox: {
    minHeight: "40vh",
    maxHeight: "100vh",
    overflow: "auto",
    margin: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

const MovieList = ({ movies, nominateMovie, nominatedMovies, query, page, handlePageChange, totalResult }) => {
  const classes = useStyles();

  const movieList = (
    <>
      {movies === undefined || movies.length === 0 ? (
        <></>
      ) : (
        movies.map((movie, idx) => {
          return (
            <MovieCard
              key={idx}
              movie={movie}
              nominateMovie={nominateMovie}
              nominatedMovies={nominatedMovies}
            />
          );
        })
      )}
    </>
  );

  const movieListHeader = (
    <>
      {movies === undefined || movies.length === 0 ? (
        <CardHeader
          title="Search By Movie Name."
          subheader="Use 3 or more character."
        />
      ) : (
        <CardHeader title={`Search result for "${query}"`} />
      )}
    </>
  );

  const pagination = movies?.length ? 
  <Pagination 
    style={{marginBottom: '10px'}}
    page={page}
    count={Math.ceil(totalResult/10)}
    onChange={handlePageChange}
  /> : ''

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      preventDuplicate
    >
      <Card className={classes.moviesListBox}>
        <Grid container>
          <Grid item xs={12}>
            {movieListHeader}
            <Divider variant="middle" />
          </Grid>
        </Grid>
        <Grid container>
          {movieList}
        </Grid>
          {pagination}
      </Card>
    </SnackbarProvider>
  );
};

export default MovieList;
