import React from "react";
import {Link} from 'react-router-dom';
const Nav = () =>{

    return(
      <>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"><Link to="/"  className="edit">Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" ><Link to="/contact"  className="edit"> Contact</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"><Link to="/about"  className="edit"> About</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"><Link to="/all"  className="edit"> All</Link></a>
        </li>

    </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
      </>
  )};
export default Nav;