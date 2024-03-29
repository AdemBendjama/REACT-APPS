import React from "react";
import classes from "./TodoItem.module.css";

type Props = {
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
};

const TodoItem = (props: Props) => {
  return (
    <li
      className={classes.item}
      onClick={props.onRemoveTodo.bind(null, props.id)}
    >
      {props.text}
    </li>
  );
};

export default TodoItem;
