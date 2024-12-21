import React, { useState, useEffect } from 'react';
import bannerimg from '../assets/bannerimg.jpg';

const AnimatedText = ({ texts, typingSpeed, erasingSpeed, delayBetweenTexts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedText !== texts[currentIndex]) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => texts[currentIndex].slice(0, prev.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, erasingSpeed);
    } else if (!isDeleting && displayedText === texts[currentIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, texts, currentIndex, typingSpeed, erasingSpeed, delayBetweenTexts]);

  return <h1 className="animated-text">{displayedText}</h1>;
};

const Banner = () => {
  const texts = [
    'Designing',
    'Planning',
    'Dreaming',
    'Editing',
  ];

  return (
    <section className="banner" id="Home">
      <div className="banner-background">
        <img src={bannerimg} alt="Banner" />
      </div>
      <div className="banner-content">
        <div className="banner-text-slide">
          <AnimatedText 
            texts={texts} 
            typingSpeed={100} 
            erasingSpeed={50} 
            delayBetweenTexts={1000} 
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
