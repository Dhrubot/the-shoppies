import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import backgroundImg from "../images/background.jpg";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12),
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: backgroundImg }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              {"The Shoppies: Movie Awards For Entrepreneurs"}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {"Nominate Your Favorite Movies For The Shoppies Movie Award!"}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
