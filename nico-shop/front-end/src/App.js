
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/admin/Dashboard";
import MainLayout from "./components/layouts/MainLayout";
import Main from "./components/Main";

function App() {

  
  return (
    <div className="App">
    
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/newsdetails/:id" element={<NewsDetail />} /> */}
          </Route>
        </Routes>

        {/* <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route element={<Admin />}>
            <Route index path="/admin" element={<Dashboard />} />
            {/* <Route path="/users" element={<Users />} /> */}
            {/* <Route path="/adduser" element={<AddUser />} /> */}
          {/* </Route>
        </Routes> */}
      
    </div>
  );
}

export default App;
