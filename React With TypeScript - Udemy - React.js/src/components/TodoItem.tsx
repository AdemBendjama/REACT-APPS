import React from "react";
import classes from "./TodoItem.module.css";

interface Props {
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
}

const TodoItem: React.FC<Props> = (props) => {
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
