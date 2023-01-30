import React, { useState, useEffect } from "react";
import "./App.css";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { data } from "./data";

function App() {
  // const bodyParser = require("body-parser"); __staticRouterHydrationData.use(bodyParser.json());

  const [dt, setDt] = useState(data);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [info, setInfo] = useState(data[0]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    //   fetch({mockUrl})
    //   .then(response => response.json())
    //   .then(data => {console.log(data)})
    //   // .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let arr = dt.filter((a) => a.id == selectedCompany);

    setInfo(arr[0]);
  }, [selectedCompany]);

  const url = "https://course-api.com/react-tabs-project";
  const mockUrl = "./data.js";

  const [header, setHeader] = useState("1");

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          {dt.map((a) => {
            return (
              <h4 onClick={() => setSelectedCompany(a.id)}>{a.company}</h4>
            );
          })}
        </div>
        {info && (
          <div className="company-content">
            <h2 className="job-title">{info.title}</h2>
            <p className="company-name">{info.company}</p>
            <p className="date">{info.dates}</p>
            {info?.duties?.map((a, index) => (
              <div className="text">
                {open && selected == index ? (
                  <AiFillCaretRight
                    onClick={() => {
                      console.log(index);
                      setSelected(index);
                      setOpen(false);
                    }}
                  />
                ) : (
                  <AiFillCaretDown
                    onClick={() => {
                      console.log(index);
                      setSelected(index);
                      setOpen(true);
                    }}
                  />
                )}
                <p>
                  <h2>Sub title {index}</h2>
                  {open && selected == index && a}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default App;
