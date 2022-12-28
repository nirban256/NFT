import React, { useEffect, useState, createContext } from "react";
import ReactSwitch from "react-switch";
import GoToTop from "./components/layout/GoToTop";
// import "./App.css";
import "./css/custom.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Landing from "./components/layout/Landing.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import PrivateRoute from "./routing/PrivateRoute.jsx";
import PrivateRoute2 from "./routing/PrivateRoute2.jsx";
import ManageProducts from "./components/ManageProducts.jsx";
import PrivateRoutingManageProducts from "./routing/PrivateRoutingManageProducts.jsx";
import AddCategory from "./components/AddCategory.jsx";
import PrivateRoutingAddCategory from "./routing/PrivateRoutingAddCategory.jsx";
import ManageCategory from "./components/ManageCategory.jsx";
import PrivateRoutingManageCategories from "./routing/PrivateRoutingManageCategories.jsx";
import AboutUs from "./components/AboutUs.jsx";
import PrivateRoutingAboutUs from "./routing/PrivateRoutingAboutUs.jsx";
import Dashboard from "./components/Dashboard.jsx";
import contactus from "./components/contactus.jsx";
import PrivateRoutingContactUs from "./routing/PrivateRoutingContactUs.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import PrivateRoutingPrivacyPolicy from "./routing/PrivateRoutingPrivacyPolicy.jsx";
import PivateRoutingAdminPolicy from "./routing/PivateRoutingAdminPolicy.jsx";
import Adminpolicy from "./components/AdminPolicy.jsx";
import PrivateRoutingFaq from "./routing/PrivateRoutingFaqs.jsx";
import Faqs from "./components/Faq.jsx";
import TnC from "./components/TnC.jsx";
import PrivateRoutingTnC from "./components/TnC.jsx";
import AddProducts from "./components/AddProducts.jsx";
import aboutUsLayout from "./components/layout/aboutUs.jsx";
import adminPolicyLayout from "./components/layout/adminPolicy.jsx";
import privacyPolicyLayout from "./components/layout/privacyPolicy.jsx";
import contactUsLayout from "./components/layout/contactUs.jsx";
import FAQsLayout from "./components/layout/FAQs.jsx";
import tncLayout from "./components/layout/tnc.jsx";
import newsManagement from "./components/newsManagement";
import PrivateRoutingNewsManagement from "./routing/PrivateRoutingNewsManagement";
import addNews from "./components/addNews";
import PrivateRoutingAddNews from "./routing/PrivateRoutingAddNews";
import nfts from "./components/nfts";
import PrivateRoutingNfts from "./routing/PrivateRoutingNfts.jsx";
import emails from "./components/emails";
import PrivateRoutingEmails from "./routing/PrivateRoutingEmails.jsx";
import slider from "./components/slider";
import PrivateRoutingSlider from "./routing/PrivateRoutingSliders";
import content from "./components/content";
import PrivateRoutingContents from "./routing/PrivateRoutingContents";
import users from "./components/users";
import PrivateRoutingUsers from "./routing/PrivateRoutingUsers.jsx";
import addUsers from "./components/addUsers";
import PrivateRoutingAddUsers from "./routing/PrivateRoutingAddUsers.jsx";
import usersDetails from "./components/usersDetails";
import PrivateRoutingUserDetails from "./routing/PrivateRoutingUserDetails";
import EditUsers from "./components/EditUsers";
import PrivateRoutingEditUsers from "./routing/PrivateRoutingEditUsers";
import Earnings from "./components/Earnings";
import PrivateRoutingEarnings from "./routing/PrivateRoutingEanings";
import AllTransactions from "./components/AllTransactions";
import PrivateRoutingTransactions from "./routing/PrivateRoutingTransactions";
import CategoryEdit from "./components/CategoryEdit";
import PrivateRoutingCategoryEdit from "./routing/PrivateRoutingCategoryEdit";
import productDetails from "./components/productDetails";
import PrivateRoutingProductDetails from "./routing/PrivateRoutingProductDetails";
import productEdit from "./components/productEdit";
import PrivateRoutingProductEdit from "./routing/PrivateRoutingProductEdit";
import suspendUsers from "./components/suspenddUser";
import PrivateRoutingSuspendUsers from "./routing/PrivateRoutingSuspendUsers.jsx";
import emailPending from "./components/email-pending";
import PrivateRoutingEmailPendings from "./routing/PrivateRoutingEmailPendings";
import generalSettings from "./components/generalSettings";
import PrivateRoutingGeneralSettimgs from "./routing/PrivateRoutingGeneralSettimgs";

//Auth//
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";
import NotFound from "./components/NotFound.jsx";
import UserRegister from "./components/UserRegister";
import userLogin from "./components/userLogin";
import UserDashboard from "./components/UserDashboard";
// import userDashboard from "./components/UserDashboard";
// import PrivateRoutingUserDashboard from "./routing/PrivateRoutingUserDashboard";


export const ThemeContext = createContext("light");

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

const IsLoggedIn=window.localStorage.getItem("userLoggedIn");
if(IsLoggedIn==="true"){

  return <UserDashboard />

}

else{
  <userLogin/>
}
   
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <PrivateRoute
                exact
                path="/admin/dashboard"
                component={Dashboard}
              />
              
              <PrivateRoute2
                exact
                path="/admin/add-collections"
                component={AddProducts}
              />
              <PrivateRoutingManageProducts
                exact
                path="/admin/atrsCollections"
                component={ManageProducts}
              />
              <PrivateRoutingAddCategory
                exact
                path="/admin/add-category"
                component={AddCategory}
              />
              <PrivateRoutingManageCategories
                exact
                path="/admin/category-list"
                component={ManageCategory}
              />
              <PrivateRoutingAboutUs
                exact
                path="/admin/aboutus"
                component={AboutUs}
              />
              <PrivateRoutingContactUs
                exact
                path="/admin/contactus"
                component={contactus}
              />
              <PrivateRoutingPrivacyPolicy
                exact
                path="/admin/privaypolicy"
                component={PrivacyPolicy}
              />
              <PivateRoutingAdminPolicy
                exact
                path="/admin/admin-policy"
                component={Adminpolicy}
              />
              <PrivateRoutingFaq exact path="/admin/faqs" component={Faqs} />
              <PrivateRoutingTnC exact path="/admin/tnc" component={TnC} />
              <PrivateRoutingNewsManagement
                exact
                path="/admin/news-list"
                component={newsManagement}
              />
              <PrivateRoutingAddNews
                exact
                path="/admin/add-news"
                component={addNews}
              />
              <PrivateRoutingNfts exact path="/admin/nfts" component={nfts} />
              <PrivateRoutingEmails
                exact
                path="/admin/emails"
                component={emails}
              />
              <PrivateRoutingSlider
                exact
                path="/admin/sliders"
                component={slider}
              />
              <PrivateRoutingContents
                exact
                path="/admin/contents"
                component={content}
              />
              <PrivateRoutingUsers
                exact
                path="/admin/users"
                component={users}
              />
              <PrivateRoutingAddUsers
                exact
                path="/admin/add-users"
                component={addUsers}
              />
              <PrivateRoutingUserDetails
                exact
                path="/admin/users-details/:id"
                component={usersDetails}
              />
              <PrivateRoutingEditUsers
                exact
                path="/admin/users-edit/:id"
                component={EditUsers}
              />
              <PrivateRoutingEarnings
                exact
                path="/admin/earnings"
                component={Earnings}
              />
              <PrivateRoutingTransactions
                exact
                path="/admin/transactions"
                component={AllTransactions}
              />
              <PrivateRoutingCategoryEdit
                exact
                path="/admin/category-edit/:id"
                component={CategoryEdit}
              />
              <PrivateRoutingProductDetails
                exact
                path="/admin/product-details/:id"
                component={productDetails}
              />
              <PrivateRoutingProductEdit
                exact
                path="/admin/product-edit/:id"
                component={productEdit}
              />
              <PrivateRoutingSuspendUsers
                exact
                path="/admin/suspend-users"
                component={suspendUsers}
              />
              <PrivateRoutingEmailPendings
                exact
                path="/admin/email-pending"
                component={emailPending}
              />

              <PrivateRoutingGeneralSettimgs
                exact
                path="/admin/general-settings"
                component={generalSettings}
              />

              <Route exact path="/admin/register" component={Register} />
              <Route exact path="/admin/login" component={Login} />
              <Route exact path="/user/register" component={UserRegister} />
              <Route exact path="/user/login" component={userLogin}/>
              <Route exact path="/user/dashboard" component={UserDashboard} />
              <Route exact path="/aboutus" component={aboutUsLayout} />
              <Route exact path="/adminPolicy" component={adminPolicyLayout} />
              <Route exact path="/privacy" component={privacyPolicyLayout} />
              <Route exact path="/contactus" component={contactUsLayout} />
              <Route exact path="/faqs" component={FAQsLayout} />
              <Route exact path="/tnc" component={tncLayout} />
              <Route exact path="" component={NotFound} />
            </Switch>
          </Router>
          <GoToTop />
          <div className="toogle-theme">
            {/* <h4 className="text-info font-weight-bold d-flex justify-content-center"></h4> */}
            <div className="m-2 d-flex justify-content-center">
              <label className="text-theme font-weight-bold">
                {theme === "light" ? (
                  <i class="fa fa-sun-o"></i>
                ) : (
                  <i class="fa fa-moon-o"></i>
                )}
              </label>{" "}
              &nbsp;&nbsp;
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
