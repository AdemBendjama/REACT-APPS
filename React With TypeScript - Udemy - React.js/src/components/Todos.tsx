import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import todoContext from "../context/todo-context";

// interface Props {
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
// }

const TodoList = () => {
  const context = useContext(todoContext);
  const { items, onRemoveTodo } = context;

  return (
    <ul className={classes.todos}>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
