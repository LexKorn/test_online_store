import React from 'react';

import { IAdvantage } from '../../../types/types';

import './advantageItem.sass';


interface AdvantageItemProps {
    item: IAdvantage;
};

const AdvantageItem: React.FC<AdvantageItemProps> = ({item}) => {
    return (
        <div className='advantage'>
            <div className="advantage__title">{item.title}</div>
            <div className="advantage__description">{item.description}</div>
            <img className="advantage__img" src={item.img} alt='img' />
        </div>
    );
};

export default AdvantageItem;