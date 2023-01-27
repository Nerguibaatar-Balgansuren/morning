// import bodyParser from "body-parser";
import React, { useState, useEffect } from "react";
import "./App.css";
// import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { products } from "./data";

function App() {
  const [dt, setDt] = useState(products);
  // console.log(dt);
  const [search, setSearch] = useState("");
  // let categories = Object.values(dt.category);
 
  // console.log(categories);
  // const uniqCategories = [...new Set(dt.map((categoryId))];
  let uniqCategories = [];

  dt.map(({ category})=>{
    if(!uniqCategories.includes(category)) {
      uniqCategories.push(category)
    }
  })

  console.log(uniqCategories);
  // const bodyParser = require("body-parser")
  return (
    <div className="App">
      <input type={"text"} placeholder="Search" onChange={setSearch}></input>
      <div> In stock </div>
      <div>
      {dt.map(() => {
            return (
              <h4></h4>
            );
          })}
       
       
      </div>
    </div>
  );
}

export default App;
