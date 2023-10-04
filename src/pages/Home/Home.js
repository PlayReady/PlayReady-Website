import React from 'react';
import "./Home.css"
import background from "../../assets/placeholders/computers/homepage-background.png"
import WelcomeSection from "./WelcomeSection";
import FeaturedProducts from "../../components/product/FeaturedProducts";

function Home() {

    return (
        <div className="main">
            <WelcomeSection/>
            <FeaturedProducts/>
        </div>
    );
}

export default Home;