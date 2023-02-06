import React from 'react'
import LoginModal from "../LoginModal"

export default function Header({ 
  mediumLogo,
  style,
  onLogin,
  user,
  setUser,
  showModal,
  openModal,
  setAdmin,}) 
  
  {

  const navItems = [
    { id: 1, title: "About", link: "about" },
    { id: 2, title: "Prime", link: "membership" },
    { id: 3, title: "Write", link: "write" },
    { id: 5, title: "Get started", link: "#" },
    { id: 4, title: "Sign In", link: "#" },
  ];


  return (
    <>
      <nav id="header" className="navbar navbar-expand-lg orange-bg">
        <div className="container-fluid justify-content-between d-flex">
          <a className="navbar-brand" href="#">
            <img src={mediumLogo} alt="" width={150} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            {navItems.map((a, index) => (
              <>
                <li className="list-item" key={index}>
                <a className="nav-link" aria-current="page" href="#">
                {a.id == 4 ? (
                    user ? (
                      user.firstName
                    ) : (
                      <span className="btn btn-primary" onClick={openModal}>
                        {a.title}
                      </span>
                    )
                  ) : (
                    <a className="nav-link" href={a.link}>
                      {a.title}
                    </a>
                  )}
              </a>
                  
                </li>
              </>
            ))}

            </div>
          </div>
        </div>
        <LoginModal
        showModal={showModal}
        onLogin={onLogin}
        setShowModal={openModal}
        setAdmin={setAdmin}
      />
      </nav>
    </>
  );
}
