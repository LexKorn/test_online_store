import React from 'react';

import AdvantageItem from '../AdvantageItem/AdvantageItem';
import ozon from '../../../assets/images/advantages/ozon.png';
import bank from '../../../assets/images/advantages/bank.png';
import label from '../../../assets/images/advantages/label.png';
import porter from '../../../assets/images/advantages/porter.png';
import storage from '../../../assets/images/advantages/storage.png';
import { IAdvantage } from '../../../types/types';

import './advantages.sass';


const Advantages: React.FC = () => {
    const arrAdv: IAdvantage[] = [
        {
            id: 1,
            title: 'Идеально для маркетплейсов',
            description: 'Подробные описания, характеристики и фотографии товаров',
            img: ozon
        },
        {
            id: 2,
            title: 'Работаем официально',
            description: 'Белая бухгалтерия: договора, закрывающие документы, ЭДО, оплата по счету или на сайте',
            img: bank
        },
        {
            id: 3,
            title: 'Цены от производителей без наценок',
            description: 'Недорогие, но качественные товары  + Прогрессирующая система скидок и бонусов',
            img: label
        },
        {
            id: 4,
            title: 'Быстрая обработка заказов. Доставка в РФ и СНГ',
            description: 'Отгружаем заказ до любой транспортной компании. Отправка в течение 1-3 дней с момента получения оплаты',
            img: porter
        },
        {
            id: 5,
            title: 'Собственный склад и офис',
            description: 'Будем рады угостить ваc чашечкой кофе в нашем офисе с Екатеринбурге',
            img: storage
        }
    ];

    return (
        <div className='advantages'>
            {arrAdv.map(item =>
                <AdvantageItem item={item} key={item.id} />
            )}
        </div>
    );
};

export default Advantages;