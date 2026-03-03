import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DishDetails from "./Pages/DishDetails";
import MainPage from "./Pages/MainPage";
import woodbg from "/Image/woodbg2.jpg";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleActiveSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div 
      className="min-h-screen w-full"
      style={{ backgroundImage: `url(${woodbg})` }}>
        <Navbar activeSection={activeSection} />{" "}
        {/* Pass activeSection as a prop */}
        <main>
          <Routes>
            <Route
              path="/"
              element={<MainPage onSectionChange={handleActiveSectionChange} />}
            />
            <Route path="/dish/:dishId" element={<DishDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
