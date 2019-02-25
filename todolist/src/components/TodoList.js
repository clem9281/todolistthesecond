import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const styles = theme => {
  return {
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 3
    }
  };
};

const TodoList = ({ classes, todos, todoText, changeValue, submitHandler }) => {
  return (
    <Paper className={classes.root} elevation={1}>
      <List>
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
        <TodoForm
          todoText={todoText}
          changeValue={changeValue}
          submitHandler={submitHandler}
        />
      </List>
    </Paper>
  );
};

export default withStyles(styles)(TodoList);
