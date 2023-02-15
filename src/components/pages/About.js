import React from "react";

function About() {
    return(
        <div className="container-base mb-5">
            <div>
                <h2 className="text-center mt-4 fs-2 fst-italic" id="aboutHeader">About Me</h2>
                <hr className='ms-5 me-5'/>
            </div>

        <div className="row justify-content-center">
            <div className="col-4 col-sm-3 mb-4 me-5">
                <img src={require('../../images/React-Portfolio.jpg')} id='aboutImg' className="img-fluid"/>
            </div>

            <div className="col-lg-6 ms-5 me-4">    
                <p id="aboutBody"> <></>Hello, I'm Alex Frankhouser. I started coding in 2022 and fell in love. What I
                    love about coding is that there's much to learn and improve upon.
                    Also, it's extremely satisfying to watch the hardwork put into a project come together and make
                    something amazing! I love putting my all into something and producing unique
                    works of art. When people describe me they tend to use the phrase "black & white person". I enjoy
                    working with teams or by myself. No matter the situation I am faced with I will always stick it through!
                    </p>
                    <p id="aboutBody">
                    Previously in life I went to college to become a teacher and become a physical therapist assistant. I
                    completed my Massachusetts Tests for Educator License (MTEL's).
                    After completing my MTEL's, I started my schooling to become a Physical Therapist Assistant. Once I
                    graduated I realized that working in the healthcare field was not for me so
                    I started my next venture by working full time at a wood yard. During this time I started from the
                    bottom and worked my way up to become the production manager! Now I lead
                    a team of four people and I am responsible for all the documentation and work that goes on.
                </p>
            </div>
        </div>
        </div>
    )
}


export default About;