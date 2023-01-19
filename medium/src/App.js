import React from "react";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";
import { users } from "./components/data";
import { useState } from "react";
import Admin from "./components/admin/Admin";
import Login from "./components/admin/Login";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";
import NewsDetail from "./components/NewsDetail";
import About from "./components/About";
import Main from "./components/Main";

function App() {
  const data1 = {
    mediumLogo: "https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png",
  };
  const [data, setData] = useState([]);
  const [user, setUser] = useState();
  const [showModal, setShowModal] = useState(false);
  const [admin, setAdmin] = useState(false);

  const [bgColor, setBgColor] = useState(user ? "white" : "#ffc017");
  const objStyle = {
    backgroundColor: bgColor,
  };
  const handleScroll = (event) => {
    if (user) {
      setBgColor("white");
    } else {
      if (event.currentTarget.scrollTop >= 600) {
        setBgColor("white");
      } else {
        setBgColor("#ffc017");
      }
    }
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  const onLogin = (uname, pword) => {
    users.map((userObj) => {
      if (userObj.username == uname && userObj.password == pword) {
        setShowModal(false);
        setUser(userObj);

        return "success";
      }
    });
  };

  return (
    <div>
      {!admin ? (
        <div
          style={{ width: "100vw", overflow: "scroll", height: "100vh" }}
          onScroll={handleScroll}
        >
          <Header
            mediumLogo={data.mediumLogo}
            style={objStyle}
            onLogin={onLogin}
            user={user}
            setUser={setUser}
            showModal={showModal}
            openModal={openModal}
            setAdmin={setAdmin}
          />
          <Slider />
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {!user && <ImageSection />}
                    <Main user={user} />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/newsdetails/:id" element={<NewsDetail />} />
            </Routes>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
