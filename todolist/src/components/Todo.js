import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = theme => {
  return {
    root: {
      paddingLeft: 0,
      width: "100%"
    },
    primary: {
      paddingLeft: 0,
      paddingRight: 28
    },
    crossedOut: {
      textDecoration: "line-through !important"
    }
  };
};

const Todo = ({ classes, todo }) => {
  const [isChecked, setIsChecked] = useState(false);
  function handleClickListItem() {
    setIsChecked(!isChecked);
  }
  return (
    <ListItem
      key={todo}
      role={undefined}
      className={classes.root}
      button
      onClick={handleClickListItem}
    >
      <Checkbox checked={isChecked} />
      <ListItemText
        className={classes.primary}
        primary={todo.text}
        secondary="some more text"
        primaryTypographyProps={
          isChecked ? { className: classes.crossedOut } : null
        }
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
