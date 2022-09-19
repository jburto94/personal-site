const Nav = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md">
      <div className="container-fluid">
        <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-white" href="#">About</a>
            <a className="nav-link text-white" href="#">Skills</a>
            <a className="nav-link text-white">Projects</a>
            <a className="nav-link text-white">Experience</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;