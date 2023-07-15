import React from 'react';

import firstSlide from '../../../assets/images/banner/banner1.png';
import Slider from '../Slider/Slider';
import { IBanner } from '../../../types/types';

import './banner.sass';


const Banner: React.FC = () => {
    const slides: IBanner[] = [
        {
            id: 1,
            img: firstSlide,
            title: 'Сезон подготовки к новогодним продажам открыт!',
            description: [
                'Искуственные елки',
                'Гирлянды',
                'Игрушки и украшения',
            ],
            button: 'Перейти к каталогу'
        },
        {
            id: 2,
            img: firstSlide,
            title: 'Сезон подготовки к новогодним продажам открыт!',
            description: [
                'Искуственные елки',
                'Гирлянды',
                'Игрушки и украшения',
                'Пиротехника',
                'Новогодние подарки',
            ],
            button: 'Перейти к каталогу'
        },
        {
            id: 3,
            img: firstSlide,
            title: 'Сезон подготовки к новогодним продажам открыт!',
            description: [
                'Искуственные елки',
                'Гирлянды',
                'Игрушки и украшения',
                'Пиротехника',
                'Новогодние подарки',
                'Игрушки и украшения',
                'Пиротехника',
            ],
            button: 'Перейти к каталогу'
        },
    ]

    return (
        <div className="banner">
            <Slider slides={slides} delay={4000} />
        </div>
    );
};

export default Banner;