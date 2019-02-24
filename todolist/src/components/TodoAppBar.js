import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {};

function TodoAppBar({ classes }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit">
          My Todo List
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

TodoAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoAppBar);
