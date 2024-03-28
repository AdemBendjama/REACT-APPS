import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

interface Props {
  items: Todo[];
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <TodoItem key={item.id} text={item.text} />;
      })}
    </ul>
  );
};

export default TodoList;
