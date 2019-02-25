import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => {
  return {
    listItem: {
      paddingLeft: 0,
      width: "100%"
    },
    listItemText: {
      paddingLeft: 0,
      paddingRight: 28
    }
  };
};

const Todo = ({ classes, todo }) => {
  return (
    <ListItem key={todo} role={undefined} className={classes.listItem} button>
      <Checkbox />
      <ListItemText
        className={classes.listItemText}
        primary={todo.text}
        primaryTypographyProps={{ fontSize: "2rem" }}
        secondary="some more text"
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Comments">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default withStyles(styles)(Todo);
