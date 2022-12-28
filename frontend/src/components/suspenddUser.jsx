import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AsideBar from "./common/AsideBar";
import DataTable from "react-data-table-component";
import axios from "axios";
import Footer from "./common/Footer";


const SuspendedUsers = ({ auth: { user } }) => {
  const [productsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-Suspended-Users");
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
      name: "Email",
      selector: (row) => row.email,
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
      name: "Activate",
      cell: (row) => <button className="btn btn-info" onClick={() => activeuser(row._id)}><i className="fa fa-check"/></button>,
    },
   
  ];


  useEffect(() => {
    getProductsData();
  }, []);




  const activeuser=async(id)=>{
   await axios.patch(`http://localhost:5000/activeusers/${id}`,{
    headers:{
  
       "Content-Type":"application/json",
    }
    })
    .then((data)=>{console.log(data,"User Updated");
    if (data.status === 200) {
      alert(`User Has Been Activated Successfully`);
      window.location.href = "/admin/users";
    } 
  })
  }

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
                    <li className="breadcrumb-item active">Suspended Users</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="row d-flex justify-content-center">
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
            <div className="container-fluid p-5">
              <div className="row">
                <div className="col-md-12">
                  <DataTable
                    title="Suspended Users' Data"
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
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};
SuspendedUsers.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(SuspendedUsers);
