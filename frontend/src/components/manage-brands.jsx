import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {} from "../actions/auth";
import axios from "axios";
import AsideBar from "./common/AsideBar";
import Footer from "./common/Footer";
import DataTable from "react-data-table-component";

const ManageBrands = ({ auth: { user } }) => {
  const [brabdsData, setbrabdsData] = useState([]);

  const getbrandsData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-Brands");
      setbrabdsData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Collumns = [
    {
      name: "Brand's Name",
      selector: (row) => row.brands_name,
    },
    {
      name: "Brand's Image",
      selector: (row) => (
        <img
          width={70}
          height={70}
          src={row.brands_image}
          alt={"Florida Fashion"}
        />
      ),
    },
    {
      name: "Brand's Title",
      selector: (row) => row.brands_title
    },
    {
      name: "Brand's Description",
      selector: (row) => row.brands_desc,
    },  
    {
      name:"Edit",
      cell:(row)=><a href={`/edit?id=${row._id}`} className="btn btn-success">Edit</a>,
            
    },
    {
      name:"Delete",
      cell:(row)=><button className="btn btn-danger">Delete</button>,
            
    },  
  ];

  useEffect(() => {
    getbrandsData();
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
                <h1 className="m-0">Manage Products</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <DataTable
                  title="Brands' Data"
                  columns={Collumns}
                  data={brabdsData}
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
ManageBrands.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ManageBrands);
