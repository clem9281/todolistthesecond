import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const styles = theme => {
  console.log("form", theme.palette);
  return {
    submit: {
      display: "block",
      margin: "20px auto"
    }
  };
};
const TodoForm = ({ classes }) => {
  return (
    <form>
      <TextField
        id="standard-dense"
        label="New Item"
        margin="dense"
        fullWidth
      />
      <Button variant="contained" color="primary" className={classes.submit}>
        Add Item
      </Button>
    </form>
  );
};

export default withStyles(styles)(TodoForm);
