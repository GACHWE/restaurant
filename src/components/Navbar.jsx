// import React, { useState } from "react";
// import { BiChevronDown, BiRestaurant } from "react-icons/bi";
// import { Link } from "react-scroll";
// import Button from "../Layout/Button";
// import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
// import DarkMode from "./DarkMode";
// import { motion as Motion } from "framer-motion";
// const Navbar = () => {
//   const [menu, setMenu] = useState(false);

//   const handleChange = () => {
//     setMenu(!menu);
//   };

//   const SlideDown = (delay) => {
//     return {
//       initial: {
//         y: "-100%",
//         opacity: 0,
//       },
//       animate: {
//         y: 0,
//         opacity: 1,
//         transition: {
//           duration: 0.6,
//           delay: delay,
//         },
//       },
//     };
//   };

//   const closeMenu = () => {
//     setMenu(false);
//   };

//   return (
//     <div className="fixed w-full z-50">
//       <div>
//         <div className="flex flex-row justify-between bg-gradient-to-tr from-white to-gray-200 text-gray-950 p-5 md:px-32 px-5 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-600 dark:text-white duration-200">
//           {/* Logo */}
//           <Motion.div variants={SlideDown(0.1)} initial="initial" animate="animate">
//           <div className="flex flex-row items-center cursor-pointer">
//             <span>
//               <BiRestaurant size={32} />
//             </span>
//             <h1 className="text-xl font-semibold">TevaOnTime</h1>
//           </div>

//            </Motion.div>

//           {/* Desktop Navigation */}
//           <div className="flex items-center gap-4">
//             <nav className="hidden md:flex items-center text-lg font-medium gap-8">
//               <Motion.div variants={SlideDown(0.1)} initial="initial" animate="animate">
//                 <Link
//                   spy={true}
//                   smooth={true}
//                   duration={500}
//                   className="hover:text-brightColor transition-all cursor-pointer"
//                   onClick={closeMenu}
//                 >
//                   Home
//                 </Link>
//               </Motion.div>
//               <Motion.div variants={SlideDown(0.2)} initial="initial" animate="animate">
//                 <div className="relative group">
//                   <div className="flex items-center gap-1">
//                     <Link
//                       to="dishes"
//                       spy={true}
//                       smooth={true}
//                       duration={500}
//                       className="hover:text-brightColor transition-all cursor-pointer"
//                       onClick={closeMenu}
//                     >
//                       Dishes
//                     </Link>
//                   </div>
//                 </div>
//               </Motion.div>
//               <Motion.div variants={SlideDown(0.3)} initial="initial" animate="animate">
//                 <Link
//                   to="about"
//                   spy={true}
//                   smooth={true}
//                   duration={500}
//                   className="hover:text-brightColor transition-all cursor-pointer"
//                   onClick={closeMenu}
//                 >
//                   About
//                 </Link>
//               </Motion.div>
//               <Motion.div variants={SlideDown(0.4)} initial="initial" animate="animate">
//                 <Link
//                   to="reviews"
//                   spy={true}
//                   smooth={true}
//                   duration={500}
//                   className="hover:text-brightColor transition-all cursor-pointer"
//                   onClick={closeMenu}
//                 >
//                   Reviews
//                 </Link>
//               </Motion.div>
//               <div className="hover hover:scale-105">
//                 <DarkMode />
//               </div>
//             </nav>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             {menu ? (
//               <AiOutlineClose size={25} onClick={handleChange} className="cursor-pointer" />
//             ) : (
//               <AiOutlineMenuUnfold size={25} onClick={handleChange} className="cursor-pointer" />
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300 ${
//             menu ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <Motion.div variants={SlideDown(0.1)} initial="initial" animate="animate">
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//               onClick={closeMenu}
//             >
//               Home
//             </Link>
//           </Motion.div>
//           <Motion.div variants={SlideDown(0.2)} initial="initial" animate="animate">
//             <Link
//               to="dishes"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//               onClick={closeMenu}
//             >
//               Dishes
//             </Link>
//           </Motion.div>
//           <Motion.div variants={SlideDown(0.3)} initial="initial" animate="animate">
//             <Link
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//               onClick={closeMenu}
//             >
//               About
//             </Link>
//           </Motion.div>
//           <Motion.div variants={SlideDown(0.4)} initial="initial" animate="animate">
//             <Link
//               to="menu"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//               onClick={closeMenu}
//             >
//               Menu
//             </Link>
//           </Motion.div>
//           <Motion.div variants={SlideDown(0.5)} initial="initial" animate="animate">
//             <Link
//               to="reviews"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//               onClick={closeMenu}
//             >
//               Reviews
//             </Link>
//           </Motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// // import React, { useState } from "react";
// // import { BiChevronDown, BiRestaurant } from "react-icons/bi";
// // import { Link } from "react-scroll";
// // import Button from "../Layout/Button"; // Assuming the path to your Button component
// // import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
// // import DarkMode from "./DarkMode";

// // const Navbar = () => {
// //   const [menu, setMenu] = useState(false);

// //   const handleChange = () => {
// //     setMenu(!menu);
// //   };

// //   const closeMenu = () => {
// //     setMenu(false);
// //   };

// //   return (
// //     <div className="fixed w-full z-50">
// //       <div>
// //         <div className="flex flex-row justify-between bg-gradient-to-tr from-white to-gray-200 text-gray-950 p-4 md:p-5 md:px-32 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-600 dark:text-white duration-200">
// //           {/* Logo */}
// //           <div className="flex flex-row items-center cursor-pointer">
// //             <span>
// //               <BiRestaurant size={32} />
// //             </span>
// //             <h1 className="text-xl font-semibold">TevaOnTime</h1>
// //           </div>

// //           {/* Desktop Navigation (Hidden on smaller than medium screens) */}
// //           <div className="flex items-center gap-4">
// //             <div className="hover:scale-105 justify-center ">
// //               <DarkMode className="w-12"/>
// //             </div>
// //             {/* Consistent Placement */}
// //             <nav className="hidden md:flex items-center text-lg font-medium gap-6 lg:gap-8">
// //               <Link
// //                 to="home"
// //                 spy={true}
// //                 smooth={true}
// //                 duration={500}
// //                 className="hover:text-brightColor transition-all cursor-pointer"
// //                 onClick={closeMenu}
// //               >
// //                 Home
// //               </Link>
// //               <Link
// //                 to="dishes"
// //                 spy={true}
// //                 smooth={true}
// //                 duration={500}
// //                 className="hover:text-brightColor transition-all cursor-pointer"
// //                 onClick={closeMenu}
// //               >
// //                 Dishes
// //               </Link>

// //               <Link
// //                 to="about"
// //                 spy={true}
// //                 smooth={true}
// //                 duration={500}
// //                 className="hover:text-brightColor transition-all cursor-pointer"
// //                 onClick={closeMenu}
// //               >
// //                 About
// //               </Link>
// //               <Link
// //                 to="reviews"
// //                 spy={true}
// //                 smooth={true}
// //                 duration={500}
// //                 className="hover:text-brightColor transition-all cursor-pointer"
// //                 onClick={closeMenu}
// //               >
// //                 Reviews
// //               </Link>
// //             </nav>
// //           </div>
// //           {/* Mobile Menu Button (Visible on smaller than medium screens) */}
// //           <div className="md:hidden flex items-center">
// //             {menu ? (
// //               <AiOutlineClose size={25} onClick={handleChange} className="cursor-pointer" />
// //             ) : (
// //               <AiOutlineMenuUnfold size={25} onClick={handleChange} className="cursor-pointer" />
// //             )}
// //           </div>
// //         </div>

// //         {/* Mobile Menu (Hidden on medium and larger screens) */}
// //         <div
// //           className={`md:hidden flex flex-col absolute bg-gradient-to-tr from-white to-gray-200 text-gray-950 p-4 md:p-5 md:px-32 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-600 dark:text-white duration-200 left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300 ${
// //             menu ? "translate-x-0" : "-translate-x-full"
// //           }`}
// //         >
// //           <Link
// //             to="home"
// //             spy={true}
// //             smooth={true}
// //             duration={500}
// //             className="hover:text-brightColor transition-all cursor-pointer"
// //             onClick={closeMenu}
// //           >
// //             Home
// //           </Link>
// //           <Link
// //             to="dishes"
// //             spy={true}
// //             smooth={true}
// //             duration={500}
// //             className="hover:text-brightColor transition-all cursor-pointer"
// //             onClick={closeMenu}
// //           >
// //             Dishes
// //           </Link>

// //           <Link
// //             to="about"
// //             spy={true}
// //             smooth={true}
// //             duration={500}
// //             className="hover:text-brightColor transition-all cursor-pointer"
// //             onClick={closeMenu}
// //           >
// //             About
// //           </Link>
// //           <Link
// //             to="menu"
// //             spy={true}
// //             smooth={true}
// //             duration={500}
// //             className="hover:text-brightColor transition-all cursor-pointer"
// //             onClick={closeMenu}
// //           >
// //             Menu
// //           </Link>
// //           <Link
// //             to="reviews"
// //             spy={true}
// //             smooth={true}
// //             duration={500}
// //             className="hover:text-brightColor transition-all cursor-pointer"
// //             onClick={closeMenu}
// //           >
// //             Reviews
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;

import React, { useState, useEffect } from "react";
import { BiRestaurant } from "react-icons/bi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import DarkMode from "./DarkMode";
import { motion as Motion } from "framer-motion";

const Navbar = ({ activeSection }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [localActiveLink, setLocalActiveLink] = useState("home");

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const slideDownAnimation = (delay) => ({
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, delay } },
  });

  const scrollToSection = (target) => {
    setMenu(false);
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/dish/")) {
      setLocalActiveLink("dishes"); 
    } else if (location.pathname === "/") {
      setLocalActiveLink(activeSection);
    } else {
      setLocalActiveLink(null);
    }
  }, [location, activeSection]);

  return (
    <div className="fixed w-full z-50">
      <div>
        <div className="flex flex-row justify-between bg-gradient-to-tr from-white to-gray-200 text-gray-950 p-5 md:px-32 px-5 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-600 dark:text-white duration-200">
          {/* Logo */}
          <Motion.div
            variants={slideDownAnimation(0.1)}
            initial="initial"
            animate="animate"
          >
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span>
                <BiRestaurant size={32} />
              </span>
              <h1 className="text-xl font-semibold">TevaOnTime</h1>
            </div>
          </Motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center text-lg font-medium gap-8">
              <div className="hover hover:scale-105">
                {" "}
                <Motion.div
                  variants={slideDownAnimation(0.1)}
                  initial="initial"
                  animate="animate"
                >
                  <Link
                    to="/"
                    onClick={() => scrollToSection("home")}
                    className={`hover:text-brightColor transition-all cursor-pointer ${
                      localActiveLink === "home" ? "text-brightColor" : ""
                    }`}
                  >
                    Home
                  </Link>
                </Motion.div>
              </div>
              <div className="hover hover:scale-105">
                {" "}
                <Motion.div
                  variants={slideDownAnimation(0.2)}
                  initial="initial"
                  animate="animate"
                >
                  <div className="relative group">
                    <div className="flex items-center gap-1">
                      <Link
                        to="/"
                        onClick={() => scrollToSection("dishes")}
                        className={`hover:text-brightColor transition-all cursor-pointer ${
                          localActiveLink === "dishes" ? "text-brightColor" : ""
                        }`}
                      >
                        Dishes
                      </Link>
                    </div>
                  </div>
                </Motion.div>
              </div>
              <div className="hover hover:scale-105">
                {" "}
                <Motion.div
                  variants={slideDownAnimation(0.3)}
                  initial="initial"
                  animate="animate"
                >
                  <Link
                    to="/"
                    onClick={() => scrollToSection("about")}
                    className={`hover:text-brightColor transition-all cursor-pointer ${
                      localActiveLink === "about" ? "text-brightColor" : ""
                    }`}
                  >
                    About
                  </Link>
                </Motion.div>
              </div>
              <div className="hover hover:scale-105">
                {" "}
                <Motion.div
                  variants={slideDownAnimation(0.4)}
                  initial="initial"
                  animate="animate"
                >
                  <Link
                    to="/"
                    onClick={() => scrollToSection("reviews")}
                    className={`hover:text-brightColor transition-all cursor-pointer ${
                      localActiveLink === "reviews" ? "text-brightColor" : ""
                    }`}
                  >
                    Reviews
                  </Link>
                </Motion.div>
              </div>
              <div className="hover hover:scale-105">
                <DarkMode />
              </div>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <Motion.div  variants={slideDownAnimation(0.1)}
            initial="initial"
            animate="animate"className="md:hidden gap-8 flex items-center justify-center">
            <div className="right-auto ">
              <DarkMode />
            </div>
            {menu ? (
              <AiOutlineClose
                size={25}
                onClick={toggleMobileMenu}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineMenuUnfold
                size={25}
                onClick={toggleMobileMenu}
                className="cursor-pointer"
              />
            )}
          </Motion.div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col absolute bg-gradient-to-tr from-white to-gray-200 text-gray-950 p-5 md:px-32 px-5 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-600 dark:text-white opacity-95 left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300 ${
            menu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Motion.div
            variants={slideDownAnimation(0.1)}
            initial="initial"
            animate="animate"
          >
            <Link
              to="/"
              onClick={() => scrollToSection("home")}
              className={`hover:text-brightColor transition-all cursor-pointer ${
                localActiveLink === "home" ? "text-brightColor" : ""
              }`}
            >
              Home
            </Link>
          </Motion.div>
          <Motion.div
            variants={slideDownAnimation(0.2)}
            initial="initial"
            animate="animate"
          >
            <Link
              to="/"
              onClick={() => scrollToSection("dishes")}
              className={`hover:text-brightColor transition-all cursor-pointer ${
                localActiveLink === "dishes" ? "text-brightColor" : ""
              }`}
            >
              Dishes
            </Link>
          </Motion.div>
          <Motion.div
            variants={slideDownAnimation(0.3)}
            initial="initial"
            animate="animate"
          >
            <Link
              to="/"
              onClick={() => scrollToSection("about")}
              className={`hover:text-brightColor transition-all cursor-pointer ${
                localActiveLink === "about" ? "text-brightColor" : ""
              }`}
            >
              About
            </Link>
          </Motion.div>
          
          <Motion.div
            variants={slideDownAnimation(0.5)}
            initial="initial"
            animate="animate"
          >
            <Link
              to="/"
              onClick={() => scrollToSection("reviews")}
              className={`hover:text-brightColor transition-all cursor-pointer ${
                localActiveLink === "reviews" ? "text-brightColor" : ""
              }`}
            >
              Reviews
            </Link>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar