// import React from 'react';
// import Button from '../Layout/Button'; // Assuming the path to your Button component
// import bgImage from '/Image/bg4.jpg';
//  // Import the image
// import menu from '/menu.pdf'

// const Home = () => {
//   return (
//     <div
//       className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-center'
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className='w-full lg:w-2/3 space-y-5'>
//         <h1 className='text-backgroundColor font-semibold text-6xl text-gray-300'>Enjoy a seamless one of a kind experience with us</h1>
//         <p className='text-backgroundColor'>
//           At Teva on Time you are our priority and we provide the best of culinary services as well
//           as lodging services to spend quality time with friends, family and more so yourself
//         </p>
//         <div>
//           <button className=' text-black bg-gradient-to-tr from-white to-brightColor rounded-md'>
//             <a href={menu} className='px-2 ' download='TevaOnTime menu'>Download Menu pdf </a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import Button from '../Layout/Button';
// import bgImage1 from '/Image/bg1.jpg';
// import bgImage2 from '/Image/bg2.jpg';
// import bgImage3 from '/Image/bg3.jpg';
// import bgImage4 from '/Image/bg4.jpg';
// import menu from '/menu.pdf';

// const Home = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [bgImage1, bgImage2, bgImage3, bgImage4];
//   const captions = [
//     "Welcome to Teva On Time - Your Culinary Journey Begins Here",
//     "Experience Exquisite Dining with a View",
//     "Indulge in the Finest Flavors and Impeccable Service",
//     "Create Lasting Memories in a Unique Atmosphere",
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [images.length]);

//   return (
//     <div
//       className='min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 md:px-5 lg:px-32 bg-cover bg-center transition-all duration-1000'
//       style={{ backgroundImage: `url(${images[currentImage]})` }}
//     >
//       <div className='w-full lg:w-2/3 space-y-4 md:space-y-5'>
//         <h1 className='text-backgroundColor font-semibold text-4xl md:text-5xl lg:text-6xl break-words'>
//           {captions[currentImage]}
//         </h1>
//         <p className='text-backgroundColor text-sm md:text-base'>
//           At Teva on Time you are our priority and we provide the best of culinary services as well
//           as lodging services to spend quality time with friends, family and more so yourself
//         </p>
//         <div>
//           <button className='text-black bg-gradient-to-tr from-white to-brightColor'>
//             <a href={menu} download='TevaOnTime menu'>
//               Download Menu
//             </a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React from 'react';
// import Button from '../Layout/Button'; // Assuming the path to your Button component
// import bgImage from '/Image/bg4.jpg';
// import menu from '/menu.pdf';
// import { FiDownload } from 'react-icons/fi';

// const Home = () => {
//   return (
//     <section
//       className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-center'
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className='w-full lg:w-2/3 space-y-5'>
//         <h1 className='font-semibold text-6xl text-gray-300'>
//           Enjoy a seamless, one-of-a-kind experience with us
//         </h1>
//         <p className='text-gray-300'>
//           At Teva on Time, your satisfaction is our priority. We offer exceptional
//           culinary and lodging services, perfect for quality time with loved ones
//           or for your personal enjoyment.
//         </p>
//         <div>
//           <button className=' bg-gradient-to-tr from-white to-brightColor text-black rounded-full border border-yellow-800 shadow-md hover:shadow-lg transition duration-300'>
//             <a
//               href={menu}
//               className='block py-2 px-5'
//               download='TevaOnTime_menu.pdf'
//             >
//               <FiDownload className='flex flex-col justify-self-center'/>Download Menu pdf
//             </a>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
import React from 'react';
import Button from '../Layout/Button'; 
import bgImage from '/Image/bground.jpg';
import menu from '/menu.pdf';
// import { FiDownload } from 'react-icons/fi';
import { motion as Motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

const Home = () => {
    return (
        <section
            id="home" 
            className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-center'
            style={{ backgroundImage: `url(${bgImage})`}}
        >
            <div className='w-full lg:w-2/3 space-y-5'>
                <Motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }} 
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.8
                    }}
                    className='font-bold text-6xl text-orange-500 py-2'
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
                        delay: 1.2
                    }}
                    className='text-white dark:text-gray-800 font-cursive font-bold px-3 justify-center text-2xl'
                >
                    At Teva on Time, your satisfaction is our priority. <span className='text-gray-200 text-xl'>We offer exceptional
                    culinary and lodging services,</span> perfect for quality time with loved ones
                    or for your personal enjoyment.
                </Motion.p>
                <div className=''>
                    <Motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            type: "tween",
                            stiffness: 50,
                            damping: 50,
                            delay: 1.5
                        }} className='bg-gradient-to-tr from-yellow-900 to-yellow-200 text-gray-900 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-500 dark:text-white rounded-full border  shadow-md transition duration-300 ease-in-out'
                    >
                        <a
                            href={menu}
                            className=' py-2 px-5 flex items-center gap-2' 
                            download='TevaOnTime_menu.pdf'
                        >
                            <FaFilePdf className='text-xl' /> 
                            Download Menu pdf.
                        </a>
                    </Motion.button>
                </div>
            </div>
        </section>
    );
};

export default Home;


