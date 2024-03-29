import { createContext, ReactNode, useState } from "react";
import Todo from "../models/Todo";

export interface TodosContextObj {
  items: Todo[];
  onAddTodo: (text: string) => void;
  onRemoveTodo: (id: string) => void;
}

const todoContext = createContext<TodosContextObj>({
  items: [],
  onAddTodo: () => {},
  onRemoveTodo: () => {},
});

export const TodoContextProvider: React.FC<{ children?: ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [...prevTodos, new Todo(text)];
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo.id !== id);
      return newTodos;
    });
  };

  return (
    <todoContext.Provider
      value={{
        items: todos,
        onAddTodo: addTodoHandler,
        onRemoveTodo: removeTodoHandler,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default todoContext;
