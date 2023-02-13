
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/admin/Dashboard";
import MainLayout from "./components/layouts/MainLayout";
import Main from "./components/Main";
import Products from "./components/Products";
import Users from "./components/admin/adminComps/Users";
import AdminLayout from "./components/admin/AdminLayout";
import AddProduct from "./components/admin/adminComps/AddProduct";

function App() {

  
  return (
    <div className="App">
    
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/newsdetails/:id" element={<NewsDetail />} /> */}
            {/* <Route path="/products" element={Products}></Route> */}
          </Route>
          
          <Route element={<AdminLayout />}>
            <Route path="/admin/*" element={<Dashboard />} >
              <Route path="/users" element={<Users />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/products" element={<Products />} />
            </Route>
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
