import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AboutDrone from "../AboutDrone/AboutDrone";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <AboutDrone></AboutDrone>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
