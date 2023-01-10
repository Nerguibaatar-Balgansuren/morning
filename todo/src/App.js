import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // const [isDone, setIsDone] = useState(false);

  const [doneTasks, setDoneTasks] = useState(0);

  const addTask = () => {
    const newObj = {
      id: tasks.length,
      title: task,
      isDone: false,
    };

    const newArr = [...tasks];
    newArr.push(newObj);

    setTasks(newArr);

    setTask("");

    console.log(newArr);
  };

  const editTask = () => {

  };

  const deleteTask = (id) => {
    console.log("delete");
    const newArr = [...tasks]
    const objList = newArr.map((e) => {
      if (e.id == id) {
        console.log("found");
        console.log(tasks.indexOf(e));
        // newArr.splice(newArr.indexOf(e), 1);
      };
    });
    setTasks(newArr);

  };

  const onDoneTask = (id) => {
    const objList = tasks.map((val) => {
      if (val.id === id) {
        val.isDone = !val.isDone;

        setDoneTasks(doneTasks);
      }
      return val;
    });

    setTasks(objList);
    showDoneTasks();
  };

  function showDoneTasks() {
    const arr = tasks.filter((e) => e.isDone == true);

    setDoneTasks(arr.length);
  }

  return (
    <div className="container main">
      <div className="row mt-4">
        <div className="col-md-4">
          <h1>Todo list</h1>
          <div className="col-md-4">
            Total {tasks.length} Done {doneTasks}
          </div>

          <div className="d-flex gap-3">
            <input
              className="form-control"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="task oruulna uu?"
              
            />

            <button className="btn btn-primary" onClick={addTask}>
              +Add
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          {tasks.map((e) => (
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <input
                  type="checkbox"
                  checked={e.isDone}
                  onChange={() => onDoneTask(e.id)}
                />
                <h4>{e.title}</h4>
              </div>
              <div>
                <button className="btn btn-warning" onClick={editTask}>
                  Edit</button>

                <button className="btn btn-danger" onClick={() => deleteTask(e.id)}>
                  Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
