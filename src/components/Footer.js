import React from "react";

function Footer() {
    return (
        // Footer Card
        <div className="container-base bg-dark d-flex flex-row lh-sm">
            {/* Github Logo */}
            <a href="https://github.com/A-Frankhouser"><img src={require('../assets/github-mark-white.png')} alt="github-logo" className="icon"/></a>
            {/* Linkedin Logo */}
            <a href="https://www.linkedin.com/in/alex-frankhouser-670086266/"><img src={require('../assets/LI-In-Bug.png')} alt='Linkedin Logo' className="icon"/></a>
        </div>
    )
}

export default Footer;