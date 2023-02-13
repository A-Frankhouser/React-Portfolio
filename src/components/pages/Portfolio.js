import React from "react";
import Project from '../Project';
import { projectCards} from '../Project';

function Portfolio() {

    return(
        <div className="container-base">
            {/* Header */}
            <div className="">
                <h2 className="text-center mt-4 fs-2" id="portfolioTitle">Portfolio</h2>
                <hr className='ms-5'/>
            </div>
            {/* Projects */}
            <div>
                <ul>
                    <li>
                        <Project projectCards={projectCards[0]}></Project>
                    </li>
                </ul>
            </div>
        </div>
    )
    }

export default Portfolio;