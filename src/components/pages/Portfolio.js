import React from "react";
import  Project  from '../Project';


function Portfolio(props) {

    return(
        <div className="container-base">
            {/* Header */}
            <div>
                <h2 className="text-center mt-4 fs-2 fst-italic" id="portfolioTitle">Portfolio</h2>
                <hr className='ms-5'/>
            </div>
            {/* Projects */}
            <div>
                        <Project />
            </div>
        </div>
    )
    }

export default Portfolio;