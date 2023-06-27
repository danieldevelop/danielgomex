import React from 'react';
import imgBanner from '../../assets/img/img_cabecera.svg';
import iconHTML from '../../assets/img/icon-html.svg';
import iconCSS from '../../assets/img/icon-css.svg';
import iconJS from '../../assets/img/icon-js.svg';
import nodeJS from '../../assets/img/icon-node.svg';
import reactJS from '../../assets/img/icon-react.svg';
import java from '../../assets/img/icon-java.svg';
import php from '../../assets/img/icon-php.svg';
import postgreSQL from '../../assets/img/icon-postgres.webp';
import mysql from '../../assets/img/icon-mysql.svg';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <section className='d-flex align-items-center' style={{"height": "500px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <h1 className='fw-semibold fs-2 text-center pb-2' style={{"color": "#2F2F2F"}}>Hola👋, mi nombre es Daniel</h1>
                            
                            <p style={{"color": "#464646", "textAlign": "justify"}}>
                                Soy un <span className='fw-medium fst-italic'>Programador full stack</span> orientado al 
                                desarrollo <span className='fw-medium fst-italic'>Back-end</span>. Actualmente me dedico a 
                                realizar proyectos web y sitios web que conducen al éxito del producto en general 
                                <Link to='/about' className='text-decoration-none text-reset'> ...ver más</Link>
                            </p>

                            <h3 className='h5 mt-4'>Mis Skills</h3>
                            <div className='d-flex align-items-center gap-2'>
                                <img src={iconHTML} alt="html5" style={{"width": "32px"}}/>
                                <img src={iconCSS} alt="css" style={{"width": "32px"}}/>
                                <img src={iconJS} alt="javascript" style={{"width": "32px"}}/>
                                <img src={nodeJS} alt="html5" style={{"width": "32px"}}/>
                                <img src={reactJS} alt="html5" style={{"width": "32px"}}/>
                                <img src={java} alt="html5" style={{"width": "32px"}}/>
                                <img src={php} alt="html5" style={{"width": "32px"}}/>
                                <img src={postgreSQL} alt="html5" style={{"width": "32px"}}/>
                                <img src={mysql} alt="html5" style={{"width": "32px"}}/>
                            </div>

                            <Link to='#proyectos' className='btn btn-sm btn-outline-dark mt-4'>Proyectos</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <img src={imgBanner} alt="..." className="img-fluid w-75" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default Banner;