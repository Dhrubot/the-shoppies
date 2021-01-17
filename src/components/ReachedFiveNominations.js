import React from "react";
import { Box, Collapse, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const ReachedFiveNominations = ({ show }) => {
  return (
    <Box>
      <Collapse in={show}>
        <Alert severity="success">
          <AlertTitle>
            <Typography align="left">
              <strong>Thank You!</strong>
            </Typography>
          </AlertTitle>
          <Typography align="left">You have selected 5 movies.</Typography>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default ReachedFiveNominations;
