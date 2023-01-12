import React, { useState } from "react";
import "./App.css";
import LightSwitch from "./components/Light";
import Modal from "./components/Modal";
import Signup from "./components/Signup";
import Toolbar from "./components/Toolbar";
import Login from "./components/Login";


function App() {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);
  const [ID, setId] = useState("0");
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const init = {
      id: "",
      task: "",
      isDone: false,
      isImportant: false,
      type: 0,
  };

  const [taskObj, setTaskObj] = useState(init);

  // const [isDone, setIsDone] = useState(false);

  const [doneTasks, setDoneTasks] = useState(0);

  const addTask = () => {
    const newObj = init;

    const newArr = [...tasks];

    // if (ID !== "0") {
    //   newArr.map((e) => {
    //     if (e.id === ID) {
    //       e.title = task;
    //     }
    //     return e;
    //   });
    // } else {
      newArr.push({ ...taskObj, id: createId() });
    // }

    setTasks(newArr);

    setTask("");
    setId("0");
    setModal(false);

    console.log(newArr);
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

  const handleModal = () => {
    setModal(!modal);
  };

  const handleEdit = (id, title, isDone) => {
    if (!isDone) {
      setTask(title);
      setId(id);
      setModal(true);
    }
  };

  function createId() {
    let abc = "ABCDEFJHJKLMNO";

    let num = "1234567890";

    console.log(Math.random(1 * 10));

    let newStr =
      abc.split("")[Math.floor(Math.random() * 10 + 1)] +
      abc.split("")[Math.floor(Math.random() * 10 + 1)] +
      abc.split("")[Math.floor(Math.random() * 10 + 1)];

    let newNumber =
      num.split("")[Math.floor(Math.random() * 10)] +
      "" +
      num.split("")[Math.floor(Math.random() * 10)] +
      "" +
      num.split("")[Math.floor(Math.random() * 10)];

    console.log(newStr + newNumber);

    return newStr + newNumber;
  }

  const handleDelete = (id) => {
    const newArr = tasks.filter((e) => e.id !== id);
    setTasks(newArr);

    console.log(newArr);
    showDoneTasks(newArr => newArr);
    
  };

  function showDoneTasks() {
    console.log(tasks);
    const arr = tasks.filter((e) => e.isDone == true);

    setDoneTasks(arr.length);
  }

  const onLogin = (userName, passWord) => {
    if(userName == "Bold" && passWord == "123123") {
      setisLoggedIn(true);
    } else {
      alert("username or password is incorrect");
    }
    
  }

  return (
    <div className="container main">

      {/* {!isLoggedIn ?} */}

      <div className="row mt-4">
         {/* <Toolbar /> */}

        {/*
        <Signup /> 
         <LightSwitch />
         */}
        <div className="col-md-4">
          <h1>Todo list</h1>
          <div className="col-md-4">
            Total {tasks.length} Done {doneTasks}
          </div>

          <div className="d-flex gap-3">
            <button className="btn btn-primary" onClick={handleModal}>
              Modal
            </button>


            <input
              className="form-control"
              type="text"
              value={taskObj.task}
              onChange={(e) => {setTaskObj({ ...taskObj, task: e.target.value});
              }}
              placeholder="task oruulna uu?"
              
            />
            <input type="hidden" value={ID} />
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
              <div className="d-flex">
                <input
                  type="checkbox"
                  checked={e.isDone}
                  onChange={() => onDoneTask(e.id)}
                />
                <h4>{e.title}</h4>
              </div>
              <div>
                <button className="btn btn-warning" onClick={() => handleEdit(e.id, e.title, e.isDone)}>
                  Edit</button>

                <button className="btn btn-danger" onClick={() => handleDelete(e.id)}>
                  Delete</button>
              </div>
            </div>
          ))}
        </div>
        {/* {modal && (
          <Modal
            modal={modal}
            setModal={handleModal}
            task={task}
            id={ID}
            setTask={setTask}
            addTask={addTask}
            // setTasks={setTasks}
          />
        )} */}
      </div>
    </div>
  );
}

export default App;
