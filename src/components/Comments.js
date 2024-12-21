import React, { useState } from 'react';

// Resimleri import ediyoruz
import image1 from '../assets/Comment-1.png';
import image2 from '../assets/Comment-2.png';
import image3 from '../assets/Comment-3.png';
import image4 from '../assets/Comment-4.png';

const Comment = () => {
  const images = [image1, image2, image3, image4];  // Kartlar
  const [currentIndex, setCurrentIndex] = useState(0);  // Mevcut kartın indeksi
  const [swipedDirection, setSwipedDirection] = useState(null);  // Kaydırma yönü: sağ veya sol

  // Kart kaydırıldığında yapılacak işlem
  const handleSwipe = (direction) => {
    setSwipedDirection(direction);  // Kaydırma yönünü belirle

    // 300ms sonra kartı değiştireceğiz
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  // Kart sırasını değiştir
      setSwipedDirection(null);  // Kaydırma animasyonunu sıfırla
    }, 300); // Animasyon süresi (CSS ile uyumlu)
  };

  return (
    <div className="comment-container">
      <div className="comment-slider">
        <div
          className={`comment-card ${swipedDirection ? swipedDirection : ''}`}
          onClick={() => handleSwipe('swipe-left')}
        >
          <img src={images[currentIndex]} alt="card" className="comment-image" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
