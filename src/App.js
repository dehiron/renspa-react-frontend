import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import MainPage from './components/MainPage';
import Home from './components/Home';
import OwnerHome from './components/OwnerHome';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
import Checkout from './components/Checkout';
import axios from 'axios'

function App() {

  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})
  
  const handleLogin = (data) => {
    setLoggedInStatus("ログインなう")
    setUser(data.user)
  }

  useEffect(()=>{
    checkLoginStatus()
  })

  const checkLoginStatus = () => {
    axios.get("http:localhost:5000/logged_in", { withCredentials: true })
    .then(response => {
      console.log("ログイン状況",response)
    }).catch(error => {
      console.log("ログインエラー", error)
    })
  }

  return(
    <div>
      <BrowserRouter>
        <Switch>
        <Route
            exact path={'/'}
            render= {props => (
              <MainPage {...props}/>
            )}
          />
          {/* <Route exact path={"/userhome"} component={Home} /> */}
          <Route
            exact path={'/userhome'}
            render= {props => (
              <Home {...props} handleLogin = {handleLogin} loggedInStatus = {loggedInStatus} />
            )}
          />
          {/* <Route exact path={"/ownerhome"} component={OwnerHome} /> */}
          <Route
            exact path={'/ownerhome'}
            render= {props => (
              <OwnerHome {...props} handleLogin = {handleLogin} loggedInStatus = {loggedInStatus} />
            )}
          />
          {/* <Route exact path={"/dashboard"} component={Dashboard} /> */}
          <Route
            exact path={'/dashboard'}
            render= {props => (
              <Dashboard { ...props } loggedInStatus = {loggedInStatus} user = {user}/>
            )}
          />
          <Route
            exact path={'/schedule'}
            render= {props => (
              <Schedule { ...props } user = {user}/>
            )}
          />
          <Route
            exact path={'/checkout'}
            render= {props => (
              <Checkout { ...props }/>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

