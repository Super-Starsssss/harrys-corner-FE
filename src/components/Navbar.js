import React from 'react'
import {
  Link
} from "react-router-dom";

export const Navbar = () => {

  const styleNavbar = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    paddingTop: 20
  }
  let username = localStorage.getItem('username')
  const logout = () =>{
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="container-fuild">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg navbar-dark" style={styleNavbar}>
            <a className="navbar-brand mb-0 h1 font-weight-bold"  href="/" >Harry's Corner</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto" >
                <li className="nav-item active">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search something you need " aria-label="Search" style={{ background: 'transparent', color: "white", borderRadius: `21px` }} />
                </li>
                <li className="nav-item ml-2">
                  <a className="nav-link" href="/">Interests</a>
                </li>

                <li className="nav-item ml-2">
                  <button type="submit" className="btn btn-warning">Activate Course</button>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                {username &&
                <div class="btn-group">
                  <button type="button" className="btn btn-outline-warning border-0 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {username} </button>
                  <div class="dropdown-menu">
                    <a className="dropdown-item" href="/">Setting</a>
                    <a className="dropdown-item" href="/" onClick={logout}>Logout</a>                
                  </div>
                </div>}
                {!username &&
                  <div>
                    <Link to="/login" >
                      <button className="btn btn-outline-warning my-2 my-sm-0 mr-sm-2 border-0" style={{ borderRadius: `21px` }} type="submit">Login</button>
                    </Link>
                    <Link to="/register">
                      <button className="btn btn-warning my-2 my-sm-0" type="submit" style={{ borderRadius: `21px` }} >Sign Up</button>
                    </Link>
                  </div>}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}



export default Navbar
