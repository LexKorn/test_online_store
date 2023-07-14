import React from 'react';

import ScrollableContainer from '../ScrollableContainer/ScrollableContainer';
import pic01 from '../../../assets/images/catalog/01.png';
import pic02 from '../../../assets/images/catalog/02.png';
import pic03 from '../../../assets/images/catalog/03.png';
import pic04 from '../../../assets/images/catalog/04.png';
import { IProduct } from '../../../types/types';

import './catalog.sass';


const Catalog: React.FC = () => {
    const catalog: IProduct[] = [
        {
            id: 1,
            img: pic01,
            title: 'Ель рожденственная с белыми кончиками',
            infoTitle: 'Высота',
            infoList: [
                {
                    id: 1,
                    value: '60 см'
                },
                {
                    id: 2,
                    value: '90 см'
                },
                {
                    id: 3,
                    value: '120 см'
                },
                {
                    id: 4,
                    value: '150 см'
                },
                {
                    id: 5,
                    value: '180 см'
                },
                {
                    id: 6,
                    value: '210 см'
                },
                {
                    id: 7,
                    value: '240 см'
                },
                {
                    id: 8,
                    value: '270 см'
                },
                {
                    id: 9,
                    value: '300 см'
                },
            ],
            price: '6 331 p.',
        },
        {
            id: 2,
            img: pic02,
            title: 'Сосна с эффектом инея и шишками (от 60 до 300см.)',
            infoTitle: 'Высота',
            infoList: [
                {
                    id: 1,
                    value: '60 см'
                },
                {
                    id: 2,
                    value: '90 см'
                },
                {
                    id: 3,
                    value: '120 см'
                },
                {
                    id: 4,
                    value: '150 см'
                },
                {
                    id: 5,
                    value: '180 см'
                },
                {
                    id: 6,
                    value: '210 см'
                },
                {
                    id: 7,
                    value: '240 см'
                },
                {
                    id: 8,
                    value: '270 см'
                },
                {
                    id: 9,
                    value: '300 см'
                },
            ],
            price: '999 331 p.',
        },
        {
            id: 3,
            img: pic03,
            title: 'Ель комбинированная “Уральская снежная” (ПВХ + РЕ)',
            infoTitle: 'Цвет',
            infoList: [
                {
                    id: 1,
                    value: 'зелёный'
                },
                {
                    id: 2,
                    value: 'тёмный'
                },
                {
                    id: 3,
                    value: 'светлый'
                },
                {
                    id: 4,
                    value: 'голубой'
                },
                {
                    id: 5,
                    value: 'синий'
                },
            ],
            price: '6 331 p.',
        },
        {
            id: 4,
            img: pic04,
            title: 'Ель комбинированная “Уральская весная” (ПВХ + РЕ)',
            infoTitle: 'Цвет',
            infoList: [
                {
                    id: 1,
                    value: 'зелёный'
                },
                {
                    id: 2,
                    value: 'тёмный'
                },
                {
                    id: 3,
                    value: 'светлый'
                },
                {
                    id: 4,
                    value: 'голубой'
                },
                {
                    id: 5,
                    value: 'синий'
                },
            ],
            price: '6 331 p.',
        },
        {
            id: 5,
            img: pic03,
            title: 'Ель комбинированная “Уральская снежная” (ПВХ + РЕ)',
            infoTitle: 'Цвет',
            infoList: [
                {
                    id: 1,
                    value: 'зелёный'
                },
                {
                    id: 2,
                    value: 'тёмный'
                },
                {
                    id: 3,
                    value: 'светлый'
                },
                {
                    id: 4,
                    value: 'голубой'
                },
                {
                    id: 5,
                    value: 'синий'
                },
            ],
            price: '6 331 p.',
        },
        {
            id: 6,
            img: pic04,
            title: 'Ель комбинированная “Уральская весная” (ПВХ + РЕ)',
            infoTitle: 'Высота',
            infoList: [
                {
                    id: 1,
                    value: '60 см'
                },
                {
                    id: 2,
                    value: '90 см'
                },
                {
                    id: 3,
                    value: '120 см'
                },
                {
                    id: 4,
                    value: '150 см'
                },
                {
                    id: 5,
                    value: '180 см'
                },
                {
                    id: 6,
                    value: '210 см'
                },
                {
                    id: 7,
                    value: '240 см'
                },
                {
                    id: 8,
                    value: '270 см'
                },
                {
                    id: 9,
                    value: '300 см'
                },
            ],
            price: '6 331 p.',
        },
    ];

    return (
        <div className='catalog'>
            <div className="catalog__breadcrumbs"><a href="#"><span>Каталог</span></a> / <a href="#">Все товары</a></div>
            <div className='catalog__products'>
                <ScrollableContainer catalog={catalog} />
            </div>
        </div>
    );
};

export default Catalog;