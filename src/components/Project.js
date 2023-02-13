import React, { useState } from "react";

function Project(props) {
        // Projects in an array starting from the first one.
    const projectInfo = useState(props)[0].projects;

    const projectTitle = projectInfo.projectTitle;
    const description = projectInfo.description;
    const projectImage = projectInfo.projectImage;
    const technologies = projectInfo.technologies;
    const deployedURL = projectInfo.deployedURL;
    const gitHubLink = projectInfo.gitHubLink;

    return(
        // Project Card:
        <Card>
                {/* Card Image: */}
            <div className="card" style={'width: 18rem'}>
                <img src={require(`../assets/${projectImage}`)} className="card-img-top" alt={projectTitle}/>
                {/* Project title and description: */}
                <div className="card-body">
                    <h5 className="card-title">{projectTitle}</h5>
                    <p className="card-text">{description}</p>
                </div>
                {/* Technologies used: */}
                <div className="card-body">
                    <h5 className="card-title">Skills used:</h5>
                    <p className="card-text">{technologies}</p>
                </div>
                {/* Links to github and deployed site: */}
                <div className="card-body">
                    <a href={deployedURL}><img src={require('../assets/deploy-icon.png')} alt='Deployed Icon' id="card-icon"/></a>
                    <a href={gitHubLink}><img src={require('../assets/github-mark-white.png')} alt='GitHub Icon' id="card-icon"/></a>
                </div>
            </div>
        </Card>
    );
}

export default Project;