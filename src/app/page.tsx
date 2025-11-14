'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [isBlurbOpen, setIsBlurbOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isSoftwareBlurbOpen, setIsSoftwareBlurbOpen] = useState(false);

  useEffect(() => {
    if (!windowWidth) {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

  }, []);

  /**
   * @description renders blurb about Manila. Presence also turns on canvas feature
   * @returns {JSX} - blurb component
   */
  const renderBlurb = () => {
    
    return (
      <div className="blurb animate-pulse">
        <p className="blurb-text">I do NOT live in Manila. But I miss the Philippines so much that this is more of a manifestation :)</p>
      </div>
    )
  }

  /**
   * @description renders blurb about software blurb. 
   * @returns {JSX} - blurb component
   */
  const renderSoftwareBlurb = () => {
    return (
      <div className="blurb">
        <p className="blurb-text">something cool will happen if you click this... one day</p>
      </div>
    )
  }

  return (
    <div className="left-main-text">
      I’m a <span className="text-primary hover:cursor-pointer hover:font-semibold">software engineer!</span> and <span className="text-primary hover:cursor-pointer hover:font-semibold">artist!</span> based in Boston, Massachusetts and <span 
        className="highlight" 
        onMouseOver={() => {
          if (windowWidth < 768) return;
          setIsBlurbOpen(true);
        }}
        onMouseOut={() => {
          if (windowWidth < 768) return;
          setIsBlurbOpen(false)
        }}
        onClick={() => {
          const isOpen = isBlurbOpen;
          setIsBlurbOpen(!isOpen);
        }}
      >Manila, Philippines</span>.
      {isBlurbOpen && renderBlurb()}
      {isSoftwareBlurbOpen && renderSoftwareBlurb()}
    </div>
  );
}
