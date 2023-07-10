import React from 'react';

import hamburger from '../../assets/icons/hamburger.svg';
import profile from '../../assets/icons/profile_empty.svg';
import heart from '../../assets/icons/heart_empty.svg';
import basket from '../../assets/icons/basket_empty.svg';

import './header2.sass';


const Header2: React.FC = () => {
    return (
        <div className="header2">
            <button className="header2__btn"><img src={hamburger} alt="hamburger"/>Каталог</button>
            <div className="header2__search">
                <input type='text' className="header2__search_input" placeholder="Напишите, что вы ищете..."/>
                <button className="header2__search_btn">Найти</button>
            </div>
            <div className="header2__profile">
                <div className="header2__profile_item"><img src={profile} alt="hamburger"/>Войти</div>
                <div className="header2__profile_item"><img src={heart} alt="heart"/>Избраное</div>
                <div className="header2__profile_item"><img src={basket} alt="basket"/>Корзина</div>
            </div>
        </div>
    );
};

export default Header2;