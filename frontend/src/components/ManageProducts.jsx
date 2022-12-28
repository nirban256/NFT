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
      const resp = await axios.get("http://localhost:5000/Fetch-Products");
      setProductsData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Collumns = [
    {
      name: "Title",
      selector: (row) => row.collection_title,
    },
    {
      name: "Name",
      selector: (row) => row.artCollectionss_name,
    },
    {
      name: "Description",
      selector: (row) => row.artCollectionss_short_desc,
    },
    {
      name: "Category",
      selector: (row) => row.artCollectionss_category,
    },
    {
      name: "Thumbnail",
      selector: (row) => (
        <img
          width={70}
          height={70}
          src={require(`../uploads/${row.collectionsImg}`).default}
          alt={"Florida Fashion"}
        />
      ),
    },
    {
      name: "Price",
      selector: (row) => row.artCollectionss_price,
    },

    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Selling Type",
      selector: (row) => row.selling_type,
    },
    {
      name: "Bid Amount(In USD)",
      selector: (row) => row.bid_amount_in_usd,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "View",
        cell: (row) => (
          <a href={`/admin/product-details/${row._id}`} className="btn btn-success">
            <i class="fa fa-eye"></i>
          </a>
        ),
      },
      {
        name: "Edit",
          cell: (row) => (
            <a href={`/admin/product-edit/${row._id}`} className="btn btn-primary">
              <i class="fa fa-pen"></i>
            </a>
          ),
        },
    
    
        {
          name: "Delete",
          cell: (row) => <button className="btn btn-danger"  onClick={() => deleteUsers(row._id)}><i className="fas fa-times"/></button>,
        },
  ];

  useEffect(() => {
    getProductsData();
  }, []);



  const deleteUsers=async(id)=>{
    await axios.delete(`http://localhost:5000/deletearts/${id}`,{
    headers:{
  
       "Content-Type":"application/json",
    }
    }).then((data) => {console.log(data,"Arts Collection Has Been Deleted Successfully");
  
    if(data.status === 200){
      alert("Arts Collection Has Been Deleted Successfully");
      window.location.href="/admin/atrsCollections"
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
        <div className="container">
          <div className="row">
            <div className="col-md-11 m-3" align="right">
              <a
                className="btn btn-outline-info"
                href="/admin/add-collections"
              >
                <i className="fa fa-plus"></i> Add Collections
              </a>
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
