import React, { useState } from "react";
import Feature from "./Feature";
import { news } from "./data";
import List from "./List";
import CategorySection from "./CategorySection";

export default function Main({ user }) {
  const [data, setData] = useState(news);
  const [filteredData, setFilteredData] = useState(news);



  

  function filterCategory(catename) {
    setFilteredData(data.filter((item) => item.category == catename));
  }

  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        {!user && <Feature news={news} />}
        <hr />

        <div className="row mt-5">
          <List
            data={filteredData}
            user={user}
            setFilteredData={setFilteredData}
          />
          <div className="col-sm-12 col-md-4">
            <h1 className="cate-title">Discover more of what matters to you</h1>
            <CategorySection filterCategory={filterCategory} />
          </div>
        </div>
      </div>
    </>
  );
}
