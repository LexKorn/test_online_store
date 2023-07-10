import React from 'react';

import mastercard from '../../assets/images/logos/mastercard.png';
import mir from '../../assets/images/logos/mir.png';
import visa from '../../assets/images/logos/visa.png';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';
import home from '../../assets/icons/home.svg';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import arrow from '../../assets/icons/arrow_rigth.svg';

import './footer.sass';


const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className="footer__info">
                <ul className="footer__info_nav">Компания
                    <li className="footer__info_nav_item"><a href="#">О компании</a></li>
                    <li className="footer__info_nav_item"><a href="#">Блог</a></li>
                    <li className="footer__info_nav_item"><a href="#">Стать поставщиком</a></li>
                    <li className="footer__info_nav_item"><a href="#">Стать инвестором</a></li>
                    <li className="footer__info_nav_item"><a href="#">Контакты</a></li>
                    <li className="footer__info_nav_item"><a href="#">Пользовательское соглашение</a></li>
                    <li className="footer__info_nav_item"><a href="#">Политика конфиденщиальности и оферта</a></li>
                </ul>
                <ul className="footer__info_nav">Покупателям
                    <li className="footer__info_nav_item"><a href="#">Каталог</a></li>
                    <li className="footer__info_nav_item"><a href="#">Корзина</a></li>
                    <li className="footer__info_nav_item"><a href="#">Избранные товары</a></li>
                    <li className="footer__info_nav_item"><a href="#">Личный кабинет</a></li>
                    <li className="footer__info_nav_item"><a href="#">Доставка</a></li>
                    <li className="footer__info_nav_item"><a href="#">Оплата</a></li>
                    <li className="footer__info_nav_item"><a href="#">Обмен и возврат</a></li>
                </ul>
                <div></div>
                <div className="footer__info_contacts">
                    <div>Следите за новинками и акциями</div>
                    <div className="footer__info_contacts_subscribe">
                        <input type='email' placeholder='Адрес электронной почты' />
                        <button type="submit"><img src={arrow} alt='arrow' /></button>
                    </div>
                    <p>Нажимая кнопку, я соглашаюсь на получение информации, принимаю условия политики конфиденциальности и пользовательского соглашения, даю согласие на обработку персональных данных </p>
                    <div className="footer__info_contacts_icons">
                        <a href="#"><img src={phone} alt='phone' /></a>
                        <a href="#"><img src={email} alt='email' /></a>
                        <a href="#"><img src={home} alt='home' /></a>
                    </div>
                    <a href="#"><img src={vk} alt='vk' /></a>
                    <a href="#"><img src={telegram} alt='telegram' /></a>
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