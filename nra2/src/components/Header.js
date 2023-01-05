
export default function Header({menuItems, logoU}) {

    console.log(logoU);
   

  return (
<div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">happy zeppelins
        <img src={logoU.img} alt="logo" width={150} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      {menuItems.map((menuItems) => {
            return (
              <li>
                <a class="nav-link" href="">{menuItems}</a>
                </li>
            );
          })}
        
      </ul>
    </div>
  </div>
</nav>
      
        
    
      </div>
  );
}
