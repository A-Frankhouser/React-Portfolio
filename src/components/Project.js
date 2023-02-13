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

        // Projects Info:
    const projects = [

        // Blogging Website:
        {
            projectTitle: 'The Blog Spot',
            description: 'A full-stack blogging website that stores users login information, posts, and comments. Also allows users to view and comment on other peoples posts!',
            image: 'blog-img.png',
            technologies: 'HTML/CSS | JavaScript | Node.js | Express | Handlebars | mySQL | Sequelize | Bootstrap | Heroku',
            deployedURL: 'https://the-blog-spotv1.herokuapp.com/',
            gitHubLink: 'https://github.com/A-Frankhouser/Blog-Site'
        },

        // NoteTaking App:
        {
            projectTitle: 'Note Taking App',
            description: 'An app that allows a user to create, save, and delete notes.',
            projectImage: 'note-taker.png',
            technologies:'HTML/CSS | JavaScript | Node.js | Express | Heroku',
            deployedURL: 'https://note-taker4230.herokuapp.com/',
            gitHubLink: 'https://github.com/A-Frankhouser/Note-Taking-App'
        },

        // Project Headspace Ai:
        {
            projectTitle: 'Headspace.AI',
            description: 'A website for users to generate AI images and save them to a personal gallery.',
            projectImage: 'headspaceai.png',
            technologies:'HTML/CSS | JavaScript | Node.js | Express | Handlebars | mySQL | Sequelize | Bootstrap | 3rd Party API',
            deployedURL: 'https://headspaceai.herokuapp.com/',
            gitHubLink: 'https://github.com/theLemmonade/project-headspace.ai'
        },

        // Work Day Scheduler
        {
            projectTitle: 'Work Day Scheduler',
            description: 'An application that allows users to create a single day schedule. The time blocks change color depending if the time is current, past, or in the future. All data is stored in local storage.',
            projectImage: 'work-day.png',
            technologies:'HTML/CSS | JavaScript | Heroku',
            deployedURL: 'https://a-frankhouser.github.io/Work-Day-Scheduler/',
            gitHubLink: 'https://github.com/A-Frankhouser/Work-Day-Scheduler'
        },

        // Password Generator:
        {
            projectTitle: 'Password Generator',
            description: 'A simple web application that allows users to randomly generate a password based on the criteria they set.',
            projectImage: 'password-gen.png',
            technologies:'HTML/CSS | JavaScript | GitHub Pages',
            deployedURL: 'https://a-frankhouser.github.io/Password-Generator/',
            gitHubLink: 'https://github.com/A-Frankhouser/Password-Generator'
        },

        // PWA Text Editor
        {
            projectTitle: 'Text Editor',
            description: 'A text editor that allows users to save text and also install it.',
            projectImage: 'JATE.png',
            technologies:'HTML/CSS | JavaScript | Heroku | IndexedDB ',
            deployedURL: 'https://jatenote.herokuapp.com/',
            gitHubLink: 'https://github.com/A-Frankhouser/PWA_Text-Editor'
        }
    ];

    return (
        // Project Card:
        projects.map((project) => (
        <div>
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
        </div>
    )));
}

export default Project;