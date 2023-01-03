
import './App.css';

function App() {
  const menus = ["Home","Contact"]

  return (
    <div className="App">

      <ul>
        {menus.map(e=>{
          return (
            <li><a href=''>{e}</a></li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
