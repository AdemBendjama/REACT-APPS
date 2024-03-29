import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { TodoContextProvider } from "./context/todo-context";

// const items = [new Todo("Go buy sdd"), new Todo("walk for 30 mins")];

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
