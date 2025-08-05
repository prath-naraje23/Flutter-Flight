import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './component/Header.jsx'
import './App.css';
import Front from './component/user/Front';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./component/user/Login.js";
import Register from "./component/user/Register";
import HomePage from "./component/user/Page";
import LearningForm from "./license/LearningForm.js";
import PermanentForm from "./license/PermanentForm.js";
import Mocktest from "./component/user/MockTest.js";
import Status from "./component/user/Status.js";
import Ladmin from "./component/Admin/Ladmin.js";
import Padmin from "./component/Admin/Padmin.js";
import Ledit from "./component/Admin/Ledit.js";
import Pedit from "./component/Admin/Pedit.js";
import Rating from './component/common/Rating'
import Lcard from "./component/user/Lcard.js";
import AddImage from "./component/user/AddImage.js";
import Pcard from "./component/user/Pcard.js";
import ForgotPassword from "./component/user/ForgotPassword.js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div>
     <Router>
     <Switch>
       <Route path='/' exact component={Front} />
       <Route path='/user/login' exact component={Login} />
       <Route path='/user/register' exact component={Register} />
       <Route path='/user/home' exact component={HomePage} />
       {/* <Route path="/license/learning" exact component={LearningForm} /> */}
       <Route path="/license/learning-form" component={LearningForm} />

       <Route path="/license/permanent" exact component={PermanentForm} />
       <Route path="/user/mocktest" exact component={Mocktest} />
       <Route path="/user/status" exact component={Status} />
       <Route path="/ladmin" exact component={Ladmin} />
       <Route path="/padmin" exact component={Padmin} />
       <Route path="/ledit" exact component={Ledit} />
       <Route path="/pedit" exact component={Pedit} />
       <Route path="/user/logout" exact component={Rating} />
       <Route path="/user/lcard" exact component={Lcard} />
       <Route path="/user/pcard" exact component={Pcard} />
       <Route path="/user/addimage" exact component={AddImage} />
       <Route path='/user/forgot' exact component={ForgotPassword} />

       

     </Switch>
   </Router>
   <ToastContainer />
   </div>
  );
}

export default App;
