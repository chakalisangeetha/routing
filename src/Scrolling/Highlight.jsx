import React, { useState, useEffect } from 'react'
import './Scroll.css'

const Highlight = () => {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const direction = window.scrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="content">
      <p>Scroll this content to see the effect!</p>
      <p className={`scroll-text ${scrollDirection === 'up' ? 'highlight' : 'lowlight'}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium.
      </p>
      <p className={`scroll-text ${scrollDirection === 'up' ? 'highlight' : 'lowlight'}`}>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className={`scroll-text ${scrollDirection === 'up' ? 'highlight' : 'lowlight'}`}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className={`scroll-text ${scrollDirection === 'up' ? 'highlight' : 'lowlight'}`}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p className={`scroll-text ${scrollDirection === 'up' ? 'highlight' : 'lowlight'}`}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

export default Highlight;
