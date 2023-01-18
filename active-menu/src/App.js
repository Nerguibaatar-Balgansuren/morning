
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";


function App() {
  console.log(window.location.pathname); 
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
