import React from 'react';

import telegram_mini from '../../assets/icons/telegram_mini.svg';
import watsapp from '../../assets/icons/watsapp.svg';

import './header1.sass';


const Header1: React.FC = () => {
    return (
        <div className='header1'>
            <ul className="header1__nav">
                <li className="header1__nav_item"><a href="#">О нас</a></li>
                <li className="header1__nav_item"><a href="#">Оплата и доставка</a></li>
                <li className="header1__nav_item"><a href="#">Товары из Китая</a></li>
                <li className="header1__nav_item"><a href="#">Статьи</a></li>
            </ul>
            <div className="header1__social">
                <img className="header1__social_icon" src={telegram_mini} alt="telegram" />
                <img className="header1__social_icon" src={watsapp} alt="watsapp" />
            </div>
        </div>
    );
};

export default Header1;