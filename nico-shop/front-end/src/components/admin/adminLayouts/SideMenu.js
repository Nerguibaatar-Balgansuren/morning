import React from "react";

export default function SideMenu() {
  const sideMenuItems = [
    { id: 1, title: "Dashboard", link: "Dashboard" },
    { id: 2, title: "Leaderboard", link: "Leaderboard" },
    { id: 3, title: "orders", link: "orders" },
    { id: 4, title: "Add User", link: "admin/adduser" },
    { id: 5, title: "Add Product", link: "admin/addproduct" },
    { id: 6, title: "Sales Report", link: "SalesReport" },
    { id: 7, title: "Messages", link: "Messages" },
    { id: 8, title: "Settings", link: "Settings" },
    { id: 9, title: "Sign Out", link: "SignOut" },
  ];

  // imgURL = require ("/docs/5.3/assets/brand/bootstrap-logo.svg");
  return (
    <div>
      <nav class="nav nav-pills nav-fill flex-column">
      <a class="navbar-brand" href="#">
      {/* <img src={imgURL} alt="Bootstrap" width="30" height="24"/> */}
      Bootstrap
        </a>
        {sideMenuItems.map((a) => (
          <a class="nav-link" href={a.link}>
            {a.title}
          </a>
        ))}
        {/* <a class="nav-link active" aria-current="page" href="#">
          Active
        </a> */}
      </nav>
    </div>
  );
}
