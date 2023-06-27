import React from 'react';

import Navbar from '../../components/navbar/Navbar';


const About = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main style={{"paddingTop": "5rem"}}>
                <div className="container">
                    <article className='mt-4'>
                        <h2 className='text-center'>Sobre mí</h2>

                        <hr className='border-4 mx-auto text-primary rounded' style={{"width": "3rem"}}/>

                        <p className='w-75 mx-auto' style={{"textAlign": "justify"}}>
                            Soy un Programador FullStack orientado al desarrollo Back-end y músico. Desde que tengo 16 años me
                            ha interesado el mundo de la programación, mi primer lenguaje fue java. Sin duda una de las experiencias 
                            más motivadoras fue mi acercamientoal código, desde ese momento empecé a ser autodidacta, investigando e 
                            documentándome para adquirir conocimientos, mi mayor fortaleza es no quedarme tranquilo 
                            hasta encontrar la solución al problema.
                        </p>
                        <p className='w-75 mx-auto' style={{"textAlign": "justify"}}>
                            Empecé mi carrera como analista programador hace 6 años, realizando mi práctica profesional en el 
                            Hospital Dr. Luis Tisné Brousse donde principalmente me encargué de realizar una intranet para llevar 
                            un orden de los pacientes atendidos guardando la integridad y confidencialidad de los datos. En esa 
                            posición, identificamos una necesidad de que los Doctores no manejaban la información de sus pacientes 
                            en un solo lugar sino mediante un Excel y desarrollamos un producto que se divide por módulos para que la 
                            información la puedan menejar de manera más eficiente, logrando unificar los datos del paciente con una 
                            atencion de calidad.
                        </p>
                        <p className="w-75 mx-auto" style={{"textAlign": "justify"}}>
                            Debido a mi experencia y capacidades en desarrollo de nuevos mercados y lanzamientos de productos, no tengo 
                            dudas que podré cumplir con el éxito las exigencias como analista programador.
                        </p>
                        <p className="w-75 mx-auto" style={{"textAlign": "justify"}}>
                            Actualmente me dedico a realizar proyectos que me permitan avanzar en mi formación como programador. Me 
                            fascina poder encontrar la solución a los problemas de la vida con código.
                        </p>
                    </article>
                </div>
            </main>
        </>
    );
};



export default About;
