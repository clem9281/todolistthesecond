import React, { useState } from "react";

// MUI
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//MUI Colors
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";

// my components
import TodoAppBar from "./components/TodoAppBar";
import TodoList from "./components/TodoList";

const App = props => {
  // set theme
  const [ourTheme, setOurTheme] = useState("light");
  const theme = createMuiTheme({
    palette: {
      type: ourTheme
    },
    typography: {
      useNextVariants: true
    }
  });
  const changeTheme = () => {
    ourTheme === "light" ? setOurTheme("dark") : setOurTheme("light");
  };
  console.log(theme);
  // set todos
  const [todos, setTodos] = useState([
    {
      text: "A sample task item."
    }
  ]);
  const [todoText, setTodoText] = useState("");
  const changeValue = event => {
    setTodoText(event.target.value);
  };
  const submitHandler = event => {
    event.preventDefault();
    setTodos([...todos, { text: todoText }]);
    setTodoText("");
  };
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <TodoAppBar changeHandler={changeTheme} />
        <Grid container justify="center">
          <Grid item>
            <TodoList
              todos={todos}
              todoText={todoText}
              changeValue={changeValue}
              submitHandler={submitHandler}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default App;
