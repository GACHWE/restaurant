import React from "react";
import Button from "../Layout/Button";
import bgImage from "/Image/bground.jpg";
import menu from "/menu.pdf";
// import { FiDownload } from 'react-icons/fi';
import { motion as Motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full lg:w-2/3 space-y-5">
        <Motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8,
          }}
          className="font-bold text-6xl text-orange-500 py-2"
        >
          Enjoy a seamless, one of a kind experience with us
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 1.2,
          }}
          className="text-white dark:text-gray-800 font-cursive font-bold px-3 justify-center text-2xl"
        >
          At Teva Restaurant, your satisfaction is our priority.{" "}
          <span className="text-gray-200 text-xl">
            We offer exceptional culinary and lodging services,
          </span>{" "}
          perfect for quality time with loved ones or for your personal
          enjoyment.
        </Motion.p>
        <div className="">
          <Motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              type: "tween",
              stiffness: 50,
              damping: 50,
              delay: 1.5,
            }}
            className="bg-gradient-to-tr from-yellow-900 to-yellow-200 text-gray-900 rounded-full border  shadow-md transition duration-300 ease-in-out"
          >
            <a
              href={menu}
              className=" py-2 px-5 flex items-center gap-2"
              download="TevaOnTime_menu.pdf"
            >
              <FaFilePdf className="text-xl" />
              Download Menu pdf.
            </a>
          </Motion.button>
        </div>
      </div>
    </section>
  );
};

export default Home;
