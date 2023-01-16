import ReactDom from "react-dom/client";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enterprise from "./pages/java/JSIntroduction";
import HTML from "./pages/HTML";
import Javascript from "./pages/Javascript";
import CSS from "./pages/CSS";
import JSHome from "./pages/java/JSHome";
import JSIntroduction from "./pages/java/JSIntroduction";

function App() {
  return (
    <div>
      <header>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/html">
              HTML
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/css">
              CSS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/javascript">
              JAVASCRIPT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/sql">
              SQL
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/python">
              PYTHON
            </a>
          </li>
        </ul>
      </header>
      <div>
        <Routes>
          <Route exact path="/" element={<HTML />} />
          <Route path="/javascript/*" element={<Javascript />}>
            <Route path="jshome" element={<JSHome />} />
            <Route path="jsintroduction" element={<JSIntroduction />} />
          </Route>
          <Route path="/css" element={<CSS />} />
        </Routes>
      </div>
      <footer>2023</footer>
    </div>
  );
}

export default App;
