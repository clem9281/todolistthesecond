import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const styles = theme => {
  console.log("list", theme.palette);
  return {
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 3
    }
  };
};

const TodoList = ({ classes }) => {
  return (
    <Paper className={classes.root} elevation={1}>
      <List>
        <Todo value={1} />
        <TodoForm />
      </List>
    </Paper>
  );
};

export default withStyles(styles)(TodoList);
