import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import icon from "../img/user.png";
import {  } from "../actions/auth";
import axios from "axios";
import AsideBar from "./common/AsideBar";
import Footer from "./common/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddCategory = ({ auth: { user } }, isAuthenticated) => {


  const [category_name, setcategory_name] = useState("");
  const [category_title, setcategory_title] = useState("");
  const [category_desc, setcategory_desc] = useState("");
  

  const [file, setFile] = useState("");

  // const history = useHistory();

  const setcategoryname = (e) => {
    const { value } = e.target;
    setcategory_name(value);
    
  };


  const setcategorytitle = (e) => {
    const { value } = e.target;
    setcategory_title(value);
  };

  const setcategorydesc = (e) => {
    const { value } = e.target;
    setcategory_desc(value);
  };


  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("category_name", category_name);
    formData.append("category_image", file);
    formData.append("category_title", category_title);
    formData.append("category_desc", category_desc);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

     await axios.post(
      "http://localhost:5000/Add-Categories",
      formData,
      config
          ).then((data)=>{console.log(data,"Category Added")
          if (data.status === 200) {
            alert(`Category Has Been Added Successfully`);
            window.location.href = "/admin/category-list";
         }  
        })
          
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
              <div className="col-sm-6">
                <h1 className="m-0">Add Category</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
            
            <Form className="col-md-12 form-add p-5 shadow-lg rounded my-5">
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="category_name"
                    onChange={setcategoryname}
                    placeholder="Category Name"
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Category Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="category_image"
                    onChange={setimgfile}
                    placeholder="Category Image"
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Category Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="category_title"
                    onChange={setcategorytitle}
                    placeholder="Category Title"
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label>Category Descriptions</Form.Label>
                  <Form.Control
                    type="text"
                    name="category_desc"
                    onChange={setcategorydesc}
                    placeholder="Category Description"
                  />
                </Form.Group>   

                <Form.Group
                  className=""
                  controlId="formBasicEmail"
                  align="center"
                >
                  <Button variant="primary" type="submit" onClick={addUserData}>
                    Submit
                  </Button>
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
AddCategory.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AddCategory);
