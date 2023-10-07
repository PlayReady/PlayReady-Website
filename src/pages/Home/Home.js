import React from 'react';
import './Home.css';
import WelcomeSection from './WelcomeSection';
import FeaturedProducts from '../../components/product/FeaturedProducts';

function Home() {
  return (
    <div className="HomePage">
      <WelcomeSection/>
      <FeaturedProducts/>
    </div>
  );
}

export default Home;
