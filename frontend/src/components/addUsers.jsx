import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import AsideBar from "./common/AsideBar";
// import { Redirect } from "react-router-dom";
import Footer from "./common/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddartCollectionss = ({ auth: { user } }) => {
  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phn: "",
    pass: "",
    role: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fname", newUser.fname);
    formData.append("lname", newUser.lname);
    formData.append("email", newUser.email);
    formData.append("phn", newUser.phn);
    formData.append("pass", newUser.pass);
    formData.append("role", newUser.role);

    const addUserRes = axios({
      method: "post",
      url: "http://localhost:5000/userAdding",
      data: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    });

    if (addUserRes === true) {
      window.location.href = "/admin/dashboard";
    }
  };
  function calcTime(city,offset){
		var b=new Date()
		var utc=b.getTime()+(b.getTimezoneOffset()*60000);
		var nd=new Date(utc+(3600000*offset));
		return nd.getHours();

	}

  

  var showime=(calcTime('Los Angeles','-8'));
  
  return (
    <div className="wrapper">
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#/"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block"></li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#/"
                role="button"
              >
                <i className="fas fa-search" />
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#/">
                <i className="fa fa-user" />
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div style={{ marginTop: "", textAlign: "center" }}>
                  <h5>Welcome, {user && user.name}</h5>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <AsideBar />
      </div>
      <div className="content-wrapper">
      <h5 className="text-dark text-center font-weight-bold">Welcome, {user && user.name} 👋</h5>
          <h5 className="text-dark text-center font-weight-bold">
          {(() => {
        if (showime>=3 && showime<12) {
          return <div> Good Morning <i className="fa fa-sun text-warning"></i></div>;
        } else if(showime>=12 && showime<18){
          return <div> Good Afternoon <i className="fa fa-sun text-warning "></i> </div>;
        } 

        else if(showime>=18 && showime<23){
          return <div> Good Evening <i className="fa fa-moon text-dark"></i></div>;
        } 

         else{
          return <div> Good Evening <i className="fa fa-moon text-dark"></i></div>;

         }
        
      })()}
          </h5>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-unstyled" align="center">
                <li className="list-inline-item p-2 btn btn-primary">
                  {" "}
                  <i className="fa fa-user d-inline"></i>{" "}
                  <a className="text-dark" href="/admin/users">
                    All Users
                  </a>
                </li>
                <li className="list-inline-item p-2 btn btn-success">
                  {" "}
                  <i className="fa fa-user-plus d-inline"></i>{" "}
                  <a className="text-dark" href="/admin/add-users">
                    Add Users
                  </a>
                </li>
                <li className="list-inline-item p-2 btn btn-warning">
                  {" "}
                  <i className="fa fa-ban d-inline"></i>{" "}
                  <a className="text-dark" href="/admin/suspend-users">
                    Suspended Users
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <Form
                className="col-md-12 form-add p-5 shadow-lg rounded my-5"
                onSubmit={handleSubmit}
              >
                <h4>Add User</h4>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    style={{
                      background: "aliceblue",
                      color: "black",
                      borderRadius: "22px",
                    }}
                    type="text"
                    name="fname"
                    value={newUser.fname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="add-users-input"
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    style={{
                      background: "aliceblue",
                      color: "black",
                      borderRadius: "22px",
                    }}
                    type="text"
                    name="lname"
                    value={newUser.lname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="add-users-input"
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    style={{
                      background: "aliceblue",
                      color: "black",
                      borderRadius: "22px",
                    }}
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="add-users-input"
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    style={{
                      background: "aliceblue",
                      color: "black",
                      borderRadius: "22px",
                    }}
                    type="number"
                    name="phn"
                    value={newUser.phn}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="add-users-input"
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    style={{
                      background: "aliceblue",
                      color: "black",
                      borderRadius: "22px",
                    }}
                    type="text"
                    name="pass"
                    value={newUser.pass}
                    onChange={handleChange}
                    placeholder="Password"
                    className="add-users-input"
                  />
                </Form.Group>

                <Form.Group className="">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    style={{
                      background: "aliceblue",
                      color: "black",
                      borderRadius: "22px",
                    }}
                    name="role"
                    value={newUser.role}
                    onChange={handleChange}
                    className="add-users-input"
                  >
                    <option value={"-----"}>-----</option>
                    <option value={"Admin"}>Admin</option>
                    <option value={"User"}>User</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className=""
                  controlId="formBasicEmail"
                  align="center"
                >
                  <Form.Group
                    className=""
                    controlId="formBasicEmail"
                    align="center"
                  >
                    <Button
                      type="submit"
                      className="btn btn-outline-info text-light w-25 form-control shadow-lg "
                    >
                      Add User
                    </Button>
                  </Form.Group>
                </Form.Group>
              </Form>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
AddartCollectionss.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AddartCollectionss);
