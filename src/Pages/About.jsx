import React from "react";
import waiter from "/Image/waiter2.jpg";
import { motion as Motion } from 'framer-motion';


const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 text-gray-300 py-20 md:px-32 px-5 duration-200"
    >
      <div className="">
        <div className="flex flex-wrap">
          <Motion.div 
           initial={{ opacity: 0, scale: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: false }}
           transition={{
               type: "spring",
               stiffness: 50,
               damping: 20,
               delay: 0.4}}
               className="w-full p-4 lg:w-1/2">
            <img src={waiter} className="rounded-3xl sm:xl" />
          </Motion.div>
          <div className="w-full px-2 lg:w-1/2 sm:w-3/4">
            <h1 className="font-semibold text-4xl text-center md:text-start">
              Why we Deserve to Serve you
              <di className="mb-8 mt-1 h-2 w-36 bg-brightColor lg:-rotate-3"></di>
            </h1>
            <Motion.p initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }} 
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.8
                    }}
                    >
              Imagine a place where culinary excellence meets unparalleled
              comfort  that's Teva on Time Restaurant and Lodging. We offer
              more than just a meal or a room; we provide an experience. Our
              restaurant boasts a menu crafted from the freshest,
              locally-sourced ingredients, promising a symphony of flavors that
              will tantalize your taste buds. From the first bite to the last,
              you'll be treated to dishes prepared with passion and precision,
              served in an ambiance that's both elegant and inviting.
            </Motion.p>
            <Motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} 
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 1
            }}>
              But the experience doesn't end with the meal. Extend your stay in
              our luxurious lodging, where every detail is designed for your
              relaxation and rejuvenation. Picture yourself unwinding in a
              beautifully appointed room, enjoying top-tier amenities, and
              waking up to stunning views. Whether you're seeking a romantic
              getaway, a family retreat, or a peaceful haven for personal
              reflection, Teva on Time offers the perfect setting to create
              lasting memories. Choose Teva on Time, where every moment is a
              celebration of fine living.
            </Motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
