import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Crs1 from "../../images/crs-1.jpg";
import Crs4 from "../../images/crs-4.jpg";
import Crs5 from "../../images/crs-5.jpg";
import anim1 from "../../images/anim-5.webp";
import anim2 from "../../images/anim-8.webp";
import anim3 from "../../images/anim-4.webp";
import MetaMask from "../../images/meta_mask.png";
import Bitski from "../../images/bitix.png";
import Formatick from "../../images/formattick.png";
import WalletConnect from "../../images/wallet_connect.png";
import CoinbaseWallet from "../../images/coinbase.png";
import Arkane from "../../images/arkane.png";
import Eth from "../../images/Eth.png";
import Solana from "../../images/Solana.png";
import Author1 from "../../images/author-1.jpg";
import Author2 from "../../images/author-10.jpg";
import Author3 from "../../images/author-11.jpg";
import Author4 from "../../images/author-12.jpg";
import Author5 from "../../images/author-2.jpg";
import Author6 from "../../images/author-3.jpg";
import Author7 from "../../images/author-4.jpg";
import Author8 from "../../images/author-9.jpg";
import Author9 from "../../images/author-5.jpg";
import Author10 from "../../images/author-6.jpg";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Static1 from "../../images/static-1.jpg";
import Static2 from "../../images/static-2.jpg";
import Static3 from "../../images/static-3.jpg";
import Static4 from "../../images/static-4.jpg";
import Static5 from "../../images/static-5.jpg";
import Static6 from "../../images/static-6.jpg";
import Coll1 from "../../images/coll-1.jpg";
import Coll2 from "../../images/coll-2.jpg";
import Coll3 from "../../images/coll-3.jpg";
import Coll4 from "../../images/coll-4.jpg";
import Coll5 from "../../images/coll-5.jpg";
import Coll6 from "../../images/coll-6.jpg";
import "../../css/landing.css";
import Footer from "../common/Footer";
import Carousel2 from "react-elastic-carousel";
import Item from "./item";
import galaxy_Video from "../../images/live_galaxy.mp4";
import axios from "axios";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];
const breakPoints2 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 4 },
];

const Landing = ({ isAuthenticated }) => {


  // Categories Fetching
  const [categoryData, setcategoryData] = useState([]);

  const getcategoryData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-Categories");
      setcategoryData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcategoryData();
  }, []);


   // Products Fetching
  const [ProductsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-Products");
      setProductsData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);
   


  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }
  return (
    <>
      <div className="navNsec m-0">
        
        <div className="first-para p-5">
          <Container className="my-3 container-fluid">
            <Row>
              <Col>
                <p style={{ color: "#d8ff00" }} className="font-weight-bold">
                  <b>EXCHANGE MY NFT</b>
                </p>
                <h1 className="text-light">
                  Create, sell and collect <br /> digital items.
                </h1>
                <p
                  style={{ color: "#5BA4B6" }}
                  className="my-5 font-weight-bold"
                >
                  <b style={{ color: "rgb(16 192 235)" }}>
                    Unit of data stored on a digital ledger, called a
                    blockchain, that certifies a digital asset to be unique and
                    therefore not interchangeable
                  </b>
                </p>
                <div className="btn-div">
                  <button className="w-25 exp" style={{ fontSize: "25px" }}>
                    Explore
                  </button>{" "}
                  <br />
                </div>
              </Col>
              <Col>
                <Carousel2 breakPoints={breakPoints}>
                  <Item className="slider-sec">
                    <img
                      className="d-block w-100"
                      src={Crs1}
                      alt="First slide"
                      style={{ borderRadius: "16px" }}
                    />
                  </Item>
                  <Item className="slider-sec">
                    <img
                      className="d-block w-100"
                      src={Crs4}
                      alt="Second slide"
                      style={{ borderRadius: "16px" }}
                    />
                  </Item>
                  <Item className="slider-sec">
                    <img
                      className="d-block w-100"
                      src={Crs5}
                      alt="Third slide"
                      style={{ borderRadius: "16px" }}
                    />
                  </Item>
                  <Item className="slider-sec">
                    <img
                      className="d-block w-100"
                      src={anim1}
                      alt="Third slide"
                      style={{ height: "435px", borderRadius: "16px" }}
                    />
                  </Item>
                  <Item className="slider-sec">
                    <img
                      className="d-block w-100"
                      src={anim2}
                      alt="Third slide"
                      style={{ height: "435px", borderRadius: "16px" }}
                    />
                  </Item>
                </Carousel2>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="my-5 second-para">
          <h2
            align="center"
            className="text-light d-flex justify-content-center"
          >
            Browse By Category{" "}
          </h2>
          <br /> <br />
          <Row>
            {categoryData &&
              categoryData.map((categorydata) => (
                <Col className="catg" align="center">
                  <a href="/" className="art text-decoration-none">
                    <i
                      className="fa fa-image"
                      style={{ color: "#d8ff00", fontSize: "40px" }}
                    ></i>
                    <p className="text-light">{categorydata.category_name}</p>
                  </a>
                </Col>
              ))}
          </Row>
          <Row></Row>
        </Container>
        <Container className="wallets">
          <Row>
            <h2
              align="center"
              className="text-light d-flex justify-content-center"
            >
              We Support The Following Wallets
            </h2>
            <br />
            {/* <div className="small-border bg-color-2" style={{backgroundSize: 'cover',color:"8364E2"}} /> */}

            <Col align="center">
              <div className="wlts">
                <a href="/" className="art text-decoration-none">
                  <img src={MetaMask} alt={"Meta Mask"} />
                  <p className="text-light">MetaMask</p>
                </a>
              </div>
            </Col>
            <Col align="center">
              <div className="wlts">
                <a href="/" className="art text-decoration-none">
                  <img src={Bitski} alt={"Bitski"} />
                  <p className="text-light">Bitski</p>
                </a>
              </div>
            </Col>
            <Col align="center">
              <div className="wlts">
                <a href="/" className="art text-decoration-none">
                  <img src={Formatick} alt={"Formatick"} />
                  <p className="text-light">Formatick</p>
                </a>
              </div>
            </Col>
            <Col align="center">
              <div className="wlts">
                <a href="/" className="art text-decoration-none">
                  <img src={WalletConnect} alt={"WalletConnect"} />
                  <p className="text-light">WalletConnect</p>
                </a>
              </div>
            </Col>
            <Col align="center">
              <div className="wlts">
                <a href="/" className="art text-decoration-none">
                  <img src={CoinbaseWallet} alt={"CoinbaseWallet"} />
                  <p className="text-light">CoinbaseWallet</p>
                </a>
              </div>
            </Col>
            <Col align="center">
              <div className="wlts">
                <a href="/" className="art text-decoration-none">
                  <img src={Arkane} alt="Arkane" />
                  <p className="text-light">Arkane</p>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <h2
              align="center"
              className="text-light my-5 d-flex justify-content-center"
            >
              Supported Crypto Currency
            </h2>
            <br />
            {/* <div className="small-border bg-color-2" style={{backgroundSize: 'cover'}} /> */}

            <Col align="center">
              <div className="wlts ">
                <a href="/" className="art text-decoration-none">
                  <img src={Eth} alt={"Ethirium"} />
                  <p className="text-light">Ethirium</p>
                </a>
              </div>
            </Col>
            <Col align="center">
              <div className="wlts ">
                <a href="/" className="art text-decoration-none">
                  <img src={Solana} alt={"Solana"} />
                  <p className="text-light">Solana</p>
                </a>
              </div>
            </Col>
            <Col align="center">
              <div className="wlts ">
                <a href="/" className="art text-decoration-none">
                  {/* <img src={NoImg}  alt={"Gas Fee $14"} /> */}
                  <p className="text-light">Gas Fee $14</p>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="new-itms">
          <h2 align="" className="text-light my-5">
            New Items
          </h2>
          <div className="App">
            <Carousel2 breakPoints={breakPoints}>
            {ProductsData &&
              ProductsData.map((productsdata) => (
                <Item>
                <Col className=" author-sec" style={{ marginTop: "10px" }}>
                <div className="parent-author" style={{ cursor: "pointer" }}>
                  <a href="/" className="author">
                    <img src={Author1} className="ath1" alt="NFT" />
                  </a>
                </div>
                <div align="center" className="card-item p-3 card-item-img">
                  <a href="/">
                    <img
                      className="rounded"
                      src={require(`../../uploads/${productsdata.collectionsImg}`).default}
                      height={"230px"}
                      alt="NFT"
                    />
                  </a>
                  <p className="text-light d-flex my-2">{productsdata.collection_title}</p>
                  <div className="d-flex bid">
                    <p className="d-inline" style={{ color: "#8affff" }}>
                     {productsdata.artCollectionss_price}ETH{" "}
                    </p>
                    <span className="text-light">1/20</span>
                  </div>
                  <div className="d-flex bid">
                    <p className="d-inline" style={{ color: "#8affff" }}>
                    <a href="/" style={{ color: "#8affff" }}>Place a Bid</a>
                    </p>
                    <span className="text-light">
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                </div>
              </Col>
              </Item>
              ))}

       
              

              
            </Carousel2>
          </div>
        </Container>
        <Container className="new-itms">
          <h2 align="" className="text-light my-5">
            Hot Collections
          </h2>
          <div className="App">
          <Carousel2 breakPoints={breakPoints}>
            {ProductsData &&
              ProductsData.map((productsdata) => (
                <Item>
                <Col className=" author-sec" style={{ marginTop: "10px" }}>
                <div className="parent-author" style={{ cursor: "pointer" }}>
                  <a href="/" className="author">
                    <img src={Author1} className="ath1" alt="NFT" />
                  </a>
                </div>
                <div align="center" className="card-item p-3 card-item-img">
                  <a href="/">
                    <img
                      className="rounded"
                      src={require(`../../uploads/${productsdata.collectionsImg}`).default}
                      height={"230px"}
                      alt="NFT"
                    />
                  </a>
                  <p className="text-light d-flex my-2">{productsdata.collection_title}</p>
                  <div className="d-flex bid">
                    <p className="d-inline" style={{ color: "#8affff" }}>
                     {productsdata.artCollectionss_price}ETH{" "}
                    </p>
                    <span className="text-light">1/20</span>
                  </div>
                  <div className="d-flex bid">
                    <p className="d-inline" style={{ color: "#8affff" }}>
                      <a href="/" style={{ color: "#8affff" }}>Place a Bid</a>
                    </p>
                    <span className="text-light">
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                </div>
              </Col>
              </Item>
              ))}
            </Carousel2>
          </div>
        </Container>
        <Container>
          <Row>
            <h2 className="text-light">Top Sellers</h2>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>

            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-md-3">
              <p className="m-0" style={{ color: "#77F6F0" }}>
                1.
              </p>
              <div className="sellers d-flex">
                <img
                  src={Author1}
                  className="ath m-0"
                  style={{ marginLeft: "68px" }}
                  alt="NFT"
                />
                <div className="mx-2">
                  <p className="m-0" style={{ color: "#FFF" }}>
                    Monica Lucas
                  </p>
                  <p className="m-0" style={{ color: "#77F6F0" }}>
                    3.2 ETH
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="my-5">
          <h2 className="text-light">Create and Sell Now</h2>
          <div className="row" style={{ backgroundSize: "cover" }}>
            <div
              className="btn cns col-lg-4 col-md-6 mb-sm-30"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="feature-box f-boxed style-3"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="icon-cns fa fa-wallet wow fadeInUp bg-color-2 i-boxed icon_wallet animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                />
                <div className="text" style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInUp",
                      color: "whitesmoke",
                    }}
                  >
                    Setup your wallet
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.25s",
                      animationName: "fadeInUp",

                      color: "#8AFFFF",
                    }}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="btn cns col-lg-4 col-md-6 mb-sm-30"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="feature-box f-boxed style-3"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="icon-cns fa fa-upload wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                />
                <div className="text" style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInUp",
                      color: "whitesmoke",
                    }}
                  >
                    Add your NFT's
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.25s",
                      animationName: "fadeInUp",
                      color: "#8AFFFF",
                    }}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="btn cns col-lg-4 col-md-6 mb-sm-30"
              style={{ backgroundSize: "cover" }}
            >
              <div
                className="feature-box f-boxed style-3"
                style={{ backgroundSize: "cover" }}
              >
                <i
                  className="icon-cns fa fa-sellsy wow fadeInUp bg-color-2 i-boxed icon_tags_alt animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                />
                <div className="text" style={{ backgroundSize: "cover" }}>
                  <h4
                    className="wow fadeInUp animated"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInUp",
                      color: "whitesmoke",
                    }}
                  >
                    Sell your NFT's
                  </h4>
                  <p
                    className="wow fadeInUp animated"
                    data-wow-delay=".25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.25s",
                      animationName: "fadeInUp",
                      color: "#8AFFFF",
                    }}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        ,
        <Footer />
      </div>
    </>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
