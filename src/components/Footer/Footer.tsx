import React from 'react';
import {Accordion} from 'react-bootstrap';

import mastercard from '../../assets/images/logos/mastercard.png';
import mir from '../../assets/images/logos/mir.png';
import visa from '../../assets/images/logos/visa.png';

import './footer.sass';


const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className="footer__info" >
                <ul className="footer__info_nav" style={{display: window.innerWidth > 668 ? 'block' : 'none'}}>Компания
                    <li className="footer__info_nav_item"><a href="#">О компании</a></li>
                    <li className="footer__info_nav_item"><a href="#">Блог</a></li>
                    <li className="footer__info_nav_item"><a href="#">Стать поставщиком</a></li>
                    <li className="footer__info_nav_item"><a href="#">Стать инвестором</a></li>
                    <li className="footer__info_nav_item"><a href="#">Контакты</a></li>
                    <li className="footer__info_nav_item"><a href="#">Пользовательское соглашение</a></li>
                    <li className="footer__info_nav_item"><a href="#">Политика конфиденщиальности и оферта</a></li>
                </ul>
                <ul className="footer__info_nav" style={{display: window.innerWidth > 668 ? 'block' : 'none'}}>Покупателям
                    <li className="footer__info_nav_item"><a href="#">Каталог</a></li>
                    <li className="footer__info_nav_item"><a href="#">Корзина</a></li>
                    <li className="footer__info_nav_item"><a href="#">Избранные товары</a></li>
                    <li className="footer__info_nav_item"><a href="#">Личный кабинет</a></li>
                    <li className="footer__info_nav_item"><a href="#">Доставка</a></li>
                    <li className="footer__info_nav_item"><a href="#">Оплата</a></li>
                    <li className="footer__info_nav_item"><a href="#">Обмен и возврат</a></li>
                </ul>

                <Accordion style={{display: window.innerWidth <= 668 ? 'block' : 'none'}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Компания</Accordion.Header>
                        <Accordion.Body>
                        <ul className="footer__info_nav" >
                            <li className="footer__info_nav_item"><a href="#">О компании</a></li>
                            <li className="footer__info_nav_item"><a href="#">Блог</a></li>
                            <li className="footer__info_nav_item"><a href="#">Стать поставщиком</a></li>
                            <li className="footer__info_nav_item"><a href="#">Стать инвестором</a></li>
                            <li className="footer__info_nav_item"><a href="#">Контакты</a></li>
                            <li className="footer__info_nav_item"><a href="#">Пользовательское соглашение</a></li>
                            <li className="footer__info_nav_item"><a href="#">Политика конфиденщиальности и оферта</a></li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Покупателям</Accordion.Header>
                        <Accordion.Body>
                        <ul className="footer__info_nav" >
                            <li className="footer__info_nav_item"><a href="#">Каталог</a></li>
                            <li className="footer__info_nav_item"><a href="#">Корзина</a></li>
                            <li className="footer__info_nav_item"><a href="#">Избранные товары</a></li>
                            <li className="footer__info_nav_item"><a href="#">Личный кабинет</a></li>
                            <li className="footer__info_nav_item"><a href="#">Доставка</a></li>
                            <li className="footer__info_nav_item"><a href="#">Оплата</a></li>
                            <li className="footer__info_nav_item"><a href="#">Обмен и возврат</a></li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                <div className="footer__info_empty"></div>
                <div className="footer__info_contacts">
                    <div className="footer__info_contacts_title">Следите за новинками и акциями</div>
                    <div className="footer__info_contacts_subscribe">
                        <input type='email' placeholder='Адрес электронной почты' />
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110" fill="none">
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
                    </div>
                    <p>Нажимая кнопку, я соглашаюсь на получение информации, принимаю условия политики конфиденциальности и пользовательского соглашения, даю согласие на обработку персональных данных </p>
                    <div className="footer__info_contacts_icons">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_17_702)">
                                    <path d="M5.51667 8.99167C6.71667 11.35 8.65 13.275 11.0083 14.4833L12.8417 12.65C13.0667 12.425 13.4 12.35 13.6917 12.45C14.625 12.7583 15.6333 12.925 16.6667 12.925C17.125 12.925 17.5 13.3 17.5 13.7583V16.6667C17.5 17.125 17.125 17.5 16.6667 17.5C8.84167 17.5 2.5 11.1583 2.5 3.33333C2.5 2.875 2.875 2.5 3.33333 2.5H6.25C6.70833 2.5 7.08333 2.875 7.08333 3.33333C7.08333 4.375 7.25 5.375 7.55833 6.30833C7.65 6.6 7.58333 6.925 7.35 7.15833L5.51667 8.99167Z" fill="#282828"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_702">
                                    <rect width="20" height="20" rx="10" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_17_704)">
                                    <path d="M16.6667 3.33325H3.33335C2.41669 3.33325 1.67502 4.08325 1.67502 4.99992L1.66669 14.9999C1.66669 15.9166 2.41669 16.6666 3.33335 16.6666H16.6667C17.5834 16.6666 18.3334 15.9166 18.3334 14.9999V4.99992C18.3334 4.08325 17.5834 3.33325 16.6667 3.33325ZM16.6667 6.66659L10 10.8333L3.33335 6.66659V4.99992L10 9.16658L16.6667 4.99992V6.66659Z" fill="#282828"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_704">
                                    <rect width="20" height="20" rx="10" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_17_706)">
                                    <path d="M9.99998 2.5L3.33331 7.5V17.5H7.49998V11.6667H12.5V17.5H16.6666V7.5L9.99998 2.5Z" fill="#282828"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_706">
                                    <rect width="20" height="20" rx="10" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>

                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clipPath="url(#clip0_17_708)">
                                <rect width="40" height="40" fill="white"/>
                                <path d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z" fill="#282828"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_708">
                                <rect width="40" height="40" rx="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>                        
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clipPath="url(#clip0_17_709)">
                                <rect width="40" height="40" fill="white"/>
                                <path d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z" fill="#282828"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_709">
                                <rect width="40" height="40" rx="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>                        
                    </a>
                </div>
            </div>
            <hr/>
            <div className="footer__rest">
                <div className="footer__rest_year">@ 2022</div>
                <div className="footer__rest_logos">
                    <img src={mastercard} alt='mastercard' />
                    <img src={mir} alt='mir' />
                    <img src={visa} alt='visa' />
                </div>
            </div>
        </div>
    );
};

export default Footer;