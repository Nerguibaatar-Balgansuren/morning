import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./adminLayouts/AdminHeader";
import SideMenu from "./adminLayouts/SideMenu"
import Dashboard from "./Dashboard";


export default function AdminLayout() {
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
