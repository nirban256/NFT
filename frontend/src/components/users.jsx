import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {} from "../actions/auth";
import axios from "axios";
import AsideBar from "./common/AsideBar";
import Footer from "./common/Footer";
import DataTable from "react-data-table-component";

const ManageProducts = ({ auth: { user } }) => {
  const [productsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/usersFetching");
      setProductsData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Collumns = [
    {
      name: "First Name",
      selector: (row) => row.fname,
    },
    {
      name: "Last Name",
      selector: (row) => row.lname,
    },
    {
      name: "Email Address",
      selector: (row) => row.email,
    },

    {
      name: "Unique ID",
      selector: (row) => row.uuid,
    },

    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "View",
        cell: (row) => (
          <a href={`/admin/users-details/${row._id}`} className="btn btn-success">
            <i class="fa fa-eye"></i>
          </a>
        ),
      },
      {
        name: "Edit",
          cell: (row) => (
            <a href={`/admin/users-edit/${row._id}`} className="btn btn-primary">
              <i class="fa fa-pen"></i>
            </a>
          ),
        },
    
    
        {
          name: "Delete",
          cell: (row) => <button className="btn btn-danger"  onClick={() => deleteUsers(row._id)}><i className="fas fa-user-times"/></button>,
        },
    
    
        {
          name: "Suspend",
          cell: (row) => <button className="btn btn-warning"  onClick={() => suspenduser(row._id)}> <i className="fa fa-ban"/></button>,
        },
  ];

  useEffect(() => {
    getProductsData();
  }, []);




  const deleteUsers=async(id)=>{
    await axios.delete(`http://localhost:5000/deleteusers/${id}`,{
    headers:{
  
       "Content-Type":"application/json",
    }
    })
    .then((data)=>{console.log(data,"User Updated")
     if (data.status === 200) {
       alert(`${productsData.fname} Has Been Deleted Successfully`);
       window.location.href = "/admin/users";
    }  
  });
    
  }

  function calcTime(city,offset){
		var b=new Date()
		var utc=b.getTime()+(b.getTimezoneOffset()*60000);
		var nd=new Date(utc+(3600000*offset));
		return nd.getHours();

	}

  

  var showime=(calcTime('Los Angeles','-8'));
  
  

  
 
  const suspenduser=async(id)=>{
   await axios.patch(`http://localhost:5000/suspendusers/${id}`,{
    headers:{
  
       "Content-Type":"application/json",
    }
    })
    .then((data)=>{console.log(data,"User Updated");
    if (data.status === 200) {
      alert(`User Has Been Suspended Successfully`);
      window.location.href = "/admin/suspend-users";
    }  
  })
      
 
  }




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
                <h1 className="m-0">Manage Users</h1>
              </div>
            </div>
          </div> 
        </div>
        <div className="container">
          <div className="row p-3">
          <div className="col-md-12">
                  <ul className="list-unstyled" align="center">
                    <li className="list-inline-item p-2 btn btn-primary">
                      {" "}
                      <i className="fa fa-user d-inline"></i>{" "}
                      <a className="text-dark" href="/admin/users">
                        All Users
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
              <div className="col-md-12">
                <DataTable
                  title="Products' Data"
                  columns={Collumns}
                  data={productsData}
                  pagination
                  fixedHeader
                  selectableRows
                />
              </div>
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
ManageProducts.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ManageProducts);
