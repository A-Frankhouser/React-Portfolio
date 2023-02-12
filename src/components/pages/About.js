import React from "react";

function About() {
    return(
        <div className="container-base">
            <div className="">
                <h2 className="text-center mt-4 fs-2" id="aboutHeader">About Me</h2>
                <hr className='ms-5'/>
            </div>

            <div className="d-flex column">
                <img src={require('../../assets/React-Portfolio.jpg')} id='aboutImg'/>
                <p id="aboutBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum. Elit ut aliquam purus sit amet luctus venenatis. 
                Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Enim nec dui nunc mattis enim ut tellus 
                elementum sagittis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Amet porttitor eget dolor 
                morbi non. Tincidunt eget nullam non nisi est. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Lectus proin 
                nibh nisl condimentum id venenatis.<br />
                <br />
                Vulputate eu scelerisque felis imperdiet proin. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique 
                senectus. Arcu non sodales neque sodales ut. Odio pellentesque diam volutpat commodo sed. Diam quis enim lobortis scelerisque. 
                Dapibus ultrices in iaculis nunc sed augue lacus viverra. Nec ultrices dui sapien eget mi. Mollis nunc sed id semper risus in 
                hendrerit. Accumsan tortor posuere ac ut. At in tellus integer feugiat scelerisque varius morbi enim. Consequat interdum varius 
                sit amet.
                </p>
            </div>
        </div>
    )
}


export default About;