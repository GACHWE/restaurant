export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        brightColor: "#F4511F" ,
        backgroundColor: "b7bca9",
        lightText: "#959595",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        }
      }
    },
  },
  plugins: [],
};