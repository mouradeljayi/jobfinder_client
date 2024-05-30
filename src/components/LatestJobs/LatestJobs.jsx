import React from 'react';
import Slider from 'react-slick';
import './LatestJobs.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestJobs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='latestJobs'>
        <div className="slider-container">
                  <h2 className='slider-header'>OFFRES D'EMPLOIS A LA UNE</h2>

            <Slider {...settings}>
                {Array(6).fill().map((_, index) => (
                    <div key={index} className="slider-card">
                        <img
                            src="https://leseco.ma/wp-content/uploads/2021/11/Marjane-Holding.jpg" alt='Job Image' className="card-image" />

                        <div className="middle">
                            <h4>Ingénieur Java Spring boot, DevOps & SCRUM Master FullStack (F/H)</h4>
                        </div>

                    </div>

                ))}
            </Slider>
        </div>
        </div>
    )
}

export default LatestJobs;
