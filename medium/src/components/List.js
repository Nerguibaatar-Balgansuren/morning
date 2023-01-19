import React, { useState } from "react";
import NewsCard from "./NewsCard";

export default function List({ data, user, setFilteredData }) {
  // setData(news);
  function saveBookmark(i) {
    setFilteredData(
      data.map((e) => {
        if (e.id == i) {
          return { ...e, isSaved: !e.isSaved };
        } else {
          return e;
        }
      })
    );
  }

  return (
    <div className="col-sm-12 col-md-8 py-2">
      <div className="row">
        {data.map((item, i) => (
          <>
            <div key={i} className="col-md-12 mb-5">
              <NewsCard
                item={item}
                user={user}
                list={true}
                saveBookmark={saveBookmark}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
