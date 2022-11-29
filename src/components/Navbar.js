import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const user = useSelector((store) => store.userReducer.user)
	console.log(user)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        padding: "10px 80px 10px 50px",
      }}
    >
      <Navbar.Brand as={NavLink} to="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="app-logo"
        />
        Crypto Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About Us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
        <Nav>
          {Object.keys(user).length ? (
            <>
              <Nav.Link as={NavLink} to="/sign-up">
                Hi, {user.fullName}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sign-in">
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/sign-up">
                Sign Up
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sign-in">
                Sign In
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
