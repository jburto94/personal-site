const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href='#projects'>Projects</a>
            <a className="nav-link" href='#experience'>Experience</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;