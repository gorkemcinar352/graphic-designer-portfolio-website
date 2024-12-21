import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import Brooklyn from '../assets/works-1.jpg';
import Macao from '../assets/works-2.jpg';
import Navada from '../assets/works-1.jpg';

function CarouselGames() {
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <Splide
                    options={{
                        type: "loop",
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: 0.4
                        },
                        arrows: false,
                        pagination: false,
                        fixedWidth: '417px',
                        gap: '1vh',
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <div className="carousel-item">
                            <img src={Brooklyn} alt="Poster Brooklyn" className="carousel-image" />
                            <div className="overlay">
                                <button className="details-btn">Details</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="carousel-item">
                            <img src={Macao} alt="Poster Macao" className="carousel-image" />
                            <div className="overlay">
                                <button className="details-btn">Details</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="carousel-item">
                            <img src={Navada} alt="Poster Navada" className="carousel-image" />
                            <div className="overlay">
                                <button className="details-btn">Details</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="carousel-item">
                            <img src={Brooklyn} alt="Poster Brooklyn" className="carousel-image" />
                            <div className="overlay">
                                <button className="details-btn">Details</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="carousel-item">
                            <img src={Macao} alt="Poster Macao" className="carousel-image" />
                            <div className="overlay">
                                <button className="details-btn">Details</button>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="carousel-item">
                            <img src={Navada} alt="Poster Navada" className="carousel-image" />
                            <div className="overlay">
                                <button className="details-btn">Details</button>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default CarouselGames;
