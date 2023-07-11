import React from 'react';

import Banner from './Banner/Banner';
import Advantages from './Advantages/Advantages';
import Catalog from './Catalog/Catalog';
import About from './About/About';

import './main.sass';


const Main: React.FC = () => {
    return (
        <div className='main'>
            <Banner />
            <Advantages />
            <Catalog />
            <About />
        </div>
    );
};

export default Main;