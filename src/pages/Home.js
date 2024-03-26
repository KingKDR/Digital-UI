import React from "react";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import Mainhome from "../components/Mainhome";
import "../pages/Home.css"
import Footer from "../components/Footer";
const Home = () => {
    return(
        <>
            <Header />
            <ImageCarousel />
            <Mainhome />
            <Footer />
            
        </>
    )
}

export default Home; 