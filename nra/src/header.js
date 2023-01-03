import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';


menuList = [
    menuItem1,
    menuItem2,
    menuItem3,
    menuItem4,
    menuItem5,
    menuItem6,
    menuItem7,
  ];

  menuItem1 = "portfolio";
  menuItem2 = "blog";
  menuItem3 = "cv";
  menuItem4 = "store";
  menuItem5 = "freelance";
  menuItem6 = "about me";
  menuItem7 = "contact";

  brandName = "Happy zeppelins";

  logo = require("./imgs/hireMe.png");


function Header() {
 return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

 );
}

export default Header;
