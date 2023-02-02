import React, { useState, useEffect }from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";


export default function MainLayout() {



  
    const [user, setUser] = useState();
    const [showModal, setShowModal] = useState(false);
    const data1 = {
      Logo:
        "https://cdn.vectorstock.com/i/1000x1000/92/64/shop-market-store-simple-colorful-logo-icon-design-vector-35019264.webp",
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
      <div>
        <Header
          Logo={data1.Logo}
        //   style={objStyle}
          onLogin={onLogin}
          user={user}
          setUser={setUser}
          showModal={showModal}
          openModal={openModal}
          // setAdmin={setAdmin}
        />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
