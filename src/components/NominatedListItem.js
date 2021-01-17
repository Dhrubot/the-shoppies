import React from "react";
import DefaultImg from "../images/NoImage.jpg";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles({
  avatar: {
    width: "50px",
    height: "auto",
    marginRight: "10px",
  },
});

const NominatedListItem = ({ movie, removeMovie }) => {
  const classes = useStyles();
  const poster = movie?.Poster === "N/A" ? DefaultImg : movie.Poster;
  

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <img alt={movie.Title} src={poster} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={movie.Title}
          secondary={
            <Typography
              component="span"
              variant="body2"
              color="textPrimary"
              style={{ display: "inline" }}
            >
              {movie.Year}
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <Tooltip TransitionComponent={Zoom} title="DELETE">
            <IconButton
              edge="end"
              onClick={() => removeMovie(movie.imdbID)}
            >
              <DeleteForeverRoundedIcon
                style={{ color: "#e53935", fontSize: 28 }}
              />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default NominatedListItem;
