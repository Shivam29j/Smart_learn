import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink ,Link} from 'react-router-dom';
import { UserContext } from '../App';
import './css/Navbar.css';
import { NavDropdown } from 'react-bootstrap';
const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
        <li className='nav-item'>
         <NavDropdown title="Topic" id="basic-nav-dropdown ">
            <NavLink to="/card" className="dropdown-item custom-dropdown-item">
                Operating System
              </NavLink>
              <NavLink to="/card1" className="dropdown-item custom-dropdown-item">
                Data Structures
              </NavLink>
              <NavLink to="/card2" className="dropdown-item custom-dropdown-item">
                Object Oriented Programming
              </NavLink>
              <NavLink to="/card3" className="dropdown-item custom-dropdown-item">
                Database Management System
              </NavLink>
            </NavDropdown>
        </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Log Out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
        <li className='nav-item'>
         <NavDropdown title="Topic" id="basic-nav-dropdown">
            <NavLink to="/card" className="dropdown-item custom-dropdown-item">
                Operating System
              </NavLink>
              <NavLink to="/card1" className="dropdown-item custom-dropdown-item">
                Data Structures
              </NavLink>
              <NavLink to="/card2" className="dropdown-item custom-dropdown-item">
                Object Oriented Programming
              </NavLink>
              <NavLink to="/card3" className="dropdown-item custom-dropdown-item">
                Database Management System
              </NavLink>
            </NavDropdown>
        </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              SignUp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
              Sign In
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg shadow-5-strong navbar-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Smart Learner</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <RenderMenu />
              </ul>
            </div>
          </div>
      </nav>
  </>
  )
}

export default Navbar