import logo from "./logo.svg";
import ReactDom from "react-dom/client";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Person from "./pages/Person";
import Enterprise from "./pages/Enterprise";

function App() {
  return (
    <div>
      <header>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </header>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact/*" element={<Contact />}>
            <Route path="person" element={<Person />} />
            <Route path="enterprise" element={<Enterprise />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <footer>2023</footer>
    </div>
  );
}

export default App;
