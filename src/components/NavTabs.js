import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
    return (
    // About Me Section:
        <ul className="nav nav-tabs" id="navBar">
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                    About Me
                </a>
            </li>

    {/* Portfolio Section:  */}
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </a>
            </li>

    {/* Resume Section:  */}
                        <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange("Resume")}
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
                    Resume
                </a>
            </li>

    {/* Contact Section:  */}
            {/* <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </a>
            </li> */}
    </ul>
    );
}

export default NavTabs;