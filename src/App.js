import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");

  // // FORMAT 1
  // useEffect(() => {
  //   console.log('first call use effect.')
  // })

  // // FORMAT 2
  // useEffect(() => {
  //   console.log("first call use effect.");
  // }, []);

  // FORMAT 3
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id) {
    var result = tasks.filter((item) => item.id !== id);
    setTask(result);
  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("Please input task.");
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTask(updateTask);
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTask([...tasks, newTask]);
    }
    setTitle("");
    setEditId(null);
  }

  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
  }

  return (
    <div className="container">
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <AddForm
              title={title}
              setTitle={setTitle}
              saveTask={saveTask}
              editId={editId}
            />
            <section>
              <ol className="list-group list-group-numbered">
                {tasks.map((data) => (
                  <Item
                    key={data.id}
                    data={data}
                    deleteTask={deleteTask}
                    editTask={editTask}
                  />
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
