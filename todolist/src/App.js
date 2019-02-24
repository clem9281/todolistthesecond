import React, { useState } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoAppBar from "./components/TodoAppBar";
import TodoList from "./components/TodoList";
import "./App.css";

const App = props => {
  const [ourTheme, setOurTheme] = useState("light");
  const theme = createMuiTheme({
    palette: {
      type: ourTheme
    }
  });
  const changeTheme = event => {
    console.log("clicked");
    ourTheme === "light" ? setOurTheme("dark") : setOurTheme("light");
  };
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <TodoAppBar changeHandler={changeTheme} />
        <Grid container justify="center">
          <Grid item>
            <TodoList />
          </Grid>
        </Grid>
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default App;
