import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import Admin from "./components/admin/Admin2";
import Dashboard from "./components/admin/Dashboard";
import MainLayout from "./components/layouts/MainLayout";
import Main from "./components/Main";
import Products from "./components/Products";
import Users from "./components/admin/adminComps/Users";
import AdminLayout from "./components/admin/AdminLayout";
import AddProduct from "./components/admin/adminComps/AddProduct";
import { DataContext, CategoryContext } from "./components/context/context";

function App() {
  const [data, setData] = useState();
  const [categoryData, setCategory] = useState();
  const [filterData, setFilterData] = useState();

  return (
    <div className="App">
      <DataContext.Provider
        value={{ data, setData, filterData, setFilterData }}
      >
        <CategoryContext.Provider value={{ categoryData, setCategory }}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Main />} />
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/newsdetails/:id" element={<NewsDetail />} /> */}
              {/* <Route path="/products" element={Products}></Route> */}
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
          <Routes>
            {/* <Route element={<AdminLayout />}>
          <Route path="/admin/*" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Route> */}
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route path="" index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        </CategoryContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
