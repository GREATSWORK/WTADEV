import { useEffect, useState } from 'react'
import '../../assets/js/validnavs.js'; // Ajusta la ruta al archivo JavaScript

function Header() {

    useEffect(() => {
        
        // Asegúrate de manejar cualquier limpieza necesaria en el efecto
        return () => {


        };
      }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez

      
    return (
        <header>
            {/* Start Navigation */}
            <nav className="navbar mobile-sidenav inc-shape navbar-common navbar-sticky navbar-default validnavs">
                {/* Start Top Search */}
                <div className="top-search">
                    <div className="container-xl">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-search" /></span>
                            <input type="text" className="form-control" placeholder="Search" />
                            <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
                        </div>
                    </div>
                </div>
                {/* End Top Search */}
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Start Header Navigation */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars" />
                        </button>
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/img/logo.png" className="logo" alt="Logo" />
                        </a>
                    </div>
                    {/* End Header Navigation */}
                    {/* Main Nav */}
                    <div className="main-nav-content">
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <img src="assets/img/logo.png" alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-times" />
                            </button>
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Packages</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="Magic-Peru-6D5N.html">Magic Perú 6D5N</a></li>
                                        <li><a href="Charming-Peru-7D6N.html">Charming Perú 7D6N</a></li>
                                        <li><a href="Charming-Peru-7D6N.html">Scene Perú 8D7N</a></li>
                                        <li><a href="Charming-Peru-7D6N.html">Adventurer Perú 9D8N</a></li>
                                        <li><a href="Charming-Peru-7D6N.html">Authentic Perú 11D10N</a></li>
                                        <li><a href="Charming-Peru-7D6N.html">Ancestral Perú 12D11N</a></li>
                                        <li><a href="Charming-Peru-7D6N.html">Roots of the Incas Perú 13D12N</a></li>
                                        <li><a href="Charming-Peru-7D6N.html">Mysterious Perú 15D14N</a></li>
                                        <li><a href="Charming-Peru-7D6N.html">Amazon Perú 16D15N</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Inca Trail</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="Inca-Trail-4D3N.html">Inca Trail 4D3N</a></li>
                                        <li><a href="Inca-Trail-2D1N.html">Inca Trail 2D1N</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Macchu Picchu</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="services.html">Unique 2D</a></li>
                                        <li><a href="services-2.html">Traditional 3D</a></li>
                                        <li><a href="services-details.html">Charming 4D</a></li>                                        
                                        <li><a href="services-details.html">Colorful 5D</a></li>                                        
                                        <li><a href="services-details.html">Fantastic 6D</a></li>                                        
                                        <li><a href="services-details.html">Adventurer 7D</a></li>
                                        <li><a href="services-details.html">Spectacular 8D</a></li>
                                        <li><a href="services-details.html">Wonderful 9D</a></li>
                                        <li><a href="services-details.html">Origins of the Empire 10D</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Adventure</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="choquequirao4d.html">Choquequirao 4D</a></li>
                                        <li><a href="salkantay4d.html">Salkantay 4D</a></li>
                                        <li><a href="lares4d.html">Lares 4D</a></li>
                                        <li><a href="humantaylagoon.html">Humantay Lagoon</a></li>
                                        <li><a href="mountainofcolors.html">Mountain of Colors</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Traditional</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="Machu-Picchu-Full-Day.html">Machu Picchu Full Day</a></li>
                                        <li><a href="City-Tour.html">City Tour</a></li>
                                        <li><a href="Maras-And-Moray.html">Maras and Moray</a></li>
                                        <li><a href="Sacred-Valley.html">Sacred Valley</a></li>
                                        <li><a href="South-Valley.html">South Valley</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="project.html">Contact</a>
                                
                                </li>
                            </ul>
                        </div>{/* /.navbar-collapse */}
                        <div className="attr-right">
                            {/* Start Atribute Navigation */}
                            <div className="attr-nav">
                                <ul>
                                    <li className="contact">
                                        <div className="call">
                                            <div className="icon">
                                                <i className="fas fa-comments-alt-dollar" />
                                            </div>
                                            <div className="info">
                                                <p>Have any Questions?</p>
                                                <h5><a href="mailto:info@wellastravelagency.com">info@wellastravelagency.com</a></h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* End Atribute Navigation */}
                        </div>
                        {/* Overlay screen for menu */}
                        <div className="overlay-screen" />
                        {/* End Overlay screen for menu */}
                    </div>
                    {/* Main Nav */}
                </div>
            </nav>
            {/* End Navigation */}
        </header>
    )
}

export default Header