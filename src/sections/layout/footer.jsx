import { useState } from 'react'
function Footer() {
    return (
        <>
            {/* Start Footer 
============================================= */}
            <footer className="bg-dark text-light" style={{ backgroundImage: 'url(assets/img/shape/brush-down.png)' }}>
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            {/* Single Itme */}
                            <div className="col-lg-4 col-md-6 item">
                                <div className="footer-item about">
                                    <img className="logo" src="assets/img/logo-light.png" alt="Logo" />
                                    <p>We have passionate and knowledgeable local guides who will take you beyond the usual tourist routes, revealing the secrets and rich history of Machu Picchu.</p>
                                    <form action="#">
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" />
                                        <button type="submit"> Go</button>
                                    </form>
                                </div>
                            </div>
                            {/* End Single Itme */}
                            {/* Single Itme */}
                            <div className="col-lg-2 col-md-6 item">
                                <div className="footer-item link">
                                    <h4 className="widget-title">Explore</h4>
                                    <ul>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Meet Our Team</a>
                                        </li>
                                        <li>
                                            <a href="#">News &amp; Media</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Volunteers</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Itme */}
                            {/* Single Itme */}
                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item recent-post">
                                    <h4 className="widget-title">Recent Posts</h4>
                                    <ul>
                                        <li>
                                            <div className="thumb">
                                                <a href="#">
                                                    <img src="assets/img/800x800.png" alt="Thumb" />
                                                </a>
                                            </div>
                                            <div className="info">
                                                <div className="meta-title">
                                                    <span className="post-date">12 Sep, 2022</span>
                                                </div>
                                                <h5><a href="#">Meant widow equal an share least part. </a></h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="thumb">
                                                <a href="#">
                                                    <img src="assets/img/800x800.png" alt="Thumb" />
                                                </a>
                                            </div>
                                            <div className="info">
                                                <div className="meta-title">
                                                    <span className="post-date">18 Jul, 2022</span>
                                                </div>
                                                <h5><a href="#">Future Plan &amp; Strategy for Consutruction </a></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Itme */}
                            {/* Single Itme */}
                            <div className="col-lg-3 col-md-6 item">
                                <div className="footer-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-home" />
                                            </div>
                                            <div className="content">
                                                <strong>Address:</strong>
                                                Avenue Velasco Astete E-1, Wanchaq, Cusco, Perú
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:info@wellastravelagency.com">info@wellastravelagency.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone" />
                                            </div>
                                            <div className="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:+51981989596">+51 981 989 596</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Single Itme */}
                        </div>
                    </div>
                    {/* Start Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>© Copyright 2023. All Rights Reserved by <a href="https://greatswork.com">GreatsWork</a></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <a href="#">Terms</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Footer Bottom */}
                </div>
                <div className="shape-right-bottom">
                    <img src="assets/img/shape/10.png" alt="Image Not Found" />
                </div>
                <div className="shape-left-bottom">
                    <img src="assets/img/shape/11.png" alt="Image Not Found" />
                </div>
            </footer>
            {/* End Footer */}
        </>
    )
}

export default Footer