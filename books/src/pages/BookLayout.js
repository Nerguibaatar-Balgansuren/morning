import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  return (
  <div>
    <h2>BookLayout</h2>
    <>
    <nav>
    <ul>
        <li>
            <Link to="/books/1">Book 1</Link>
        </li>
        <li>
            <Link to="/books/2">Book 2</Link>
        </li>
        <li>
            <Link to="/books/new">New Book</Link>
        </li>
    </ul>
    </nav>
    <Outlet />
    </>
    </div>
  );
}
