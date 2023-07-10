import React from 'react';

import Banner from './Banner/Banner';
import Advantages from './Advantages/Advantages';
import About from './About/About';

import './main.sass';


const Main: React.FC = () => {
    return (
        <div className='main'>
            <Banner />
            <Advantages />
            <About />
        </div>
    );
};

export default Main;