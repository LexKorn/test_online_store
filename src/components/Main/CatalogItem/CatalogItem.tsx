import React, {useState} from 'react';

import basket from '../../../assets/icons/basket_empty_white.svg'
import { IProduct } from '../../../types/types';

import './catalogItem.sass';


interface CatalogItemProps {
    item: IProduct;
};

const CatalogItem: React.FC<CatalogItemProps> = ({item}) => {
    const [hover, setHover] = useState<boolean>(false);
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <div className='product'
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img className="product__img" src={item.img} alt='img' />
            <div onClick={() => setSelected(!selected)}>
                {!selected ?
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <g clipPath="url(#clip0_17_346)">
                                <path d="M15.8125 2.875C14.145 2.875 12.5445 3.65125 11.5 4.87792C10.4554 3.65125 8.85496 2.875 7.18746 2.875C4.23579 2.875 1.91663 5.19417 1.91663 8.14583C1.91663 11.7683 5.17496 14.72 10.1104 19.205L11.5 20.4604L12.8895 19.1954C17.825 14.72 21.0833 11.7683 21.0833 8.14583C21.0833 5.19417 18.7641 2.875 15.8125 2.875ZM11.5958 17.7771L11.5 17.8729L11.4041 17.7771C6.84246 13.6467 3.83329 10.9154 3.83329 8.14583C3.83329 6.22917 5.27079 4.79167 7.18746 4.79167C8.66329 4.79167 10.1008 5.74042 10.6087 7.05333H12.4008C12.8991 5.74042 14.3366 4.79167 15.8125 4.79167C17.7291 4.79167 19.1666 6.22917 19.1666 8.14583C19.1666 10.9154 16.1575 13.6467 11.5958 17.7771Z" fill="#525252"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_346">
                                <rect width="33" height="33" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </>
                    :
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                            <g clipPath="url(#clip0_17_348)">
                                <path d="M11.5001 20.4604L10.1105 19.1954C5.17508 14.72 1.91675 11.7683 1.91675 8.14583C1.91675 5.19417 4.23591 2.875 7.18758 2.875C8.85508 2.875 10.4555 3.65125 11.5001 4.87792C12.5447 3.65125 14.1451 2.875 15.8126 2.875C18.7642 2.875 21.0834 5.19417 21.0834 8.14583C21.0834 11.7683 17.8251 14.72 12.8897 19.205L11.5001 20.4604Z" fill="#2A5CF6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_348">
                                <rect width="33" height="33" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </>
                }
            </div>
            <div className="product__title">{item.title}</div>
                <div className="product__price">{item.price}</div>
                <div className="product__info" style={{display: hover ? 'block' : 'none'}}>
                <div>{item.infoTitle}</div>
                <div className="product__info_list">
                    {item.infoList.map(item =>
                        <div className="product__info_list-item" key={item.id}>{item.value}</div>    
                    )}
                </div>
            </div>
            <div className="product__cost">
                <div className="product__cost_price">{item.price}</div>
                <button className="product__cost_btn" style={{display: hover ? 'block' : 'none'}}>
                    <img src={basket} alt="basket"/>
                    <span>В корзину</span>
                </button>
            </div>
        </div>
    );
};

export default CatalogItem;