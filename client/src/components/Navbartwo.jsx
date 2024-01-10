import React, { useEffect } from "react";

const Navbartwo = () => {

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a');
    const animationDiv = document.getElementById('animation-div');

    navLinks.forEach(link => {
      link.addEventListener('mouseover', (event) => {
        animationDiv.style.width = event.target.offsetWidth + 'px';
        animationDiv.style.left = event.target.offsetLeft + 'px';

        // Example of changing color based on the hovered link
        switch (event.target.textContent) {
          case 'Home':
            animationDiv.style.backgroundColor = '#1abc9c';
            break;
          case 'About':
            animationDiv.style.backgroundColor = '#e74c3c';
            break;
          case 'Blog':
            animationDiv.style.backgroundColor = '#3498db';
            break;
          case 'Portfolio':
            animationDiv.style.backgroundColor = '#9b59b6';
            break;
          case 'Contact':
            animationDiv.style.backgroundColor = '#e67e22';
            break;
          default:
            animationDiv.style.backgroundColor = 'transparent';
            break;
        }
      });
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('mouseover', null);
      });
    };
  }, []);

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
   

      <nav className="bg-[#34495e] rounded-lg w-96 h-12 flex items-center justify-around relative">
        <a href="#" className="text-white uppercase text-center z-10">Home</a>
        <a href="#" className="text-white uppercase text-center z-10">About</a>
        <a href="#" className="text-white uppercase text-center z-10">Blog</a>
        <a href="#" className="text-white uppercase text-center z-10">Portfolio</a>
        <a href="#" className="text-white uppercase text-center z-10">Contact</a>
        <div className="absolute top-0 h-full transition-all ease-in-out duration-500 rounded-lg z-0" id="animation-div"></div>
      </nav>

      
    </div>
  );
};

export default Navbartwo;
