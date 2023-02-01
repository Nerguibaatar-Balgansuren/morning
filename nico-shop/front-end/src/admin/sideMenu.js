import React from "react";

export default function sideMenu() {
  const sideMenuItems = [
    { id: 1, title: "Dashboard", link: "Dashboard" },
    { id: 2, title: "Leaderboard", link: "Leaderboard" },
    { id: 3, title: "orders", link: "orders" },
    { id: 4, title: "Sales Report", link: "SalesReport" },
    { id: 5, title: "Messages", link: "Messages" },
    { id: 6, title: "Settings", link: "Settings" },
    { id: 7, title: "Sign Out", link: "SignOut" },
  ];

  imgURL = "/docs/5.3/assets/brand/bootstrap-logo.svg";
  return (
    <div>
      <nav class="nav nav-pills nav-fill flex-column">
      <a class="navbar-brand" href="#">
      <img src={imgURL} alt="Bootstrap" width="30" height="24"/>
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
