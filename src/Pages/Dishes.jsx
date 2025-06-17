import React from 'react';
import DishesCard from '../Layout/DishesCard';
import Meat1 from '/Image/food7.jpeg';
import Meat2 from '/Image/food6.jpeg';
import Meat3 from '/Image/food5.jpeg';
import food1 from '/Image/food1.jpg';
import food2 from '/Image/food2.jpg';
import food3 from '/Image/food3.jpg';
import food4 from '/Image/food4.jpg';
import wine1 from '/Image/wine1.jpg';
import wine2 from '/Image/wine2.jpg';
import burger1 from '/Image/food9.jpeg';
import chicken from '/Image/chicken.jpeg';
import shot from '/Image/shot.jpeg';
import mocktail from '/Image/mocktail.jpeg';
import drink3 from '/Image/drink3.jpeg';
import alcohol from '/Image/alcohol.jpg';

import { motion as Motion } from "framer-motion";

const cardVariants = {
    hidden: { y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",
        }
    }
};
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4,
        }
    }
};

const Dishes = () => {
    return (
        <section id='dishes' className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-gradient-to-tr from-white to-gray-300 text-gray-950 p-5 md:px-32 dark:bg-gradient-to-br dark:from-black dark:to-gray-700 dark:text-white duration-200'>
            <Motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ amount: 0.8 }}>
                <Motion.div variants={cardVariants}>
                    <h1 className='text-4l font-semibold text-center pt-24 pb-10'>Our Dishes</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <DishesCard img={Meat1} title="Beef Stew" price="Ksh:200" />
                        <DishesCard img={Meat2} title="Biryani" price="Ksh:400" />
                        <DishesCard img={Meat3} title="Grilled meat" price="Ksh:1,200" />
                        <DishesCard img={burger1} title="Chicken Burger" price="Ksh:155" />
                        <DishesCard img={chicken} title="Chicken" price="Ksh:460" />
                        <DishesCard img={food1} title="beef" price="Ksh:460" />
                        <DishesCard img={food2} title="cake" price="Ksh:460" />
                        <DishesCard img={food3} title="biscuit" price="Ksh:460" />
                        <DishesCard img={food4} title="natural" price="Ksh:460" />
                    </div>

                    <h2 className='text-4l font-semibold text-center pt-24 pb-10'>Our Drinks</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-8'>
                        <DishesCard img={wine1} title="Red Wine" price="Ksh:3,000" />
                        <DishesCard img={wine2} title="Champagne" price="Ksh:5,200" />
                        <DishesCard img={drink3} title="mango-juice" price="Ksh:180" />
                        <DishesCard img={shot} title="shot" price="Ksh:300" />
                        <DishesCard img={alcohol} title="beer" price="Ksh:200" />
                        <DishesCard img={mocktail} title="black-wine" price="Ksh:4,500" />

                    </div>
                </Motion.div>
            </Motion.div>
        </section>
    );
};

export default Dishes;
// import React from 'react';
// import DishesCard from '../Layout/DishesCard';
// import Meat1 from '/Image/meat1.jpg';
// import Meat2 from '/Image/meat2.jpg';
// import Meat3 from '/Image/meat3.jpg';
// import wine1 from '/Image/wine1.jpg';
// import wine2 from '/Image/wine2.jpg';
// import burger1 from '/Image/burger1.jpeg';
// import chicken from '/Image/chicken.jpeg';
// import { motion as Motion, AnimatePresence } from 'framer-motion';

// // Variants for the container of the dishes
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // Stagger the appearance of each card
//     },
//   },
// };

// // Variants for the individual dish cards
// const cardVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 }, // Add an exit variant for smooth removal
// };

// const Dishes = () => {
//   const dishesData = [
//     { img: Meat1, title: 'Beef Stew', price: 'Ksh:200' },
//     { img: Meat2, title: 'Biryani', price: 'Ksh:400' },
//     { img: Meat3, title: 'Grilled Meat', price: 'Ksh:1,200' },
//     { img: burger1, title: 'Chicken Burger', price: 'Ksh:155' },
//     { img: chicken, title: 'Chicken', price: 'Ksh:460' },
//     { img: wine1, title: 'Red Wine', price: 'Ksh:3,000' },
//     { img: wine2, title: 'Champagne', price: 'Ksh:5,200' },
//   ];

//   const foodDishes = dishesData.slice(0, 5);
//   const drinkDishes = dishesData.slice(5);

//   return (
//     <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-tr from-white to-gray-300 text-gray-950 p-5 md:px-32 dark:bg-gradient-to-tr dark:from-black dark:to-gray-700 dark:text-white duration-200">
//       <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Our Dishes</h1>
//       <Motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="flex flex-wrap gap-8 justify-center w-full"
//       >
//         <AnimatePresence>
//           {foodDishes.map((dish, index) => (
//             <Motion.div
//               key={`food-${index}`}
//               variants={cardVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit" // Use the exit variant
//               layout // Add layout prop for smoother transitions
//             >
//               <div className='flex flex-wrap gap-8 justify-center  flex-col  items-center lg:px-32 px-5 '>
//               <DishesCard img={dish.img} title={dish.title} price={dish.price} />
//               </div>
//             </Motion.div>
//           ))}
//         </AnimatePresence>
//       </Motion.div>

//       <h2 className="text-4xl font-semibold text-center pt-24 pb-10 w-full">
//         Our Drinks
//       </h2>
//       <Motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="flex flex-wrap gap-8 justify-center w-full"
//       >
//         <AnimatePresence>
//           {drinkDishes.map((dish, index) => (
//              <Motion.div
//                 key={`drink-${index}`}
//                 variants={cardVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 layout
//               >
//             <DishesCard img={dish.img} title={dish.title} price={dish.price} />
//             </Motion.div>
//           ))}
//         </AnimatePresence>
//       </Motion.div>
//     </div>
//   );
// };

// export default Dishes;
