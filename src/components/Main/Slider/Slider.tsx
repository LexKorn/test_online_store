import React, {useState, useEffect} from 'react';

import { IBanner } from '../../../types/types';

import './slider.sass';


interface SliderProps {
    slides: IBanner[];
    delay: number;
};

const Slider: React.FC<SliderProps> = ({slides, delay}) => {
    const [offset, setOffset] = useState<number>(31.5);
    const [dots, setDots] = useState<string[]>([]);

    useEffect(() => {
        let atrbArr: string[] = [];
        for (let i: number = 0; i < slides.length; i++) {
            const atrb: string = `${i + 1}`;
            atrbArr.push(atrb);
        }
        setDots([...dots, ...atrbArr]);
    }, []);

    function clickOnDot(item: HTMLElement) {
        const slideTo = item.getAttribute('data-slide-to');
        // @ts-ignore
        setOffset(31.5 * (+slideTo - 1));
    }

    function shiftSlideLeft () {
        if (offset >= 60) {
            setOffset(0);
        } else {
            setOffset(offset + 31.5);
        }
    }

    function shiftSlideRight () {
        if (offset < 10) {   
            setOffset(63); 
        } else {
            setOffset(offset - 31.5);
        }
    }

    setInterval(() => shiftSlideLeft(), delay);

    return (
        <div className="slider">
            <div className="slider__wrapper">
                <div className="slider__inner" style={{transform: `translateX(-${offset}%)`}}>
                    {slides.map(slide => 
                        <div className="slide" key={slide.id}>
                            <img className="slide__img" src={slide.img} />
                            <div className="slide__content">
                                <div className="banner__title">{slide.title}</div>
                                <ul className="banner__list">
                                    {slide.description.map((elm, i) =>
                                        <li className="banner__list_item" key={i}>{elm}</li>
                                    )}
                                </ul>
                                <button className="banner__btn">{slide.button}</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button className="slider__btn slider__btn_prev" onClick={shiftSlideRight} >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 110 110" fill="none">
                    <g opacity="0.8" filter="url(#filter0_d_17_349)">
                        <g clipPath="url(#clip0_17_349)">
                        <rect x="24" y="24" width="62" height="62" rx="31" fill="white"/>
                        <path d="M49.8333 39.5L46.1908 43.1425L58.0225 55L46.1908 66.8575L49.8333 70.5L65.3333 55L49.8333 39.5Z" fill="#282828"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_17_349" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="12"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_349"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_349" result="shape"/>
                        </filter>
                        <clipPath id="clip0_17_349">
                        <rect x="24" y="24" width="62" height="62" rx="31" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <button className="slider__btn slider__btn_next" onClick={shiftSlideLeft} >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 110 110" fill="none">
                    <g opacity="0.8" filter="url(#filter0_d_17_349)">
                        <g clipPath="url(#clip0_17_349)">
                        <rect x="24" y="24" width="62" height="62" rx="31" fill="white"/>
                        <path d="M49.8333 39.5L46.1908 43.1425L58.0225 55L46.1908 66.8575L49.8333 70.5L65.3333 55L49.8333 39.5Z" fill="#282828"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_17_349" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="12"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_349"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_349" result="shape"/>
                        </filter>
                        <clipPath id="clip0_17_349">
                        <rect x="24" y="24" width="62" height="62" rx="31" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <ol className="slider__indicators">
                {dots.map((dot, i) =>
                    <li 
                        className="slider__indicators_dot"
                        key={i} 
                        data-slide-to={dot}
                        //@ts-ignore
                        onClick={elm => clickOnDot(elm.target)}
                    ></li>    
                )}
            </ol>
        </div> 
    );
};

export default Slider;