import React from "react";

export default function CategorySection({ filterCategory }) {
  const catNews = ["Technology", "Data Science", "Productivity", "Politics"];
  const descriptions = [
    "Help",
    "Status",
    "Blog",
    "Politics",
    "Writers",
    "About",
    "Terms",
    "Careers",
    "Privacy",
  ];
  return (
    <div className="my-4">
      <div className="d-flex flex-wrap">
        {catNews.map((c, i) => {
          return (
            <div
              key={i}
              className="categoryCard m-1"
              onClick={() => filterCategory(c)}
            >
              <h3 className="categoryText">{c}</h3>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {descriptions.map((c, i) => {
          return (
            <div key={i} className="mr-5">
              <h3 className="categoryText">{c}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
