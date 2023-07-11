import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import firstSlide from '../../../assets/images/banner/banner1.png';

import './banner.sass';


const Banner: React.FC = () => {
    return (
        <div className="banner">
            <Carousel interval={null}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={firstSlide}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="banner__title">Сезон подготовки к новогодним продажам открыт!</div>
                        <ul className="banner__list">
                            <li className="banner__list_item">Искуственные елки</li>
                            <li className="banner__list_item">Гирлянды</li>
                            <li className="banner__list_item">Игрушки и украшения</li>
                            <li className="banner__list_item">Пиротехника</li>
                            <li className="banner__list_item">Новогодние подарки</li>
                        </ul>
                        <button className="banner__btn">Перейти к каталогу</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={firstSlide}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={firstSlide}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;