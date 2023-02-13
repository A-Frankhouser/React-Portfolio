import React, { useState } from "react";

function Project(
    // Props:
    name, 
    description, 
    projectImage, 
    technologies, 
    deployedURL, 
    gitHubLink
    ) {
        // Projects in an array starting from the first one.
    const projectInfo = useState(props)[0].projects;

    const name = projectInfo.name;
    const description = projectInfo.description;
    const projectImage = projectInfo.projectImage;
    const technologies = projectInfo.technologies;
    const deployedURL = projectInfo.deployedURL;
    const gitHubLink = projectInfo.gitHubLink;
}

export default Project;