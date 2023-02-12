import React from "react";
import NavTabs from "./NavTabs";

function Header(props) {
    const { currentPage, handlePageChange } = props

    return (
        <div>
            <div className="bg-dark bg-opacity- text-light">
                <h1>Alexander Frankhouser</h1>
                <NavTabs
                    currentPage={currentPage} 
                    handlePageChange={handlePageChange} />
            </div>
        </div>
    )
}

export default Header;