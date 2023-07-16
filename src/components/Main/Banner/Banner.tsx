import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import firstSlide from '../../../assets/images/banner/banner1.png';
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
                'Пиротехника',
            ],
            button: 'Перейти к каталогу'
        },
    ]

    return (
        <div className="banner">
            <Carousel interval={null}>
                {slides.map(slide =>
                    <Carousel.Item key={slide.id}>
                        <img
                            className="d-block w-100"
                            src={slide.img}
                            alt="banner"
                        />
                        <Carousel.Caption>
                            <div className="banner__title">{slide.title}</div>
                            <ul className="banner__list">
                                {slide.description.map((elm, i) =>
                                    <li className="banner__list_item" key={i}>{elm}</li>
                                )}
                            </ul>
                            <button className="banner__btn">Перейти к каталогу</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
};

export default Banner;