import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography align="right" variant="body1">
          © 2021 Shoppies
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
