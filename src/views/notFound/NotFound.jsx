import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";

const NotFound = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main style={{"paddingTop": "10rem"}}>
                <h1 className="text-center">404 - Not Found!</h1>
                <p className="text-center">La pagina que buscas no existe</p>

                <p className='text-center'><Link to="/" className='btn btn-sm btn-outline-primary'><i class="bi bi-arrow-left"></i> Regresar</Link></p>
            </main>
        </>
    )
};


export default NotFound;