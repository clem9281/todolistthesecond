import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

const styles = theme => {};

function TodoAppBar({ changeHandler, classes }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit">
          My Todo List
        </Typography>
        <Switch onClick={changeHandler} />
      </Toolbar>
    </AppBar>
  );
}

TodoAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TodoAppBar;
