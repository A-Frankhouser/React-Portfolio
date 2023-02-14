import React from "react";

function Footer() {
    return (
        // Footer Card
        <div className="bg-dark d-flex flex-row sticky-bottom" id="footer">
            {/* Github Logo */}
            <a href="https://github.com/A-Frankhouser"><img src={require('../images/github-mark-white.png')} alt="github-logo" className="icon ms-3"/></a>
            {/* Linkedin Logo */}
            <a href="https://www.linkedin.com/in/alex-frankhouser-670086266/"><img src={require('../images/LI-In-Bug.png')} alt='Linkedin Logo' className="icon ms-3"/></a>
            {/* Email */}
            <a href="mailto:freesoul423@gmail.com"><img src={require('../images/email-icon.png')} alt='Email Icon' className='icon ms-3'/></a>
        </div>
    )
}

export default Footer;