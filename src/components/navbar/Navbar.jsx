import React from "react";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body fixed-top'>
            <div className='container'>
                <a href="./" className="navbar-brand"><img src={logo} alt="developer fullstack" className='img-fluid' style={{"width": "192px"}}/></a>

                <button className='navbar-toggler shadow-none' type='button' data-bs-toggle='collapse' data-bs-target='#menuNav' 
                aria-controls='menuNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <section className='collapse navbar-collapse' id='menuNav'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 text-center d-flex align-items-center'>
                        <li className='nav-item'><Link className='nav-link active fw-medium' to="/">Inicio</Link></li>
                        <li className='nav-item'><Link className='nav-link active fw-medium' to="/about">Sobre mi</Link></li>
                        <li className='nav-item'><a className='nav-link active fw-medium' href="#formacion">Formacion</a></li>
                        <li className='nav-item'><a className='nav-link active fw-medium' href="#proyectos">Proyectos</a></li>
                        <li className='nav-item'><a className='nav-link active fw-medium' href="#contacto">Contacto</a></li>


                        <li className='nav-item'>
                            <a className='nav-link' href="https://www.linkedin.com/in/daniel-gomez-g-328bb4105/" title='Linkedin' target="_blank">
                                <i className="bi bi-linkedin text-primary fs-5"></i>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="https://github.com/danieldevelop" title='GitHub' target="_blank">
                                <i className="bi bi-github text-dark fs-5"></i>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </nav>
    )
};


export default Navbar;