import React from "react";

import Navbar from "../../components/navbar/Navbar";
import Banner from "../banner/Banner";


const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main style={{"paddingTop": "5rem"}}>
                <Banner />
            </main>
        </>
    )
}



export default Home;