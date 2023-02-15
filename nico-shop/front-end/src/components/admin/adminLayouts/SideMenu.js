import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const sideMenuItems = [
    { id: 1, title: "Dashboard", link: "dashboard" },
    { id: 2, title: "Products", link: "products" },
    { id: 3, title: "Orders", link: "orders" },
    { id: 4, title: "Add User", link: "adduser" },
    { id: 5, title: "Add Product", link: "addproduct" },
    { id: 6, title: "Sales Report", link: "salesReport" },
    { id: 7, title: "Messages", link: "messages" },
    { id: 8, title: "Settings", link: "settings" },
    { id: 9, title: "Sign Out", link: "signOut" },
  ];

  // imgURL = require ("/docs/5.3/assets/brand/bootstrap-logo.svg");
  return (
    <div>
      <nav class="nav nav-pills nav-fill flex-column">
      <a class="navbar-brand" href="#">
      {/* <img src={imgURL} alt="Bootstrap" width="30" height="24"/> */}
      Bootstrap
        </a>
        {/* {sideMenuItems.map((a) => (
          <a class="nav-link" href={a.link}>
            {a.title}
          </a>
        ))} */}

        {sideMenuItems.map((a) => (
          <Link class="nav-link" to={a.link}>
            {a.title}
          </Link>
        ))}

        {/* <a class="nav-link active" aria-current="page" href="#">
          Active
        </a> */}
      </nav>
    </div>
  );
}
