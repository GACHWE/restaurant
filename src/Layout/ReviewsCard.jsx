// // import React from 'react'

// // const ReviewsCard = (props) => {
// //   return (
// //     <div className='w-full md:w-2/3 bg-white dark:bg-gray-800 border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
// //         <div className='text-lightText dark:text-white'>
// //             <p>{props.testimonial}</p>
// //         </div>
// //         <div className='flex flex-row justify-center items-center mt-4 gap-4'>
// //             <img className='rounded-full w-1/4' src={props.img} alt='' />
// //             <h3 className='font-semibold'>{props.name}</h3>
// //         </div>
// //     </div>
// //   )
// // }

// // export default ReviewsCard
// import React from 'react';
// import { FaUser, FaQuoteRight } from 'react-icons/fa'; // Import FaQuoteRight
// import { RiDoubleQuotesR } from 'react-icons/ri';
// const ReviewsCard = (props) => {
//   return (
//     <div className='relative w-full md:w-2/3 bg-white dark:bg-gray-800 border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
//       <div className='text-lightText dark:text-white'>
//         <p className='mb-8'>{props.testimonial}</p> {/* Add some bottom margin for the quote */}
//       </div>
//       <div className='flex flex-row justify-center items-center mt-4 gap-4'>
//         {props.img ? (
//           <img className='rounded-full w-1/4' src={props.img} alt={props.name || 'User Avatar'} />
//         ) : (
//           <FaUser className='rounded-full w-1/4 text-3xl text-gray-400 dark:text-gray-500' />
//         )}
//         <h3 className='font-semibold'>{props.name}</h3>
//       </div>
//       <RiDoubleQuotesR className='absolute top-3 right-2 text-gray-400 dark:text-gray-500 text-4xl opacity-15 font-thin'/>
//     </div>
//   );
// };

// export default ReviewsCard;

import React from 'react';
import { FaUser } from 'react-icons/fa';
import { RiDoubleQuotesR } from 'react-icons/ri';

const ReviewsCard = (props) => {
  return (
    <div className='relative w-full md:w-2/3 backdrop-brightness-75 border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <div className='text-white'>
        <p className='mb-8'>{props.testimonial}</p>
      </div>
      <div className='flex flex-row justify-center items-center mt-4 gap-4'>
        {props.img ? (
          <img className='rounded-full w-1/4 object-cover aspect-square' src={props.img} alt={props.name || 'User Avatar'} />
        ) : (
          <FaUser className='rounded-full w-1/4 text-9xl text-gray-400 dark:text-gray-500' />
        )}
        <h3 className='font-semibold'>{props.name}</h3>
      </div>
      <RiDoubleQuotesR className='absolute top-3 right-2  text-4xl opacity-75 font-thin' />
    </div>
  );
};

export default ReviewsCard;