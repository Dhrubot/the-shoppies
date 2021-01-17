import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultImg from "../images/NoImage.jpg";
import { useSnackbar } from "notistack";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: 250,
    height: 400,
    margin: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  cardMedia: {
    width: "100%",
    height: 250,
    display: "block",
    paddingTop: "56.25%",
    marginTop: "10px",
  },
  cardHeader: {
    color: "white",
    backgroundColor: "rgba 0 0 0 0.1",
  },
});

const MovieCard = ({ movie, nominateMovie, nominatedMovies }) => {
  const classes = useStyles();

  // Notification if wants to add movies afer 5 movies
  const { enqueueSnackbar } = useSnackbar();
  const handleAddingNomination = (nominatedMovies, movie) => {
    const message =
      "You've nominated maxmium number of movies. Delete items from nominations list to add more.";
    const snackbarColor = { variant: "error" };

    nominatedMovies.length === 5
      ? enqueueSnackbar(message, snackbarColor)
      : nominateMovie([...nominatedMovies, movie]);
  };


  // default movie poster
  const poster = movie?.Poster === "N/A" ? DefaultImg : movie.Poster;

  //imdb Redirects
  const imdbURL = `https://imdb.com/title/${movie.imdbID}`


  return (
    <Card className={classes.card} key={(movie.imdbID)}>
      <CardActions
        onClick={() => window.open(imdbURL)}
      >
        <CardActionArea>
          <CardContent>
            <Typography>{movie.Title}</Typography>
          </CardContent>
          <CardMedia className={classes.cardMedia} image={poster} />
        </CardActionArea>
      </CardActions>
      <CardContent>
        <Button
          fullWidth
          variant="contained"
          style={{ color: "red" }}
          onClick={() => handleAddingNomination(nominatedMovies, movie)}
          disabled={nominatedMovies.includes(movie)}
        >
          NOMINATE
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
