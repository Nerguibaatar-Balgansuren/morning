import React from "react";

export default function Footer() {
  const date = new Date();
  return <div className="container">Copyright @ 2022-{date.getFullYear()}</div>;
}
