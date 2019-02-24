import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const styles = theme => {
  return {
    submit: {
      display: "block",
      margin: "0 auto"
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
      <Button variant="outlined" color="primary" className={classes.submit}>
        Add Item
      </Button>
    </form>
  );
};

export default withStyles(styles)(TodoForm);
