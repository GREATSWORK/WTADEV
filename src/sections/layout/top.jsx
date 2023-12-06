import { useState } from 'react'
function Top() {
    return (
        <>
            {/* Start Header Top ============================================= */}
            <div className="top-bar-area text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-9">
                            <div className="flex-item left">
                                <p>Tours Cusco</p>
                                <ul>
                                    <li><i className="fas fa-map-marker-alt" />Avenue Velasco Astete E-1, Wanchaq, Cusco, Perú</li>
                                    <li><i className="fas fa-phone-alt" />+51 981 989 596</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 text-end">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="https://facebook.com/wellastravelagency">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/wellastravelagency">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com/wellastravelagency">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/wellastravelagency">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header Top */}
        </>
    )
}
export default Top