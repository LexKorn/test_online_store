import React from 'react';

import about from '../../../assets/images/about/about.png';

import './about.sass';


const About: React.FC = () => {
    return (
        <div className='about'>
            <div className="about__text">
                <div className="about__text_title">О нас</div>
                <div className="about__text_description">
                    <p>
                        Мы надежный поставщик для маркетплейсов. Мы рады предложить вам недорогие, но качественные товары с качественными описаниями и фотографиями.
                    </p>
                    <p>
                        У нас вы можете купить замечательные товары: искуственные елки, гирлянды, пиротехнику, электронику, одежду, обувь, аксессуары. Минимальная сумма заказа всего 10 000 руб.
                    </p>
                </div>
            </div>
            <img className="about__img" src={about} alt='about' />
        </div>
    );
};

export default About;