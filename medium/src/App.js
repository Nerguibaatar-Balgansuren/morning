
import './App.css';
import Header from './components/Header';

function App() {

  const data = {
    mediumLogo : "https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
  }






  return (
    <div className="App">
      <Header 
        mediumLogo = {data.mediumLogo}
      />
    </div>
  );
}

export default App;
