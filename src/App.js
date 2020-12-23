import React, { useEffect, useState } from "react";
import './App.css';
import Calendar from 'react-calendar';



function App() {

  const [owners, setOwners] = useState([])
  const [properties, setProperties] = useState([])
  const [posts, setPosts] = useState([])

  async function getData(){

    const fetchInit = {
            method: "GET",
            headers: { "content-type": "application/json" }
          };

    await fetch(new URL("owners", process.env.REACT_APP_SERVER_URL), fetchInit)
      .then(response => response.json())
      .then(response => setOwners(response));
    
    await fetch(new URL("properties", process.env.REACT_APP_SERVER_URL), fetchInit)
    .then(response => response.json())
    .then(response => setProperties(response));

    await fetch(new URL("posts", process.env.REACT_APP_SERVER_URL), fetchInit)
    .then(response => response.json())
    .then(response => setPosts(response));
  }

  useEffect(()=>{
    getData()
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <ul type="square">
          {owners.map((owner) => <li key={owner.id}>{owner.name} : {owner.email}</li>)}
        </ul> */}
        <ul type="square">
          {properties.map((property) => 
            <li key={property.id}>
              {property.type} : {property.address_full} : 
                <img src={property.header_img} alt=" " width="20%"></img>
                <Calendar className="calender" />
            </li>)}
        </ul>
        <ul type="square">
          {posts.map((post) => <li key={post.id}>{post.title} : {post.content}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;




// **********



// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {

//   componentDidMount() {
//     const fetchInit = {
//       method: "GET",
//       headers: { "content-type": "application/json" }
//     };

//     fetch(new URL("owners", process.env.REACT_APP_SERVER_URL), fetchInit)
//       .then(response => response.json())
//       .then(response => this.setState(response));
//       console.log(this.state)
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Response: {this.state.text}</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;