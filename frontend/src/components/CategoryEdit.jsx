import React, { useState,useEffect} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AsideBar from "./common/AsideBar";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

const UserManagement = ({ auth: { user } }) => {
  //Inserting Form Data
  


  const [newUser, setNewUser] = useState({
    category_name: "",
    category_title: "",
    category_desc: "",
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };



  const { id } = useParams();

  const getUserData = async () => {
    try {
      const resp = await axios.get(`http://localhost:5000/getcategory/${id}`);
      setNewUser(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  },[]);


  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category_name", newUser.category_name);
    formData.append("category_title", newUser.category_title);
    formData.append("category_desc",   newUser.category_desc);

 await axios({
      method: "patch",
      url: `http://localhost:5000/updateCategories/${id}`,
      data: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" },
    })
    .then((data)=>{console.log(data,"Category Updated")
    if (data.status === 200) {
      alert(`Category Has Been Updated Successfully`);
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
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block"></li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#/">
                <i className="fa fa-user" />
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div style={{ marginTop: "", textAlign: "center" }}>
                  <h5 className="d-flex justify-content-center">
                    Welcome, {user && user.name}
                  </h5>
                </div>
                {/* <Link className="d-flex justify-content-center" onClick={logout} to="/" replace>
									<i className="fas fa-sign-out-alt"></i>{" "}
									<span className="hide-sm"> &nbsp;Logout</span>
								</Link>
								<a href="/" >Logout</a> */}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <AsideBar />
      </div>
      <div>
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
                  <h1 className="m-0">Category Update</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#/">Category Management</a>
                    </li>
                    <li className="breadcrumb-item active">Category Update</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <section className="content">
            
          </section>
          <div className="container">
            <div className="row">
              <div className="col-md-12 p-5">
                <Form
                  className="mt-3 shadow-lg bg-light p-5 rounded"
                  onSubmit={handleSubmit}
                >
                  <h4>Add User</h4>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control
                      style={{
                        background: "aliceblue",
                        color: "black",
                        borderRadius: "22px",
                      }}
                      type="text"
                      name="category_name"
                      value={newUser.category_name}
                      onChange={handleChange}
                      placeholder="Category Name"
                      className="add-Category-input"
                    />
                  </Form.Group>

                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Category Title</Form.Label>
                    <Form.Control
                      style={{
                        background: "aliceblue",
                        color: "black",
                        borderRadius: "22px",
                      }}
                      type="text"
                      name="category_title"
                      value={newUser.category_title}
                      onChange={handleChange}
                      placeholder="Category Title"
                      className="add-Category-input"
                    />
                  </Form.Group>

                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Category Descriptions</Form.Label>
                    <Form.Control
                      style={{
                        background: "aliceblue",
                        color: "black",
                        borderRadius: "22px",
                      }}
                      type="text"
                      name="category_desc"
                      value={newUser.category_desc}
                      onChange={handleChange}
                      placeholder="Category Descriptions"
                      className="add-Category-input"
                    />
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
                        className="btn btn-outline-info text-light w-25 form-control shadow-lg text-light"
                      >
                        Update
                      </Button>
                    </Form.Group>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer />
      </div>
    </div>
  );
};
UserManagement.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UserManagement);
