import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./models/Todo";

const items = [new Todo("Go buy sdd"), new Todo("walk for 30 mins")];

function App() {
  return (
    <div>
      <TodoList items={items} />
    </div>
  );
}

export default App;
