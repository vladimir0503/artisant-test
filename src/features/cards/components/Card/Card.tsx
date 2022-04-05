import React from 'react';

import s from './Card.module.scss'

type CardProps = {
    price: string,
    creator: {
        display_name: string
    },
    name: string
};

const Card = ({ price, creator, name }: CardProps): JSX.Element => {

    return (
        <div className={s.card}>
            <div className={s.imageBlock}>
                <div className={s.createdBlock}>
                    <p>created by</p>
                    <p>{creator.display_name}</p>
                </div>
                <div className={s.nameBlock}>
                    <p>{name}</p>
                </div>
            </div>
            <div className={s.priceBlock}>
                <div>
                    <p>available</p>
                    <p>1 of 50</p>
                </div>
                <div>
                    <p>price</p>
                    <p><span>{price} ETH</span></p>
                </div>
            </div>
        </div>
    );
};

export default Card;