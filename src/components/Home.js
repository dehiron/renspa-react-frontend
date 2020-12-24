import React from 'react'

import Registration from './auth/Registration'
import Login from './auth/Login'

function Home(props){

    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data)
        props.history.push("/dashboard")
    }

    return (
        <div>
            <h1>Home</h1>
            {/* <h2>ログイン状態: {props.loggedInStatus}</h2> */}
            <Registration handleSuccessfulAuthentication={handleSuccessfulAuthentication}/>
            <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication}/>
        </div>
    )
}

export default Home;