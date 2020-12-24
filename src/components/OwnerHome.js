import React from 'react'

function OwnerHome(props){

    const handleClick = () => {
        props.history.push("/")
    } 

    return(
        <div className="ownerhome">
            <h1 className="comingsoon">Coming Soon...</h1>
            <img className="underconstruction" height="500" loading="lazy" src="https://dl.dropboxusercontent.com/s/jxy092ajr88fntq/underconstruction.png" />
            <button className= "back-to-home2" onClick={handleClick}>↩︎</button>
        </div>
    )
}

export default OwnerHome;