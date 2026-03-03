
import React, { useEffect, useRef, useState } from 'react';
import HomeSection from './Home';
import DishesSection from './Dishes';
import AboutSection from './About';
import ReviewsSection from './Reviews';
import woodbg from "/Image/woodbg2.jpg";


const MainPage = ({ onSectionChange }) => {
  const homeRef = useRef(null);
  const dishesRef = useRef(null);
  const aboutRef = useRef(null);
  const reviewsRef = useRef(null);
  const [currentActiveSection, setCurrentActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const homeTop = homeRef.current ? homeRef.current.offsetTop : 0;
      const dishesTop = dishesRef.current ? dishesRef.current.offsetTop : 0;
      const aboutTop = aboutRef.current ? aboutRef.current.offsetTop : 0;
      const reviewsTop = reviewsRef.current ? reviewsRef.current.offsetTop : 0;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 3;

      let newActiveSection = currentActiveSection;

      if (scrollY >= homeTop && scrollY < dishesTop - offset) {
        newActiveSection = 'home';
      } else if (scrollY >= dishesTop - offset && scrollY < aboutTop - offset) {
        newActiveSection = 'dishes';
      } else if (scrollY >= aboutTop - offset && scrollY < reviewsTop - offset) {
        newActiveSection = 'about';
      } else if (scrollY >= reviewsTop - offset) {
        newActiveSection = 'reviews';
      }

      if (newActiveSection !== currentActiveSection) {
        setCurrentActiveSection(newActiveSection);
        onSectionChange(newActiveSection); // Notify the App about the active section
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onSectionChange, currentActiveSection]); // Added currentActiveSection to dependencies

  return (
    <main       style={{ backgroundImage: `url(${woodbg})` }}>
    
      <div ref={homeRef} id='home'><HomeSection /></div>
      <div ref={dishesRef} id='dishes'><DishesSection /></div>
      <div ref={aboutRef} id='about'><AboutSection /></div>
      <div ref={reviewsRef} id='reviews'><ReviewsSection /></div>
    </main>
  );
};

export default MainPage;