import React from 'react'

import Registration from './auth/Registration'
import Login from './auth/Login'

function Home(props){

    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data)
        props.history.push("/dashboard")
    }

    return (
        <div className = "home-main">
            <h1>RenSpa</h1>
            {/* <h2>ログイン状態: {props.loggedInStatus}</h2> */}
            <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication}/>
            <h3>または</h3>
            <Registration handleSuccessfulAuthentication={handleSuccessfulAuthentication}/>
            
        </div>
    )
}

export default Home;