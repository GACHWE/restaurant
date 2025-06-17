// //  import React from "react";
// //  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// //  import Navbar from "./components/Navbar";
// //  import Home from "./Pages/Home";
// //  import Dishes from "./Pages/Dishes";
// //  import About from "./Pages/About";
// //  import Reviews from "./Pages/Reviews";
// //  import Footer from "./components/Footer";
// //  import Services from "./Pages/Services";
// //  const App = () => {
// //    return (
// //      <div>
// //        <Navbar />
// //        <main>
// //          <div id="home">
// //            <Home />
// //          </div>
// //          <div id='dishes'>
// //            <Dishes/>
// //          </div>
// //          <div id='about'>           <About/>
// //         </div>
// //         <div id='reviews'>
// //           <Reviews/>
// //          </div>
// //     </main>
// // <Routers>
// //   <Routes>
// //   <Route path="/dish-details/:dishTitle" element={<DishDetails />} />
// //   </Routes>
// // </Routers>      <div>
// //      <Footer/>
// //      </div>
// //     </div>
// //   );
// // };

// //  export default App;

// App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Home from "./Pages/Home";
// import Dishes from "./Pages/Dishes";
// import About from "./Pages/About";
// import Reviews from "./Pages/Reviews";
// import Footer from "./components/Footer";
// import DishDetails from "./Pages/DishDetails"; // Import the new component

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<>
//             <div id='home'><Home /></div>
//             <div id='dishes'><Dishes /></div>
//             <div id='about'><About /></div>
//             <div id='reviews'><Reviews /></div></>} />
//             <Route path="/dish/:dishId" element={<DishDetails />} /> {/* New route for dish details */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
// App.jsx
// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DishDetails from "./Pages/DishDetails";
import MainPage from "./Pages/MainPage";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleActiveSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div>
        <Navbar activeSection={activeSection} /> {/* Pass activeSection as a prop */}
        <main>
          <Routes>
            <Route path="/" element={<MainPage onSectionChange={handleActiveSectionChange} />} />
            <Route path="/dish/:dishId" element={<DishDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;