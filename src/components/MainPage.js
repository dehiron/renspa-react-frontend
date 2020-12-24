import React from 'react'

function MainPage(props) {


    const handleClickUser = () => {
        props.history.push("/userhome")
    }

    const handleClickOwner = () => {
        props.history.push("/ownerhome")
    }

    return(
        <div class="bg">
            <h1 className="main-page-title">RenSpa</h1>
            <h2 className="main-page-subtitle">空間シェアリングサービス</h2>
            <img className="main-page-img" src="https://dl.dropboxusercontent.com/s/j3njpvtzp7czam8/c82640032379e948c5c25be88d2fa821.jpg"/>
            <img className="user-icon" src="https://dl.dropboxusercontent.com/s/yt4lhzal91qp7rd/usericon.png"/>
            <button className="userhome-button" onClick={handleClickUser}>ユーザーの方はこちら</button>
            <img className="owner-icon" src="https://dl.dropboxusercontent.com/s/ati68befftlrpzy/owner.jpg"/>
            <button className="ownerhome-button" onClick={handleClickOwner}>オーナーの方はこちら</button>
        </div>
        
        
    )
}

export default MainPage;