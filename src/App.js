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
import Project from "./components/Project";


function App() {
  // Conditional statement to render the appropriate page depending on the navTab clicked on.
  const [currentPage, setCurrentPage] = useState('bout')

  const renderPage = () => {

    if (currentPage === "Contact") {
      return <Contact />;
    }    
    if (currentPage === "Portfolio") {
      return <Portfolio/>;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
      return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Header and NavTabs */}
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>

      {/* Rendered Page: */}
      <div>
        <main>{renderPage()}</main>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
