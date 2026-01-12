import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/Logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
export default function NavbarMenu() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      sticky="top"
      variant="dark"
      style={{ backgroundColor: "#1F70C0" }}
      className="m-0 p-0"
    >
      <div className="container-fluid">
        {/* LOGO → ALWAYS LEFT */}
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img src={Logo} alt="Logo" className="Logo" />
        </Navbar.Brand>

        {/* HAMBURGER → ALWAYS RIGHT */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* COLLAPSIBLE CONTENT */}
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="w-100 d-flex flex-column flex-lg-row align-items-center">
            {/* CENTER MENU */}
            <Nav className="mx-auto flex-column flex-lg-row gap-3 gap-lg-4 text-center">
              <Nav.Link as={NavLink} to="/" className="Navbarmenutext">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="Navbarmenutext">
                About
              </Nav.Link>
              <Nav.Link
                href="#artists"
                className="Navbarmenutext"
                onClick={() => navigate("/artists")}
              >
                Artists
              </Nav.Link>
            </Nav>
            <div
              className="position-relative me-3 text-white"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/cart")}
            >
              <FontAwesomeIcon icon={faCartShopping} size="lg" />

              {cartItems.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* SIGN IN */}
            <div className="mt-3 mt-lg-0">
              <Button variant="light">Sign in</Button>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
