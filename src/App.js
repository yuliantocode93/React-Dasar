import "./App.css";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState({});
  const [message, setMessage] = useState("");

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      alert("Tugas harus diisi!");
      setMessage("Tugas harus diisi!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    setMessage("");

    if (edit.id) {
      const updatedTodoList = todoList.map((todo) => {
        if (todo.id === edit.id) {
          return {
            ...todo,
            activity: activity,
          };
        } else {
          return todo;
        }
      });
      setTodoList(updatedTodoList);
      setEdit({});
      setActivity("");
      return;
    }

    setTodoList([
      ...todoList,
      {
        id: generateId(),
        activity: activity,
        isDone: false,
      },
    ]);
    setActivity("");
  }

  function deleteTodoHandler(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

  function editTodoHandler(id) {
    const todo = todoList.find((todo) => todo.id === id);
    setEdit(todo);
    setActivity(todo.activity);
  }

  function cancelEditHandler() {
    setEdit({});
    setActivity("");
  }

  function doneTodoHandler(id) {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
    console.log(todoList);
  }

  return (
    <div className="App">
      <h1>Simple Todo List</h1>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <form onSubmit={saveTodoHandler}>
        <input type="text" placeholder="Tugas Baru" value={activity} onChange={(e) => setActivity(e.target.value)} />
        <button type="submit">{edit.id ? "Update" : "Tambah"}</button>
        {edit.id && (
          <button type="button" onClick={cancelEditHandler}>
            Cancel edit
          </button>
        )}
      </form>

      <br />
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todo) => (
            <ul key={todo.id}>
              <input type="checkbox" checked={todo.isDone} onChange={() => doneTodoHandler(todo.id)} />
              {todo.activity}({todo.isDone ? "Selesai" : "Belum Selesai"}) <button onClick={() => editTodoHandler(todo.id)}>Edit</button>
              <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
              <br />
            </ul>
          ))}
        </ul>
      ) : (
        <p>Tidak ada tugas</p>
      )}
      <br />
      <p>Copyright 2025. All rights reserved.</p>
      <p>Powered by YuliantoCode93</p>
      <br />
      <br />
    </div>
  );
}

export default App;
