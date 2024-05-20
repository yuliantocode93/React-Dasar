import "./App.css";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState("");
  const [todoList, setTodoList] = useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(event) {
    event.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: generateId(),
        activity: activity,
      },
    ]);
    setActivity("");
  }

  function deleteTodoHandler(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
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
          <li key={todo.id}>
            {todo.activity} <button onClick={() => deleteTodoHandler(todo.id)}>Hapus</button>
          </li>
        ))}
      </ul>
      <br></br>
      <p>Copyright 2021. All rights reserved.</p>
      <p>Powered by ReactJS</p>
      <br></br>
      <br></br>
      <h1>Data Fetching</h1>
    </div>
  );
}

export default App;
