import React, { useState } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoAppBar from "./components/TodoAppBar";
import TodoList from "./components/TodoList";
import "./App.css";

const styles = theme => {
  console.log("app", theme);
};

const App = props => {
  return (
    <MuiThemeProvider>
      <TodoAppBar />
      <Grid container justify="center">
        <Grid item>
          <TodoList />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(App);
