import React, { useState, useEffect }from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";


export default function MainLayout() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    const [showModal, setShowModal] = useState(false);
    const [admin, setAdmin] = useState(false);
    const data1 = {
      Logo:
        "https://cdn.vectorstock.com/i/1000x1000/92/64/shop-market-store-simple-colorful-logo-icon-design-vector-35019264.webp",
    };

    useEffect(() => {
        setLoading(true);
        fetch("http://localhost:8080/api/users")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setUsers(dt.result);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);
    if (loading) return "Loading";
    if (error) return "Error";

    const openModal = () => {
        setShowModal(!showModal);
      };

  const onLogin = (uname, pword) => {
    users.map((userObj) => {
      if (userObj.username == uname && userObj.password == pword) {
        setShowModal(false);
        setUser(userObj);
         if (userObj.isAdmin = true) {
            setAdmin(true);
            console.log("Admin logged in");
         }
        console.log(`successfuly logged in `);
        return "success";
        
      }
      else {
        console.log(`user not found`);
        return "user not found"
      }
    });
  };

  

  return (
    <div>
      <div>
        <Header
          Logo={data1.Logo}
        
          onLogin={onLogin}
          user={user}
          setUser={setUser}
          showModal={showModal}
          openModal={openModal}
        
        />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
