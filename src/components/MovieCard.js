import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultImg from "../images/NoImage.jpg";
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
    margin: "auto",
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

  // default movie poster
  const poster = movie?.Poster === "N/A" ? DefaultImg : movie.Poster;

  //imdb Redirects
  const imdbURL = `https://imdb.com/title/${movie.imdbID}`;

  return (
    <Card className={classes.card} key={movie.imdbID}>
      <CardActions onClick={() => window.open(imdbURL)}>
        <CardActionArea>
          <CardContent>
            <Typography
              style={{ fontWeight: "bold" }}
              align="center"
              noWrap={true}
            >
              {movie.Title}
            </Typography>
          </CardContent>
          <CardMedia className={classes.cardMedia} image={poster} />
        </CardActionArea>
      </CardActions>
      <CardContent>
        <Button
          fullWidth
          variant="contained"
          style={{ color: "red" }}
          onClick={() => nominateMovie(movie)}
          disabled={nominatedMovies.includes(movie)}
        >
          NOMINATE
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
