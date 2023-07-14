import React from 'react';

import './header2.sass';


const Header2: React.FC = () => {
    return (
        <div className="header2" id='up2'>
            <button className="header2__btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_17_731)">
                        <path d="M2.5 15H17.5V13.3333H2.5V15ZM2.5 10.8333H17.5V9.16667H2.5V10.8333ZM2.5 5V6.66667H17.5V5H2.5Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_17_731">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <span>Каталог</span>
            </button>
            <div className="header2__search">
                <input type='text' className="header2__search_input" placeholder="Напишите, что вы ищете..."/>
                <button className="header2__search_btn">Найти</button>
            </div>
            <div className="header2__profile">
                <a href="#" className="header2__profile_item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M17.1666 15.8333V17.5H3.83325V15.8333C3.83325 14.9493 4.18444 14.1014 4.80956 13.4763C5.43468 12.8512 6.28253 12.5 7.16659 12.5H13.8333C14.7173 12.5 15.5652 12.8512 16.1903 13.4763C16.8154 14.1014 17.1666 14.9493 17.1666 15.8333Z" stroke="#282828" strokeWidth="1.43015" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5 9.16667C12.3409 9.16667 13.8333 7.67428 13.8333 5.83333C13.8333 3.99238 12.3409 2.5 10.5 2.5C8.65901 2.5 7.16663 3.99238 7.16663 5.83333C7.16663 7.67428 8.65901 9.16667 10.5 9.16667Z" stroke="#282828" strokeWidth="1.43015" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="header2__profile_item_text">Войти</div>
                </a>
                <a href="#" className="header2__profile_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <g clipPath="url(#clip0_17_346)">
                        <path d="M15.8125 2.875C14.145 2.875 12.5445 3.65125 11.5 4.87792C10.4554 3.65125 8.85496 2.875 7.18746 2.875C4.23579 2.875 1.91663 5.19417 1.91663 8.14583C1.91663 11.7683 5.17496 14.72 10.1104 19.205L11.5 20.4604L12.8895 19.1954C17.825 14.72 21.0833 11.7683 21.0833 8.14583C21.0833 5.19417 18.7641 2.875 15.8125 2.875ZM11.5958 17.7771L11.5 17.8729L11.4041 17.7771C6.84246 13.6467 3.83329 10.9154 3.83329 8.14583C3.83329 6.22917 5.27079 4.79167 7.18746 4.79167C8.66329 4.79167 10.1008 5.74042 10.6087 7.05333H12.4008C12.8991 5.74042 14.3366 4.79167 15.8125 4.79167C17.7291 4.79167 19.1666 6.22917 19.1666 8.14583C19.1666 10.9154 16.1575 13.6467 11.5958 17.7771Z" fill="#525252"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_17_346">
                        <rect width="21" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                    <div className="header2__profile_item_text">Избраное</div>
                </a>
                <a href="#" className="header2__profile_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.49996 18.3333C7.9602 18.3333 8.33329 17.9602 8.33329 17.5C8.33329 17.0397 7.9602 16.6666 7.49996 16.6666C7.03972 16.6666 6.66663 17.0397 6.66663 17.5C6.66663 17.9602 7.03972 18.3333 7.49996 18.3333Z" stroke="#525252" strokeWidth="1.66" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.6666 18.3333C17.1268 18.3333 17.4999 17.9602 17.4999 17.5C17.4999 17.0397 17.1268 16.6666 16.6666 16.6666C16.2063 16.6666 15.8333 17.0397 15.8333 17.5C15.8333 17.9602 16.2063 18.3333 16.6666 18.3333Z" fill="#525252" stroke="#525252" strokeWidth="1.66" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.833374 0.833313H4.16671L6.40004 11.9916C6.47624 12.3753 6.68496 12.7199 6.98966 12.9652C7.29436 13.2105 7.67562 13.3408 8.06671 13.3333H16.1667C16.5578 13.3408 16.9391 13.2105 17.2438 12.9652C17.5484 12.7199 17.7572 12.3753 17.8334 11.9916L19.1667 4.99998H5.00004" stroke="#525252" strokeWidth="1.66" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    <div className="header2__profile_item_text">Корзина</div>
                </a>
            </div>
        </div>
    );
};

export default Header2;