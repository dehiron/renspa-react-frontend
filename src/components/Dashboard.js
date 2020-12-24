import React, { useEffect, useState, Route} from "react";
import '../App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Schedule from './Schedule';

function Dashboard(props) {

  const [owners, setOwners] = useState([])
  const [properties, setProperties] = useState([])
  const [posts, setPosts] = useState([])
  
  const initialDate = new Date()
  const [startDate, setStartDate] = useState(initialDate)
  const handleChange = (date) => {
    setStartDate(date)
  }

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

  const handleClick = () =>{
    props.history.push('/schedule');
  }

  useEffect(()=>{
    getData()
  },[]);

  return (
    <div className="Dashboard">
      <h1>始めよう！</h1>
      {/* <h2>ログイン状態: {props.loggedInStatus}</h2> */}
      <header className="Dashboard-header">
        <div className="container">
          {properties.map((property) => 
            <div className="oneProperty">
              <div className="header_img_container">
                <img className="header_img" src={property.header_img} alt=" " width="20%"></img>
              </div>
              <div className="text">
                <h3>{property.type}</h3>
                <h3>{property.address_full}</h3>
                <h3>{property.description}</h3>
                <h3>￥{property.price} / 1時間</h3>
              </div>
              <div>
                {/* <DatePicker
                    selected={startDate}
                    onChange={handleChange}/> */}
                <button
                  onClick={handleClick}>
                  いますぐ予約する
                  </button>
              </div>
            </div>)}
        </div>  
      </header>
    </div>
  );
}

export default Dashboard;
