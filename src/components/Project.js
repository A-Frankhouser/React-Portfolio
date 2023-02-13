import React from "react";


function Project() {

        // Projects Info:
    const projects = [

        // Blogging Website:
        {
            projectTitle: 'The Blog Spot',
            description: 'A full-stack blogging website that stores users login information, posts, and comments. Also allows users to view and comment on other peoples posts!',
            projectImage: '../assets/blog-img.png',
            technologies: 'HTML/CSS | JavaScript | Node.js | Express | Handlebars | mySQL | Sequelize | Bootstrap | Heroku',
            deployedURL: 'https://the-blog-spotv1.herokuapp.com/',
            gitHubLink: 'https://github.com/A-Frankhouser/Blog-Site'
        },

        // NoteTaking App:
        {
            projectTitle: 'Note Taking App',
            description: 'An app that allows a user to create, save, and delete notes.',
            projectImage: '../assets/note-taker.png',
            technologies:'HTML/CSS | JavaScript | Node.js | Express | Heroku',
            deployedURL: 'https://note-taker4230.herokuapp.com/',
            gitHubLink: 'https://github.com/A-Frankhouser/Note-Taking-App'
        },

        // Project Headspace Ai:
        {
            projectTitle: 'Headspace.AI',
            description: 'A website for users to create AI generated images and save them to a personal gallery. The user may also visit the feed tab to view all images from every users.',
            projectImage: '../assets/headspaceai.png',
            technologies:'HTML/CSS | JavaScript | Node.js | Express | Handlebars | mySQL | Sequelize | Bootstrap | 3rd Party API',
            deployedURL: 'https://headspaceai.herokuapp.com/',
            gitHubLink: 'https://github.com/theLemmonade/project-headspace.ai'
        },

        // Work Day Scheduler
        {
            projectTitle: 'Work Day Scheduler',
            description: 'An application that allows users to create a single day schedule. The time blocks change color depending if the time is current, past, or in the future. All data is stored in local storage.',
            projectImage: '../assets/work-day.png',
            technologies:'HTML/CSS | JavaScript | Heroku',
            deployedURL: 'https://a-frankhouser.github.io/Work-Day-Scheduler/',
            gitHubLink: 'https://github.com/A-Frankhouser/Work-Day-Scheduler'
        },

        // Password Generator:
        {
            projectTitle: 'Password Generator',
            description: 'A simple web application that allows users to randomly generate a password based on the criteria they set.',
            projectImage: '../assets/password-gen.png',
            technologies:'HTML/CSS | JavaScript | GitHub Pages',
            deployedURL: 'https://a-frankhouser.github.io/Password-Generator/',
            gitHubLink: 'https://github.com/A-Frankhouser/Password-Generator'
        },

        // PWA Text Editor
        {
            projectTitle: 'Text Editor',
            description: 'A text editor that allows users to save text and also install it.',
            projectImage: '../assets/JATE.png',
            technologies:'HTML/CSS | JavaScript | Heroku | IndexedDB ',
            deployedURL: 'https://jatenote.herokuapp.com/',
            gitHubLink: 'https://github.com/A-Frankhouser/PWA_Text-Editor'
        }
    ];

    // const projectCards = projects.map(project => {
        return(<div className="row row-cols-1 row-cols-md-2 g-4 ms-2 me-2 mt-3"> 
        { projects.map((project,key) =>  (
        <div key={key} className='card-group mb-3'>

            <div className="card text-center">
                <img src={project.projectImage} className="card-img-top" alt={project.projectTitle}/>
                <div className="card-body">
                    <h5 className="card-title">{project.projectTitle}</h5>
                    <p className="card-text">{project.description}</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Skills used:</h5>
                    <p className="card-text">{project.technologies}</p>
                </div>
                <div className="card-footer">
                    <a href={project.deployedURL} className='btn btn-primary'>Website</a>
                    <a href={project.gitHubLink} className='btn btn-dark ms-2'>GitHub Repo</a>
                </div>
            </div>
        </div>
        ))}
    </div>
    );
            }

export default Project;