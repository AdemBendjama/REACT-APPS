import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import todoContext from "../context/todo-context";

// interface Props {
//   onAddTodo: (text: string) => void;
// }

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const context = useContext(todoContext);
  const { onAddTodo } = context;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = textInputRef.current!.value;

    if (todoText.trim().length === 0) return;

    onAddTodo(todoText);

    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo">New Todo</label>
      <input type="text" name="todo" id="todo" ref={textInputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
