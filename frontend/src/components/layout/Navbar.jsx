import React, { Fragment, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import Logo from "../../images/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const NavbaR = ({ auth: { isAuthenticated, loading }, logout }) => {
  // Setstate For Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  

  const authLinks = (
    <ul className="nav-links list-unstyled">
      <li className="d-inline">
        <Link to="/admin/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      &nbsp; &nbsp;&nbsp;
      <li className="d-inline">
        <Link onClick={logout} to="/" replace>
          <i className="fa fa-arrow-right"></i>{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <>
      <Navbar expand="lg" className="w-100">
        <Container fluid>
          <Navbar.Brand href="#">
            <h1 align="center">
              <a href="/">
                <img src={Logo} alt="NFT" />
              </a>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <input
              type="search"
              className="search-items d-inline"
              placeholder="Search Items Here...."
            />{" "}
            &nbsp;&nbsp;
            <div className="dropdown d-inline">
              <Button
                className="m-0 text-dark"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ background: "#d8ff00", color: "black" }}
              >
                <i className="fa fa-bars"></i>
              </Button>{" "}
              &nbsp;
              <div
                class="dropdown-menu p-3 shadow-lg"
                aria-labelledby="dropdownMenuButton"
              >
                <a class="dropdown-item" href="/">
                  Home
                </a>
                <a class="dropdown-item" href="/aboutus">
                  About Us
                </a>
                <a class="dropdown-item" href="/contactus">
                  Contact Us
                </a>
                <a class="dropdown-item" href="/adminPolicy">
                  Admin Policy
                </a>
                <a class="dropdown-item" href="/privacy">
                  Privacy Policy
                </a>
                <a class="dropdown-item" href="/tnc">
                  Terms & Conditions
                </a>
                <a class="dropdown-item" href="/faqs">
                  FAQs
                </a>
              </div>
            </div>
            <Button
              href="/"
              className="m-0 text-dark d-inline"
              style={{ background: "#d8ff00", color: "black" }}
            >
              <i className="fa fa-user"></i>
            </Button>{" "}
            &nbsp;&nbsp;
            <Button
              href="/"
              className="m-0 text-dark d-inline"
              style={{ background: "#d8ff00", color: "black" }}
            >
              <i className="fa fa-wallet"></i>
            </Button>{" "}
            &nbsp;&nbsp;
            <Button
              href="/"
              className="m-0 text-dark d-inline"
              style={{ background: "#d8ff00", color: "black" }}
            >
              <i className="fa fa-shopping-cart"></i>
            </Button>{" "}
            &nbsp;&nbsp;
            <Button
              className="btn text-dark d-inline"
              onClick={handleShow}
              style={{ background: "yellow" }}
            >
              Connect To Wallet
            </Button>{" "}
            &nbsp;&nbsp;
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Kindly Conect To Your Wallet Along With Your Informatons
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

  return (
    <nav className="navbar bg-dark" style={{}}>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavbaR);
