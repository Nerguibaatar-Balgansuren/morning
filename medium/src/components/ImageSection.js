import React from "react";

export default function ImageSection() {
  return (
    <div className="bg-color margin-auto d-flex my-4">
      <div className="w-50">
        <div className="container">Hello</div>
      </div>
      <div className="w-50">
        <img
          className="img-fluid"
          src={require("../images/Frame-1.png")}
          alt=""
        />
      </div>
    </div>
  );
}
