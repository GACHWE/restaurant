// import React, { useState, useCallback } from 'react';
// import ReviewsCard from '../Layout/ReviewsCard';
// import Meat3 from '/Image/meat3.jpg';
// import Mary from '/Image/lady.jpeg';
// import Arnold from '/Image/man.jpeg';
// import Maryy from '/Image/Maryy.jpg';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const Reviews = () => {
//   const reviewsData = [
//     { img: Meat3, name: "Samuel Gachwe", testimonial: "Great services. Kudos" },
//     { img: Mary, name: "Jane Doe", testimonial: "It is one of a kind especially the lodging and spa" },
//     { img: Maryy, name: "Mary Wanjiru", testimonial: "A truly exceptional experience!" },
//     { img: Arnold, name: "John Smith", testimonial: "Highly recommended. Excellent food and service." },
//     { name: "Dan", testimonial: "Fantastic atmosphere and friendly staff." },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false); // Add state for hover detection

//   const goToPrevious = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1));
//   }, [reviewsData.length]);

//   const goToNext = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1));
//   }, [reviewsData.length]);


//   return (  
// //     rounded-tl-lg: This class adds a large border radius to the top-left corner of the element.
// // rounded-br-lg: This class adds a large border radius to the bottom-right corner of the element.
//     <div id='reviews' className='min-h-screen flex flex-col items-center justify-center md:px-32 bg-gradient-to-tr from-white to-gray-300 text-gray-950 p-5 dark:bg-gradient-to-tr dark:from-black dark:to-gray-700 dark:text-white duration-200'>
//       <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>

//       <div
//         className='relative w-full flex flex-col items-center justify-center mt-5'
//         onMouseEnter={() => setIsHovering(true)} // Set isHovering to true on mouse enter
//         onMouseLeave={() => setIsHovering(false)} // Set isHovering to false on mouse leave
//       >
//         <ReviewsCard {...reviewsData[currentIndex]} />

//         {reviewsData.length > 1 && isHovering && ( // Only show buttons if hovering
//           <div className='absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 md:px-16'>
//             <button onClick={goToPrevious} className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600'>
//               <FaChevronLeft size={20} />
//             </button>
//             <button onClick={goToNext} className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600'>
//               <FaChevronRight size={20} />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Reviews;


// import React, { useState, useEffect } from 'react';
// import ReviewsCard from '../Layout/ReviewsCard';
// import Meat3 from '/Image/meat3.jpg';
// import Mary from '/Image/lady.jpeg';
// import Arnold from '/Image/man.jpeg';
// import Maryy from '/Image/Maryy.jpg';

// const Reviews = () => {
//   const reviewsData = [
//     { img: Meat3, name: "Samuel Gachwe", testimonial: "Great services. Kudos" },
//     { img: Mary, name: "Jane Doe", testimonial: "It is one of a kind especially the lodging and spa" },
//     { img: Maryy, name: "Mary Wanjiru", testimonial: "A truly exceptional experience!" },
//     { img: Arnold, name: "John Smith", testimonial: "Highly recommended. Excellent food and service." },
//     { name: "Dan", testimonial: "Fantastic atmosphere and friendly staff." },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(intervalId); // Clear interval on unmount
//   }, [reviewsData.length]);

//   return (
//     <div id='reviews' className='min-h-screen flex flex-col items-center justify-center md:px-32 bg-gradient-to-tr from-white to-gray-300 text-gray-950 p-5 dark:bg-gradient-to-tr dark:from-black dark:to-gray-700 dark:text-white duration-200'>
//       <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>
//       <div className='w-full flex flex-col items-center justify-center mt-5'>
//         <ReviewsCard {...reviewsData[currentIndex]} />
//       </div>
//     </div>
//   );
// };

// export default Reviews;


import React, { useState, useEffect, useCallback } from 'react';
import ReviewsCard from '../Layout/ReviewsCard';
import Meat3 from '/Image/meat3.jpg';
import Mary from '/Image/lady.jpeg';
import Arnold from '/Image/man.jpeg';
import Maryy from '/Image/Maryy.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews = () => {
  const reviewsData = [
    { img: Meat3, name: "Samuel Gachwe", testimonial: "Great services. Kudos" },
    { img: Mary, name: "Jane Doe", testimonial: "It is one of a kind especially the lodging and spa" },
    { img: Maryy, name: "Mary Wanjiru", testimonial: "A truly exceptional experience!" },
    { img: Arnold, name: "John Smith", testimonial: "Highly recommended. Excellent food and service." },
    { name: "Dan", testimonial: "Fantastic atmosphere and friendly staff." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false); // Add state for hover detection

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1));
  }, [reviewsData.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1));
  }, [reviewsData.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [reviewsData.length]);


  return (
    <section id='reviews' className='min-h-screen flex flex-col items-center justify-center md:px-32 text-white duration-200'>
      <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>

      <div
        className='relative w-full flex flex-col items-center justify-center mt-5'
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
      >
        <ReviewsCard {...reviewsData[currentIndex]} />

        {reviewsData.length > 1 && isHovering && ( 
          <div className='absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 md:px-16'>
            <button onClick={goToPrevious} className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600'>
              <FaChevronLeft size={20} />
            </button>
            <button onClick={goToNext} className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600'>
              <FaChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
