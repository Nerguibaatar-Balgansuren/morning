import logo from './logo.svg';
import './App.css';
import React, { Context, useContext, useState, useEffect } from 'react';
import ContextService from './Utilities/ContextService';
import Header from './Layouts/Header';

function App() {
  const [theme, setTheme] = useState("");
  const [newsData, setNewsData] = useState("");
  return (
    <ContextService
    
    theme={theme}
    newsData={newsData}
    setTheme={setTheme}
    setNewsData={setNewsData}
    >
    <div className="App">
      <Header />
      
    </div>
    
    </ContextService>
  );
}

export default App;
