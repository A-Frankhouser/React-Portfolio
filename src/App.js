import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import NavTabs from "./components/NavTabs";
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
  // Conditional statement to render the appropriate page depending on the navTab clicked on.
  const [currentPage, setCurrentPage] = useState('about')

  const renderPage = () => {
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === "contact") {
      return <Contact />;
    }    
    if (currentPage === "portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Header */}
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {/* Nav Bar */}
      {/* <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div> */}
      {/* Rendered Page: */}
      <div>{renderPage}</div>
    </div>
  );
};

export default App;