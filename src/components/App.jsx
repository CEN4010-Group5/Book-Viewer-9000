import '../styling/App.css';
import React, {useState, useEffect} from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import MyAccount from './MyAccount';
import MyAccountPayment from './MyAccountPayment';
import MyAccountShipping from './MyAccountShipping';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

function App() {

  //Here we are creating a state apiResponse, and a method setAPI to change the value of that state
  // const [apiResponse, setAPI] = useState({
  //   list: []
  // });
  const [loginState, setLoginState] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setName] = useState("");
  const [nickName, setNick] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [creditCards, setCreditCards] = useState([]);


  // //Call the useEffect hook
  // useEffect(() =>{
  //   //Create an axios request to our api at /testAPI route
  //   axios({
  //     "method": "GET",
  //     "url": "http://localhost:5000/users",
  //   })
  //   //set apiResponse to the retrieved data
  //   .then((response) => {
  //     alert(JSON.stringify(response.data));
  //   })
  //   //log any errors if they apply
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // });

  function setLoggedIn(status){
    setLoginState(status);
  }

  function isLoggedIn(){
    return loginState;
  }

  function getUserInformation(information){
    var tempObject = JSON.parse(information);
    setUserName(tempObject.userName);
    setPassword(tempObject.password);
    setName(tempObject.name);
    setNick(tempObject.nickname);
    setHomeAddress(tempObject.homeAddress);
    setEmailAddress(tempObject.emailAddress);
    
  }

  return (
    <Router>
      <div className="App">
        <Nav isLoggedIn={isLoggedIn} /> 
        <Switch>
          <Route path ="/Login">
            <Login 
            setLoggedIn={setLoggedIn}
            getUserInformation={getUserInformation} />
          </Route>
          <Route path ="/Register">
            <Register />
          </Route>
          <Route path ="/MyAccount">
            <MyAccount 
            userName={userName}
            password={password}
            name = {fullName}
            nickName = {nickName}
            emailAddress = {emailAddress}
            isLoggedIn = {isLoggedIn}
            />
          </Route>
          <Route path ="/ShippingInformation">
            <MyAccountShipping
            name = {fullName}
            homeAddress = {homeAddress}
            isLoggedIn = {isLoggedIn}
            />
          </Route>
          <Route path ="/PaymentInformation">
            <MyAccountPayment 
            name = {fullName}
            isLoggedIn = {isLoggedIn}
            />
          </Route>
          <Route path ="/Dashboard">
            <Home />
          </Route>
          <Route path ="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




export default App;
