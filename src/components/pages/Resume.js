import React from "react";

function Resume() {
    return(
        <div className="container-base mb-4 ">
            {/* Header: */}
            <div>
                <h2 className="text-center mt-4 fs-2 fst-italic" id="aboutHeader">Resume</h2>
                <hr className='ms-5'/>
            </div>

            {/* Intro: */}
            <div className="row text-center mb-3">

                {/* Frontend */}
                <div className="col-lg-6 mb-5">
                    <h4>FRONT-END PROFICIENCIES:</h4>
                    <ul className='list-unstyled'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>BootStrap</li>
                        <li>UI/UX Design</li>
                        <li>Responsive Web Design</li>
                        <li>Version control/Git</li>
                        <li>jQuery</li>
                    </ul>
                </div>

                {/* Backend */}
                <div className="col-lg-6 mb-5">
                    <h4>BACK-END PROFICIENCIES:</h4>
                    <ul className='list-unstyled'>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>API's (web, third-party, RESTful, server-side)</li>
                        <li>Progressive Web Application</li>
                        <li>Model View Controller</li>
                    </ul>
                </div>

                {/* DevTools: */}
                <div className="col-lg-6 mb-5">
                    <h4>DEV TOOL PROFICIENCIES:</h4>
                    <ul className='list-unstyled'>
                        <li>Git</li>
                        <li>Npm</li>
                        <li>Nodemon</li>
                        <li>Webpack</li>
                    </ul>
                </div>
                
                {/* Database's: */}
                <div className="col-lg-6 mb-5">
                    <h4>DATABASE PROFICIENCIES:</h4>
                    <ul className='list-unstyled'>
                        <li>MySQL (sequelize)</li>
                        <li>NoSQL (MongoDB, Mongoose)</li>
                        <li>GraphQL</li>
                        <li>Webpack</li>
                    </ul>
                </div>
            </div>

            {/* Download Resume: */}
            <div className="mt-5 d-flex justify-content-center">
                <a href={require('../../Documents/Resume 2023.pdf')} download>
                    <button className="btn btn-primary btn-lg mb-2" >Download my resume here!<img src={require('../../images/download-icon.png')} className='icon ms-3'/></button>
                </a>
            </div>
        </div>
    )
}

export default Resume;