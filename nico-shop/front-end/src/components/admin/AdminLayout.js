import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./adminLayouts/AdminHeader";
import SideMenu from "./adminLayouts/SideMenu"
import Dashboard from "./Dashboard";
import { CategoryContext, DataContext } from "../context/context";
import axios from "axios";


export default function AdminLayout() {

  const { setData, setFilterData } = useContext(DataContext);
  const { setCategory } = useContext(CategoryContext);

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => {
        if (res.data.status) {
          setData(res.data.result);
          setFilterData(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  };

  const getCategory = () => {
    axios
      .get("http://localhost:8080/api/category")
      .then((res) => {
        if (res.data.status) {
          setCategory(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container d-flex">
      <div className="col-md-3">
        <SideMenu />
      </div>
      <div className="col-md-9">
        <div className="row">
          <AdminHeader />
        </div>
        <div className="row">
            <Outlet />
        </div>
      </div>
    </div>
  );
}
