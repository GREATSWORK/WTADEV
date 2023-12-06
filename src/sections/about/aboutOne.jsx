import { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

function AboutOne() {
    return (
        <div className="about-style-one-area default-padding">
            {/* Shape */}
            <div className="shape-right-top">
                <img src="assets/img/shape/leaf.png" alt="Image not found" />
            </div>
            {/* End Shape */}
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-5 col-lg-6 about-style-one pr-50 pr-md-15 pr-xs-15">
                        <div className="thumb">
                            <img src="assets/img/800x800.png" alt="Image Not Found" />
                            <div className="sub-item">
                                <img src="assets/img/1.jpg" alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 about-style-one">
                        <div className="row align-center">
                            <div className="col-xl-7 col-lg-12">
                                <h2 className="heading">Machu Picchu <br /> Inca Trail</h2>
                                <p>Embark on an unforgettable journey to discover the majesty of Machu Picchu, an experience that will immerse you in the rich history and astonishing natural beauty of this iconic place. Throughout this trip, you'll explore ancient Inca sites, marvel at striking architecture, and enjoy the unrivaled combination of stunning landscapes. From the ancient ruins to the imposing Intipunku (Sun Gate), where you will witness the magnificent view of Machu Picchu at dawn, each step will take you closer to the mystical Lost City of the Incas. This journey of discovery will transport you through time, leaving an indelible mark on your memory as you immerse yourself in the history and pure essence of Machu Picchu.</p>
                                <ul className="check-solid-list mt-20">
                                    <li>Environmental sustainability</li>
                                    <li>Community Inclusion</li>
                                    <li>Ethics and Social Responsibility</li>
                                    <li>Cultural Preservation</li>
                                </ul>
                            </div>
                            <div className="col-xl-5 col-lg-12 pl-50 pl-md-15 pl-xs-15">
                                <div className="top-product-item">
                                    <img src="assets/img/icon/safety.png" alt="Icon" />
                                    <h5><a href="#">Comfort and Safety:</a></h5>
                                    <p>Your safety is our priority. From itinerary planning to choosing accommodations, we strive to provide comfort and peace of mind every step of your trip.
                                    </p>
                                </div>
                                <div className="top-product-item">
                                    <img src="assets/img/icon/2.svg" alt="Icon" />
                                    <h5><a href="#">Personalized Experiences:</a></h5>
                                    <p>We recognize that each traveler is unique. We work with you to personalize your experience, offering you flexible options to suit your interests and preferences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutOne

