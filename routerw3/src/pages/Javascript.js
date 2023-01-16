import React from "react";
import { Outlet } from "react-router-dom";

export default function Javascript() {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="list-group">
          <div className="list-group-item">
            <a href="/contact/person">JS Home</a>
          </div>
          <div className="list-group-item">
            <a href="/contact/enterprise">JS Introduction</a>
          </div>
          <div className="list-group-item">
            <a href="/contact/person">JS Where To</a>
          </div>
          <div className="list-group-item">
            <a href="/contact/person">JS Output</a>
          </div>
          <div className="list-group-item">
            <a href="/contact/person">JS Statements</a>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <h2>Contact Page</h2>
        <Outlet />
      </div>
    </div>
  );
}
