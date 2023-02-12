import React from "react";

function Footer() {
    return (
        // Footer Card
        <div className="bg-dark d-flex flex-row position-absolute bottom-0" id="footer">
            {/* Github Logo */}
            <a href="https://github.com/A-Frankhouser"><img src={require('../assets/github-mark-white.png')} alt="github-logo" className="icon ms-3"/></a>
            {/* Linkedin Logo */}
            <a href="https://www.linkedin.com/in/alex-frankhouser-670086266/"><img src={require('../assets/LI-In-Bug.png')} alt='Linkedin Logo' className="icon ms-3"/></a>
        </div>
    )
}

export default Footer;