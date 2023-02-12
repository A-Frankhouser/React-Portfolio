import React from "react";

function About() {
    return(
        <div className="container-base">
            <div className="">
                <h2 className="text-center mt-3 fs-2" id="aboutHeader">About Me</h2>
            </div>

            <div>
                <img src={require('../../assets/React-Portfolio.jpg')} id='aboutImg'/>
            </div>
        </div>
    )
}


export default About;