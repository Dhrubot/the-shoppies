import React, { useEffect } from "react";
import NominatedListItem from "./NominatedListItem";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  Divider,
  Grid,
  Typography,
  Button,
  List,
  CardContent,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { SnackbarProvider } from "notistack";

const useStyles = makeStyles((theme) => ({
  nominatedListBox: {
    height: "80vh",
    maxHeight: "100vh",
    overflow: "auto",
    margin: 20,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 50,
    backgroundColor: "#e53935",
    color: "white",
  },
}));

const NominationList = ({ nominatedMovies, setNominatedMovies }) => {
  const classes = useStyles();

  const isComepletedNominations = nominatedMovies.length === 5;

  const handleClearList = () => {
    setNominatedMovies([]);
  };

  const handleRemove = (nominatedMovies, movieID) => {
    if (nominatedMovies === undefined || nominatedMovies === 0) {
      return [];
    } else {
      let newState = nominatedMovies.filter((m) => movieID !== m.imdbID);
      setNominatedMovies(newState);
    }
  };

  useEffect(() => {
    handleRemove();
  }, []);

  const nominationInfo = (
    <>
      {nominatedMovies?.length ? (
        <>
          <Grid item xs={6}>
            <Typography
              component="h6"
              style={{ display: "flex", marginLeft: "16px" }}
            >
              {nominatedMovies ? nominatedMovies?.length : "0"} Nominations
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              className={classes.button}
              startIcon={<DeleteIcon />}
              size="small"
              onClick={handleClearList}
            >
              CLEAR LIST
            </Button>
          </Grid>
        </>
      ) : (
        <Grid item>
          <Typography
            component="h6"
            style={{ display: "flex", margin: "16px" }}
          >
            You haven't nominated any movies yet.
          </Typography>
        </Grid>
      )}
    </>
  );

  return (
    <SnackbarProvider>
      <Card className={classes.nominatedListBox}>
        <CardHeader
          title="Nominations List"
          subheader="Maximum 5 nominations allowed."
        />
        <Divider variant="middle" />
        <Grid container alignItems="center">
          {nominationInfo}
        </Grid>
        <Divider variant="middle" />
        <CardContent>
          <List>
            {nominatedMovies?.length ? (
              nominatedMovies.map((movie) => (
                <NominatedListItem
                  movie={movie}
                  handleRemove={handleRemove}
                  nominationList={nominatedMovies}
                />
              ))
            ) : (
              <h1></h1>
            )}
          </List>
        </CardContent>
      </Card>
    </SnackbarProvider>
  );
};

export default NominationList;
