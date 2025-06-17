// // // import React from 'react'
// // // import { FaMoon } from "react-icons/fa6";
// // // import { FiSun } from "react-icons/fi";

// // // const DarkMode = () => {
// // //     const [theme, setTheme] = React.useState
// // //     (localStorage.getItem("theme")?
// // // localStorage.getItem("theme"): "light");

// // // const element = document.documentElement;

// // // React.useEffect(() => {
// // //     if (theme === "dark"{
// // //         element.classsList.add("dark");
// // //         localStorage.setItem("theme", "dark");
// // //     } else {
// // //         element.classList.remove("dark");
// // //         localStorage.setItem("theme", "light");
// // //     }
// // //     },[theme]
// // //     );

// // //     const changeTheme =() => {
// // //         if (theme === "light") {
// // //             setTheme("dark");
// // //         } else {
// // //             setTheme("light");
// // //         }
// // //     };
// // //   return (
// // //     <>
// // //      <div className='relative'>
// // //      <FaMoon
// // //      Icon
// // //      onClick={changeTheme}
// // //      className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
// // //        theme === "dark" ? "opacity-0" : "opacity-100"
// // //      }`}
// // //    />
// // //    <FiSun  onClick={changeTheme} className="w-12 absolute right-0 z-10  cursor-pointer drop-shadow-
// // //    [1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"/>  

// // //      </div>
// // //     </>
// // //   )
// // // }

// // // export default DarkMode
// // import React from 'react';
// // import { FaMoon } from 'react-icons/fa6';
// // import { FiSun } from 'react-icons/fi';

// // const DarkMode = () => {
// //   const [theme, setTheme] = React.useState(
// //     localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
// //   );

// //   const element = document.documentElement;

// //   React.useEffect(() => {
// //     if (theme === 'dark') {
// //       element.classList.add('dark');
// //       localStorage.setItem('theme', 'dark');
// //     } else {
// //       element.classList.remove('dark');
// //       localStorage.setItem('theme', 'light');
// //     }
// //   }, [theme]);

// //   const changeTheme = () => {
// //     setTheme(theme === 'light' ? 'dark' : 'light');
// //   };

// //   return (
// //     <div className="relative">
// //       <FaMoon
// //         onClick={changeTheme}
// //         className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
// //           theme === 'dark' ? 'opacity-0' : 'opacity-100'
// //         }`}
// //       />
// //       <FiSun
// //         onClick={changeTheme}
// //         className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
// //           theme === 'light' ? 'opacity-0' : 'opacity-100'
// //         }`}
// //       />
// //     </div>
// //   );
// // };

// // export default DarkMode;
// import React, { useState, useEffect } from 'react';
// import { Moon, Sun } from 'lucide-react'; // Import icons

// const DarkMode = () => {
//   const [theme, setTheme] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('theme') || 'light';
//     }
//     return 'light'; // Default theme
//   });

//   useEffect(() => {
//     if (typeof window !== 'undefined'){
//         const element = document.documentElement;
//         if (theme === 'dark') {
//           element.classList.add('dark');
//           localStorage.setItem('theme', 'dark');
//         } else {
//           element.classList.remove('dark');
//           localStorage.setItem('theme', 'light');
//         }
//     }
//   }, [theme]);

//   const changeTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <div className='relative'>
//       {theme === 'light' ? (
//         <Moon
//           onClick={changeTheme}
//           className='w-8 h-8  cursor-pointer transition-all duration-300'
          
//         />
//       ) : (
//         <Sun
//           onClick={changeTheme}
//           className='w-8 h-8  cursor-pointer transition-all duration-300'
          
//         />
//       )}
//     </div>
//   );
// };

// export default DarkMode;
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react'; // Import icons

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light'; // Default theme
  });

  useEffect(() => {
    if (typeof window !== 'undefined'){
        const element = document.documentElement;
        if (theme === 'dark') {
          element.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          element.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='relative'>
      {theme === 'light' ? (
        <Moon
          onClick={changeTheme}
          className='w-8 h-6 text-black cursor-pointer transition-all duration-300'
        />
      ) : (
        <Sun
          onClick={changeTheme}
          className='w-8 h-8 text-yellow-400 cursor-pointer transition-all duration-300'
        />
      )}
    </div>
  );
};

export default DarkMode;
