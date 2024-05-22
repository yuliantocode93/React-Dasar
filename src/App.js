import "./App.css";
import FetchApi from "./pages/FetchApi";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div>
      <TodoList />
      <FetchApi />
    </div>
  );
}

export default App;
