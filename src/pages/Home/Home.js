import React from 'react';
import "./Home.css"
import background from "../../assets/placeholders/computers/homepage-background.png"
import WelcomeSection from "./WelcomeSection";

function Home() {
    return (
        <div className="main">
            <WelcomeSection/>
        </div>
    );
}

export default Home;