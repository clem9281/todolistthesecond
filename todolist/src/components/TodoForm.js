import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const styles = theme => {
  return {
    submit: {
      display: "block",
      margin: "20px auto"
    },
    light: {
      background: theme.palette.primary.dark
    },
    dark: {
      background: theme.palette.primary.light
    }
  };
};
const TodoForm = ({ classes, todoText, changeValue, submitHandler }) => {
  console.log(1, classes);
  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="standard-dense"
        label="New Item"
        margin="dense"
        value={todoText}
        onChange={changeValue}
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Add Item
      </Button>
    </form>
  );
};

export default withStyles(styles)(TodoForm);
