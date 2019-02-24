import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => {
  console.log("todo", theme.palette);
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

const Todo = ({ value, classes }) => {
  return (
    <ListItem
      key={value}
      role={undefined}
      className={classes.listItem}
      dense
      button
    >
      <Checkbox />
      <ListItemText
        className={classes.listItemText}
        primary={`Line item ${value}`}
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
