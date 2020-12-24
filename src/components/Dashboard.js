import React, { useEffect, useState } from "react";
import '../App.css';
import Calendar from 'react-calendar';



function Dashboard(props) {

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
    <div className="Dashboard">
      <h1>始めよう！</h1>
      {/* <h2>ログイン状態: {props.loggedInStatus}</h2> */}
      <header className="Dashboard-header">
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

export default Dashboard;
