import React from "react";
import NewsCard from "./NewsCard";

export default function Feature({ news }) {
  return (
    <div className="my-5">
      <div className="d-flex">
        <img src={require("../images/Frame-2.png")} alt="txt" />
        <h4 className="FeatureTitle">Trending on medium</h4>
      </div>
      <div className="row g-5 flex-wrap">
        {news.map((item, i) => (
          <>
            <div key={i} className="col-md-4 mb-5">
              <div className="d-flex">
                <div>
                  <h4 className="trend-number">0{i + 1}</h4>
                </div>
                <NewsCard item={item} />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
