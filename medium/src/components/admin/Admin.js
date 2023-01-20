import React, { useEffect, useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

export default function Admin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((response) => response.json())
      .then((dt) => {
        console.log(dt.result);
        setData(dt.result);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return "Loading";
  if (error) return "Error";


  return (
    <div>
      <div className="navbar bg-dark flex-nowrap">
        <a href="#" className="col-md-3 navbar-brand">
          Company Name
        </a>
        <input type="text" className="w-100 form-control bg-dark border-0" />
        <div className="nav text-nowrap">
          <span className="text-light"> Log Out </span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="nav bg-light flex-column">
              <div className="nav-item">
                <a className="nav-link"> Dashboard</a>
              </div>
              <div className="nav-item">
                <a className="nav-link">News</a>
              </div>
              <div className="nav-item">
                <a className="nav-link">Users</a>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row my-4">
              <div className="col-md-4">
                <div className="card p-3">
                  <div className="card-title"> Users </div>
                  <div className="flex justify-content-between align-items-center">
                    <i
                      className="bi bi-people"
                      style={{ fontSize: "40px" }}
                    ></i>

                    <h3>4500</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3">
                  <div className="card-title"> News </div>
                  <div className="flex justify-content-between align-items-center">
                    <i
                      className="bi bi-newspaper"
                      style={{ fontSize: "40px" }}
                    ></i>

                    <h3>900</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3">
                  <div className="card-title"> Category </div>
                  <div className="flex justify-content-between align-items-center">
                    <i
                      className="bi bi-people"
                      style={{ fontSize: "40px" }}
                    ></i>

                    <h3>220</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row my-4"></div>
              </div>
              <div className="row p-3">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <th>No</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Body</th>
                    </thead>
                    <tbody>
                      {data.map(
                        ({ _id, title, isTrending, category }, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{title}</td>
                              <td>{category}</td>
                              <td>
                                {isTrending ? (
                                  <span className="badge badge-success">
                                    yes
                                  </span>
                                ) : (
                                  <span className="badge badge-danger">no</span>
                                )}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
