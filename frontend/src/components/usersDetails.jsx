import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AsideBar from "./common/AsideBar";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from './common/Footer'

const UserManagement = ({ auth: { user } }) => {
  const [productsData, setProductsData] = useState([]);

  // console.log(productsData);

  const { id } = useParams();
  //    console.log(id);

  const getUserData = async () => {
    try {
      const resp = await axios.get(`http://localhost:5000/getuser/${id}`);
      setProductsData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

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
                  <h1 className="m-0">User Management</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#/">User Management</a>
                    </li>
                    <li className="breadcrumb-item active">User Profile</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
          
            <div className="container-fluid p-5">
              <div className="row">
                <div className="col-md-12" align="center">
                  <Card style={{ width: "50rem" ,borderRadius:"21px"}}>
                    <Card.Body align="center" style={{padding: "54px"}}>
                      <Card.Title>
                        <i className="fa fa-user"/>  Name:&nbsp;{" "}
                        <b>
                          {productsData.fname}&nbsp;{productsData.lname}
                        </b>{" "}
                      </Card.Title>{" "}
                      <br /><br/>
                      
                      <Card.Title>
                        <i className="fa fa-envelope"/> Email:&nbsp; <b>{productsData.email}</b>{" "}
                      </Card.Title>{" "}
                      <br /><br/>
                     
                    
                      <Card.Title>
                        <i className="fa fa-clock"/> Active Status:&nbsp; <b>{productsData.status}</b>{" "}
                      </Card.Title>{" "}
                      <br /><br/>
                      <Card.Title>
                        <i className="fa fa-calendar"/> User Since:&nbsp;{" "}
                        <b>{Date("productsData.createdAt")}</b>{" "}
                      </Card.Title>{" "}
                      <br /> <br />
                      <a
                        href={`/admin/users-edit/${productsData._id}`}
                        className="btn btn-primary"
                      >
                        <i class="fa fa-pen"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <Footer/>
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
