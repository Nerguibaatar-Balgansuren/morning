import "./components/Header"
import './App.css';
import Header from "./components/Header";



function App() {
  const menuItems = ["PORTFOLIO","BLOG", "CV", "STORE", "FREELANCE", "ABOUT ME", "CONTACT"]
  var logoU = {img: require("../src/hireMe.png")}
 
  return (
    <div className="container">
      <Header 
        logoU={logoU}
        menuItems={menuItems}
      />
    </div>
  );
}

export default App;
