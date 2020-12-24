import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
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
          {/* <Route exact path={"/"} component={Home} /> */}
          <Route
            exact path={'/'}
            render= {props => (
              <Home {...props} handleLogin = {handleLogin} loggedInStatus = {loggedInStatus} />
            )}
          />
          {/* <Route exact path={"/"} component={Dashboard} /> */}
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
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;



// import React, { useEffect, useState } from "react";
// import './App.css';
// import Calendar from 'react-calendar';



// function App() {

//   const [owners, setOwners] = useState([])
//   const [properties, setProperties] = useState([])
//   const [posts, setPosts] = useState([])

//   async function getData(){

//     const fetchInit = {
//             method: "GET",
//             headers: { "content-type": "application/json" }
//           };

//     await fetch(new URL("owners", process.env.REACT_APP_SERVER_URL), fetchInit)
//       .then(response => response.json())
//       .then(response => setOwners(response));
    
//     await fetch(new URL("properties", process.env.REACT_APP_SERVER_URL), fetchInit)
//     .then(response => response.json())
//     .then(response => setProperties(response));

//     await fetch(new URL("posts", process.env.REACT_APP_SERVER_URL), fetchInit)
//     .then(response => response.json())
//     .then(response => setPosts(response));
//   }

//   useEffect(()=>{
//     getData()
//   },[]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <ul type="square">
//           {owners.map((owner) => <li key={owner.id}>{owner.name} : {owner.email}</li>)}
//         </ul> */}
//         <ul type="square">
//           {properties.map((property) => 
//             <li key={property.id}>
//               {property.type} : {property.address_full} : 
//                 <img src={property.header_img} alt=" " width="20%"></img>
//                 <Calendar className="calender" />
//             </li>)}
//         </ul>
//         <ul type="square">
//           {posts.map((post) => <li key={post.id}>{post.title} : {post.content}</li>)}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;



