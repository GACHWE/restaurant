// import React from 'react'
// import { BsStarFill, BsStarHalf } from 'react-icons/bs'
// import Button from './Button'

// const DishesCard = (props) => {
//   return (
//     <div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg'>
//       <img className='rounded-xl' src={props.img} alt=''/>
//       <div className='space-y-4'>
//         <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
//         <div className='flex flex-row justify-center'>
//             <BsStarFill className='text-brightColor'/>
//             <BsStarFill className='text-brightColor'/>
//             <BsStarFill className='text-brightColor'/>
//             <BsStarFill className='text-brightColor'/>
//             <BsStarHalf className='text-brightColor'/>

//         </div>
//         <div className='flex flex-row items-center justify-center gap-4'>
//             <h3 className='font-semibold text-lg'>{props.price}</h3>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DishesCard


// DishesCard.jsx
import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom'; // Import Link

const DishesCard = (props) => {
  // Create a URL-friendly ID from the title
  const dishId = props.title.toLowerCase().replace(/ /g, '-');

  return (
    
    <Link to={`/dish/${dishId}`} className=' p-5 hover:scale-110 hover:bg-gradient-to-br from-gray-300 to-gray-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer'>
      <div >
      <img className='rounded-xl justify-center' src={props.img} alt={props.title} />
      <div className='space-y-4'>
        <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
        <div className='flex flex-row justify-center'>
          <BsStarFill className='text-brightColor' />
          <BsStarFill className='text-brightColor' />
          <BsStarFill className='text-brightColor' />
          <BsStarFill className='text-brightColor' />
          <BsStarHalf className='text-brightColor' />
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
          <h3 className='font-semibold text-lg text-green-500'>{props.price}</h3>
        </div>
      </div>
      </div>
    </Link>
  );
};

export default DishesCard;