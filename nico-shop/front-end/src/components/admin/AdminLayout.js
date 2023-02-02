import React, { useState, useEffect } from "react";
import AdminHeader from "./adminLayouts/AdminHeader";
import SideMenu from "./adminLayouts/sideMenu";
import Dashboard from "./Dashboard";


export default function AdminLayout() {
  return (
    <div className="container">
      <div className="col-md-3">
        <SideMenu />
      </div>
      <div className="col-md-9">
        <div className="row">
          <AdminHeader />
        </div>
        <div className="row">
            <Dashboard />
        </div>
      </div>
    </div>
  );
}
