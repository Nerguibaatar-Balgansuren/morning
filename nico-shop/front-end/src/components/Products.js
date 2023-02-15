// import { ProductCard } from "./productComponents/ProductCard";
import "../App.css";
import React, { useContext, useEffect } from "react";

import axios from "axios";
import { Outlet } from "react-router-dom";
import { DataContext } from "./context/context";
import { ProductCard } from "./productComponents/ProductCard"

export default function Products () {
  const { filterData } = useContext(DataContext);



  console.log(filterData);
  return (
    <div className="flex flex-d align-items justify-content">
      <div className="flex" style={{ margin: "15px" }}>
        <div
          className="flex flex-row p-2"
          style={{ backgroundColor: "#f4f4f4" }}
        >
          <input
            type="text"
            placeholder=" Search property"
            style={{ width: "800px", border: 0 }}
          />
          <button style={{ marginRight: "5px" }}>Find Now</button>
          <button>Filter</button>
        </div>
      </div>
      <div>
        {/* <div className="flex justify-between">
          <div>
            <h1>Total Product</h1>
            <span>184</span>
          </div>
          <div>
            <span>Sort By</span>
          </div>
        </div> */}
        <div className="productCard">
          {filterData?.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
