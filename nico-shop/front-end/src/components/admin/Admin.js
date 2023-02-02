import React, { useState, useEffect } from "react";
// import { BarChart } from "./BarChart";
// import { PieChart } from "./PieChart";

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
        <a className="col-md3 navbar-brand text-light" href="#">
          Company Name
        </a>
        <input type={"text"} className="w-100 form-control bg-dark border-0" />
        {/* <input type="text" className="w-100 form-control bg-dark text-light" /> */}
        <div className="nav">
          <div className="nav-item">
            <span className="text-light">Log out</span>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="nav bg-light flex-column">
              <div className="nav-item">
                <a className="nav-link">Dashboard </a>
              </div>
              <div className="nav-item">
                <a className="nav-link">News</a>
              </div>
              <div className="nav-item">
                <a className="nav-link">User</a>
              </div>
              <div className="nav-item">
                <a className="nav-link">Members</a>
              </div>
              <div className="nav-item">
                <a className="nav-link">Sign up</a>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row my-4">
              <div className="col-md-4">
                <div className="card p-3">
                  <div className="card-title">Users</div>
                  <div className="d-flex justify-content-between align-items-center">
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
                  <div className="card-title">News</div>
                  <div className="d-flex justify-content-between align-items-center">
                    <i
                      className="bi bi-newspaper"
                      style={{ fontSize: "40px" }}
                    ></i>
                    <h3>9000</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card p-3">
                  <div className="card-title">Category</div>
                  <div className="d-flex justify-content-between align-items-center">
                    <i
                      className="bi bi-list-nested"
                      style={{ fontSize: "40px" }}
                    ></i>
                    <h3>4500</h3>
                  </div>
                </div>
              </div>
              {/* <BarChart /> */}
              {/* <PieChart /> */}
              <div className="row">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <th># </th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Is Trending?</th>
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
                                  <span className="badge bg-success">yes</span>
                                ) : (
                                  <span className="badge bg-danger">no</span>
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
