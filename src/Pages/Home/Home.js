import React from 'react';

import About from './About/About';
import Banner from './Banner/Banner';
import Challenges from './Challenges/Challenges';
import Requirement from './Requirement/Requirement';
import Safety from './Safety/Safety';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Challenges></Challenges>
            <Safety></Safety>
            <Requirement></Requirement>
            
        </div>
    );
};

export default Home;