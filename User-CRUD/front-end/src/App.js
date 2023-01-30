import './App.css';
import { useState, useEffect } from "react";

function App() {
  const BE_URL = "http://localhost:8080/user";
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    username: "",
    age: "",
  });

  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(BE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  function handleAgeChange(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }
  function handleNameChange(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault(); // stop reloading during form submit
      const data = {
        username: e.target.username.value,
        age: e.target.age.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const FETCHED_DATA = await fetch(BE_URL, options);
      const FETCHED_JSON = await FETCHED_DATA.json();
      
    }
  
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <label>
        username: 
        <input 
        name ="username"
        value={currentUser.username}
        onChange={handleNameChange}
        placeholder='username'>
        </input>
      </label>
      <br />
        <label>
          Age:
          <input
            name="age"
            value={currentUser.age}
            onChange={handleAgeChange}
          />
        </label>
      <br></br>
      <button></button>
      
    </form>
    </div>
  );
}

export default App;
