import "./App.css";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodoHandler(event) {
    event.preventDefault();
    setTodoList([...todoList, activity]);
    setActivity("");
  }

  return (
    <div className="App">
      <h1>Simple Todo List</h1>
      <form onSubmit={addTodoHandler}>
        <input type="text" placeholder="Tugas Baru" value={activity} onChange={(e) => setActivity(e.target.value)} />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
