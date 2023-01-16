export default function Header({ mediumLogo }) {
  return (
    <>
      <nav class="navbar navbar-expand-lg orange-bg">
        <div class="container-fluid justify-content-between d-flex">
          <a class="navbar-brand" href="#">
            <img src={mediumLogo} alt="" width={150} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Our story
              </a>
              <a class="nav-link" href="#">
                Membership
              </a>
              <a class="nav-link" href="#">
                Write
              </a>
              <a class="nav-link">Sign in</a>
              <a id="getStarted" class="nav-link">Get started</a>

              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
