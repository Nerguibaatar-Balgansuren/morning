// import { ProductCard } from "./productComponents/ProductCard";
import "../App.css";
import React, { useContext, useEffect } from "react";

import axios from "axios";
import { Outlet } from "react-router-dom";
import { DataContext } from "./context/context";
import { ProductCard } from "./productComponents/ProductCard";

export default function Products() {
  const { filterData } = useContext(DataContext);

  console.log(filterData);
  return (
    <div className="container justify-content-around">
      <div className="d-flex gap-3 p-2 justify-content-around mb-3 flex-wrap">
        
          {filterData?.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        
      </div>

      <Outlet />
    </div>
  );
}
