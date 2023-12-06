import { useRef, useEffect,  useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

function BannerArea() {



    return (
        <div className="banner-area navigation-circle text-light banner-style-one zoom-effect overflow-hidden">
            {/* Slider main container */}
            <div >
                {/* Additional required wrapper */}
                <Swiper
                
                on={{
        // or pass it in on
        direction: "horizontal",
        loop: true,
        autoplay: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 3000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }                  }}
                    className="banner-fade"
               >
                    {/* Single Item */}
                    <SwiperSlide className="swiper-slide banner-style-one">
                        <div className="banner-thumb bg-cover shadow dark" style={{ background: 'url(assets/img/2440x1578.png)' }} />
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-7">
                                    <div className="content">
                                        <h4>South&amp; American</h4>
                                        <h2><strong>Inca</strong> Trail</h2>
                                        <p>The 4-day Inca Trail to Machu Picchu, a top South American trek, blends history and natural beauty. Explore ancient Inca sites, culminating at the Intipunku (Sun Gate) for a sunrise view of Machu Picchu, the legendary Lost City of the Incas.</p>
                                        <div className="button">
                                            <a className="btn btn-theme secondary btn-md radius animation" href="#">Discover More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* End Single Item */}
                    {/* Single Item */}
                    <SwiperSlide className="swiper-slide banner-style-one">
                        <div className="banner-thumb bg-cover shadow dark" style={{ background: 'url(assets/img/2440x1578.png)' }} />
                        <div className="container">
                            <div className="row align-center">
                                <div className="col-xl-7">
                                    <div className="content">
                                        <h4>Machupicchu</h4>
                                        <h2><strong>discover the magic of </strong>Cusco</h2>
                                        <p>Book your next vacation and access discounts and promotions with our fully customizable packages, check availability and explore Machu Picchu Peru
                                        </p>
                                        <div className="button">
                                            <a className="btn btn-theme secondary btn-md radius animation" href="#">Discover More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* End Single Item */}
                </Swiper>
                {/* Navigation */}
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
            </div>
        </div>
    )
}

export default BannerArea
