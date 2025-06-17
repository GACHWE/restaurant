// // DishDetails.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const DishDetails = () => {
//   const { dishId } = useParams();

//   // You'll need to fetch the details of the dish based on the dishId.
//   // This could involve making an API call or looking up data in a local array.
//   const dishDetails = {
//     'beef-stew': {
//       title: 'Beef Stew',
//       description: 'A hearty and flavorful stew made with tender beef pieces, vegetables, and a rich gravy. Perfect for a comforting meal.',
//       price: 'Ksh:200',
//       image: '/Image/meat1.jpg', // Ensure the path is correct
//       ingredients: ['Beef', 'Potatoes', 'Carrots', 'Onions', 'Broth', 'Herbs'],
//     },
//     'biryani': {
//       title: 'Biryani',
//       description: 'A fragrant mixed rice dish with your choice of meat (or vegetables), spices, and yogurt. A truly aromatic and satisfying dish.',
//       price: 'Ksh:400',
//       image: '/Image/meat2.jpg', // Ensure the path is correct
//       ingredients: ['Rice', 'Meat/Vegetables', 'Yogurt', 'Onions', 'Ginger', 'Garlic', 'Spices'],
//     },
//     'grilled-meat': {
//       title: 'Grilled Meat',
//       description: 'Succulent pieces of meat grilled to perfection, offering a smoky and delicious flavor. Served with your choice of sides.',
//       price: 'Ksh:1,200',
//       image: '/Image/meat3.jpg', // Ensure the path is correct
//       ingredients: ['Meat', 'Marinade', 'Spices'],
//     },
//     'chicken-burger': {
//       title: 'Chicken Burger',
//       description: 'A juicy grilled or fried chicken patty served in a bun with fresh lettuce, tomatoes, and your favorite sauces.',
//       price: 'Ksh:155',
//       image: '/Image/burger1.jpeg', // Ensure the path is correct
//       ingredients: ['Chicken Patty', 'Bun', 'Lettuce', 'Tomato', 'Sauce'],
//     },
//     'chicken': {
//       title: 'Chicken',
//       description: 'Deliciously prepared chicken, roasted, fried, or grilled to your preference. A classic and satisfying choice.',
//       price: 'Ksh:460',
//       image: '/Image/chicken.jpeg', // Ensure the path is correct
//       ingredients: ['Chicken', 'Spices', 'Herbs'],
//     },
//     'red-wine': {
//       title: 'Red Wine',
//       description: 'A classic red wine with rich flavors and aromas. Perfect to pair with your meal or enjoy on its own.',
//       price: 'Ksh:3,000',
//       image: '/Image/wine1.jpg', // Ensure the path is correct
//       ingredients: ['Red Grapes'],
//     },
//     'champagne': {
//       title: 'Champagne',
//       description: 'A sparkling wine known for its elegance and celebratory feel. Ideal for special occasions or a touch of luxury.',
//       price: 'Ksh:5,200',
//       image: '/Image/wine2.jpg', // Ensure the path is correct
//       ingredients: ['Grapes'],
//     },
//     // Add descriptions for other dishes/drinks as needed
//   };

//   const dish = dishDetails[dishId];

//   if (!dish) {
//     return <div>Dish not found</div>;
//   }

//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-white to-gray-300 text-gray-950 p-5 dark:bg-gradient-to-tr dark:from-black dark:to-gray-600 dark:text-white duration-200'>
//       <img className='rounded-xl shadow-md mb-6 ' src={dish.image} alt={dish.title} style={{ maxWidth: '400px', maxHeight: '400px', objectFit: 'cover' }} />
//       <h2 className='text-3xl font-semibold mb-4'>{dish.title}</h2>
//       <p className='text-lg mb-4'>{dish.description}</p>
//       <h3 className='text-xl font-semibold'>Price: {dish.price}</h3>
//       {dish.ingredients && (
//         <div className='mt-4'>
//           <h4 className='text-lg font-semibold'>Ingredients:</h4>
//           <ul>
//             {dish.ingredients.map((ingredient, index) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <button onClick={() => window.history.back()} className='mt-8 bg-brightColor text-white py-2 px-6 rounded-md hover:bg-brightColor-dark transition-colors'>
//         Back to Menu
//       </button>
//     </div>
//   );
// };

// export default DishDetails;

// import React from 'react';
// import { useParams } from 'react-router-dom';

// const DishDetails = () => {
//   const { dishId } = useParams();

//   const dishDetails = {
//     'beef-stew': {
//       title: 'Beef Stew',
//       description: 'A hearty and flavorful stew made with tender beef pieces, vegetables, and a rich gravy. Perfect for a comforting meal.',
//       price: 'Ksh:200',
//       image: '/Image/meat1.jpg',
//       ingredients: ['Beef', 'Potatoes', 'Carrots', 'Onions', 'Broth', 'Herbs'],
//     },
//     'biryani': {
//       title: 'Biryani',
//       description: 'A fragrant mixed rice dish with your choice of meat (or vegetables), spices, and yogurt. A truly aromatic and satisfying dish.',
//       price: 'Ksh:400',
//       image: '/Image/meat2.jpg',
//       ingredients: ['Rice', 'Meat/Vegetables', 'Yogurt', 'Onions', 'Ginger', 'Garlic', 'Spices'],
//     },
//     'grilled-meat': {
//       title: 'Grilled Meat',
//       description: 'Succulent pieces of meat grilled to perfection, offering a smoky and delicious flavor. Served with your choice of sides.',
//       price: 'Ksh:1,200',
//       image: '/Image/meat3.jpg',
//       ingredients: ['Meat', 'Marinade', 'Spices'],
//     },
//     'chicken-burger': {
//       title: 'Chicken Burger',
//       description: 'A juicy grilled or fried chicken patty served in a bun with fresh lettuce, tomatoes, and your favorite sauces.',
//       price: 'Ksh:155',
//       image: '/Image/burger1.jpeg',
//       ingredients: ['Chicken Patty', 'Bun', 'Lettuce', 'Tomato', 'Sauce'],
//     },
//     'chicken': {
//       title: 'Chicken',
//       description: 'Deliciously prepared chicken, roasted, fried, or grilled to your preference. A classic and satisfying choice.',
//       price: 'Ksh:460',
//       image: '/Image/chicken.jpeg',
//       ingredients: ['Chicken', 'Spices', 'Herbs'],
//     },
//     'red-wine': {
//       title: 'Red Wine',
//       description: 'A classic red wine with rich flavors and aromas. Perfect to pair with your meal or enjoy on its own.',
//       price: 'Ksh:3,000',
//       image: '/Image/wine1.jpg',
//       ingredients: ['Red Grapes'],
//     },
//     'champagne': {
//       title: 'Champagne',
//       description: 'A sparkling wine known for its elegance and celebratory feel. Ideal for special occasions or a touch of luxury.',
//       price: 'Ksh:5,200',
//       image: '/Image/wine2.jpg',
//       ingredients: ['Grapes'],
//     },
//   };

//   const dish = dishDetails[dishId];

//   if (!dish) {
//     return <div>Dish not found</div>;
//   }

//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-white to-gray-200 text-gray-900 p-6 md:px-16 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 duration-200'>
//       <div className='bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-lg w-full'>
//         <img
//           className='rounded-xl shadow-md mb-8 w-full object-cover aspect-square'
//           src={dish.image}
//           alt={dish.title}
//         />
//         <h2 className='text-3xl font-bold text-center mb-4 text-brightColor dark:text-brightColor-light'>{dish.title}</h2>
//         <p className='text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed'>{dish.description}</p>
//         <h3 className='text-xl font-semibold mb-2 text-green-600 dark:text-green-400'>Price: {dish.price}</h3>
//         {dish.ingredients && (
//           <div className='mt-4'>
//             <h4 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>Ingredients:</h4>
//             <ul className='list-disc list-inside text-gray-600 dark:text-gray-400'>
//               {dish.ingredients.map((ingredient, index) => (
//                 <li key={index} className='mb-1'>{ingredient}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         <button
//           onClick={() => window.history.back()}
//           className='mt-8 bg-brightColor hover:bg-brightColor-dark text-white py-3 px-8 rounded-full font-semibold transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brightColor-light focus:ring-offset-2'
//         >
//           Back to Menu
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DishDetails;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const DishDetails = () => {
  const { dishId } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dishDetails = {
    "beef-stew": {
      title: "Beef Stew",
      description:
        "Tender pieces of beef simmered slowly with hearty vegetables like potatoes and carrots in a rich, savory gravy. A comforting and deeply flavorful classic.",
      price: "Ksh:200",
      image: "/Image/food7.jpeg",
      ingredients: ["Beef", "Potatoes", "Carrots", "Onions", "Beef Broth", "Herbs"],
    },
    biryani: {
      title: "Biryani",
      description:
        "An aromatic and flavorful mixed rice dish layered with your choice of marinated meat (or vegetables), fragrant spices, and yogurt. A truly satisfying culinary experience.",
      price: "Ksh:400",
      image: "/Image/food6.jpeg",
      ingredients: [
        "Basmati Rice",
        "Chicken, Mutton, or Vegetables",
        "Yogurt",
        "Caramelized Onions",
        "Ginger-Garlic Paste",
        "Saffron",
        "Aromatic Spices",
      ],
    },
    "grilled-meat": {
      title: "Grilled Meat",
      description:
        "Succulent cuts of meat, expertly grilled to achieve a smoky char and juicy interior. Served with your choice of delectable sides.",
      price: "Ksh:1,200",
      image: "/Image/food5.jpeg",
      ingredients: ["Prime Cut of Meat", "Marinade (various options)", "Spices"],
    },
    "chicken-burger": {
      title: "Chicken Burger",
      description:
        "A juicy grilled or crispy fried chicken patty nestled in a soft bun, accompanied by fresh lettuce, ripe tomatoes, and your preferred sauces for a delightful bite.",
      price: "Ksh:155",
      image: "/Image/food9.jpeg",
      ingredients: ["Chicken Patty (grilled or fried)", "Sesame Bun", "Lettuce", "Tomato", "Mayonnaise, Ketchup, or other sauces"],
    },
    chicken: {
      title: "Chicken",
      description:
        "Deliciously prepared chicken, whether roasted to golden perfection, crispy fried, or expertly grilled. A versatile and always satisfying choice.",
      price: "Ksh:460",
      image: "/Image/chicken.jpeg",
      ingredients: ["Chicken (whole or pieces)", "Seasoning Blend", "Herbs"],
    },
    cake: {
      title: "Cake",
      description:
        "A delightful sweet baked dessert, often featuring moist layers of sponge and creamy frosting. Perfect for celebrations or a sweet treat.",
      price: "Ksh:300",
      image: "/Image/food2.jpg",
      ingredients: ["Flour", "Sugar", "Eggs", "Butter or Oil", "Milk or Liquid", "Frosting (various flavors)"],
    },
    biscuit: {
      title: "Biscuit",
      description:
        "A small, often crisp and sometimes crumbly baked good, ideal for a light snack with tea, coffee, or enjoyed on its own.",
      price: "Ksh:50",
      image: "/Image/food3.jpg",
      ingredients: ["Flour", "Butter or Shortening", "Sugar", "Baking Powder", "Milk (optional)"],
    },
    natural: {
      title: "Fruit Salad",
      description:
        "A vibrant and refreshing medley of the freshest seasonal fruits. A healthy and naturally sweet option, with an optional drizzle of honey.",
      price: "Ksh:250",
      image: "/Image/food4.jpg",
      ingredients: ["Assorted Fresh Fruits (e.g., Mango, Pineapple, Watermelon)", "Optional: Honey or Lime"],
    },
    beef: {
      title: "Beef Roast",
      description:
        "Tender and flavorful roast beef, cooked to your preferred level of doneness. Often served with roasted vegetables and a savory gravy.",
      price: "Ksh:800",
      image: "/Image/food1.jpg",
      ingredients: ["Beef Joint", "Rosemary", "Garlic", "Assorted Vegetables (e.g., Potatoes, Carrots)"],
    },
    "red-wine": {
      title: "Red Wine",
      description:
        "A sophisticated red wine boasting rich flavors and complex aromas, ranging from fruity to earthy notes. An excellent accompaniment to many dishes or enjoyable on its own.",
      price: "Ksh:3,000",
      image: "/Image/wine1.jpg",
      ingredients: ["Red Grapes (various varietals)"],
    },
    champagne: {
      title: "Champagne",
      description:
        "An elegant and celebratory sparkling wine renowned for its fine bubbles and crisp, often fruity, character. Perfect for toasting special moments or adding a touch of luxury.",
      price: "Ksh:5,200",
      image: "/Image/wine2.jpg",
      ingredients: ["Grapes (typically Chardonnay, Pinot Noir, Pinot Meunier)"],
    },
    "mango-juice": {
      title: "Fresh Mango Juice",
      description:
        "A naturally sweet and refreshing juice made from ripe, juicy mangoes. A taste of the tropics in a glass.", // Improved description
      price: "Ksh:180",
      image: "/Image/drink3.jpeg",
      ingredients: ["Ripe Mangoes"],
    },
    shot: {
      title: "Spirit Shot",
      description:
        "A single serving of a distilled alcoholic beverage, meant to be consumed quickly. Options may vary.", // Improved description
      price: "Ksh:300",
      image: "/Image/shot.jpeg",
      ingredients: ["Various Spirits (e.g., Vodka, Whiskey, Tequila)"],
    },
    beer: {
      title: "Beer",
      description:
        "A chilled and refreshing brewed alcoholic beverage, available in various styles from light lagers to rich ales. Perfect for unwinding.",
      price: "Ksh:250",
      image: "/Image/alcohol.jpg",
      ingredients: ["Water", "Malted Barley", "Hops", "Yeast"],
    },
    "black-wine": {
      title: "Dark Red Wine",
      description:
        "A bold red wine with a deep color and intense flavors, often featuring notes of dark fruits and spices. Pairs well with rich, hearty dishes.",
      price: "Ksh:4,500", //
      image: "/Image/mocktail.jpeg",
      ingredients: ["Dark Red Grapes (e.g., Cabernet Sauvignon, Syrah)"],
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundDish = dishDetails[dishId];
    if (foundDish) {
      setDish(foundDish);
      setLoading(false);
    } else {
      setError("Dish not found");
      setLoading(false);
    }
  }, [dishId]);

  if (loading) {
    return <div>Loading dish details...</div>;
  }

  if (error) {
    return <div>Error 404: {error}</div>;
  }

  if (!dish) {
    return <div>Dish not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-white to-gray-200 text-gray-900 p-6 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 duration-200 pt-20">
      <div className="bg-gradient from-white to-slate-300 dark:bg-gray-900 rounded-xl shadow-lg p-8 max-w-2xl w-full flex flex-col md:flex-row gap-8">
        {/* Image on the Left */}
        <Motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8
          }} className="md:w-1/2">
          <img
            className="rounded-xl shadow-md w-full h-auto object-cover"
            src={dish.image}
            alt={dish.title}
            style={{ maxHeight: "400px" }}
          />
        </Motion.div>

        {/* Details on the Right */}
        <Motion.div initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1
          }} className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-brightColor dark:text-brightColor-light">
              {dish.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              {dish.description}
            </p>
            <Motion.h3 initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4
              }} className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">
              Price: {dish.price.startsWith("Ksh:") ? dish.price : `Ksh:${dish.price}`}
            </Motion.h3>
            {dish.ingredients && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Ingredients:
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {dish.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-1">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Back Button at the bottom of the right side */}
          <button
            onClick={() => navigate(-1)}
            className="mt-8 bg-brightColor hover:bg-brightColor-dark text-white py-3 px-8 rounded-full font-semibold transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brightColor-light focus:ring-offset-2 self-start md:self-end"
          >
            Back to Menu
          </button>
        </Motion.div>
      </div>
    </div>
  );
};

export default DishDetails;