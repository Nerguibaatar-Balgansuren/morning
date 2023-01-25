import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import axios from "axios";



function App() {

  
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [result, setResult] = useState("")


  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  const sum = () => {
    let str = `http://localhost:8000/add?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const subtract = () => {
    let str = `http://localhost:8000/subtract?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const multiply = () => {
    let str = `http://localhost:8000/multiply?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  const divide = () => {
    let str = `http://localhost:8000/divide?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <input type={"text"} value={a} onChange={(e) => setA(e.target.value)} />
      <input type={"text"} value={b} onChange={(e) => setB(e.target.value)} />
      <button onClick={sum}>Add</button>
      <button onClick={subtract}>Sub</button>
      <button onClick={multiply}>Mul</button>
      <button onClick={divide}>Div</button>
      <span> Result: {result}</span>
      <br />
    </div>
  );
}

export default App;
