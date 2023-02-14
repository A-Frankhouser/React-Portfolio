import React from "react";
import NavTabs from "./NavTabs";

function Header(props) {
    const { currentPage, handlePageChange } = props

    return (
        <div>
            <div className="bg-dark text-light" id="header">
                <h1 className="ms-4">Alexander Frankhouser</h1>
                <NavTabs
                    currentPage={currentPage} 
                    handlePageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default Header;