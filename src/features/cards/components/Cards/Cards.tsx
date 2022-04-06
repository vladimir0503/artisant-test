import React from 'react';
import { AppDispatch, RootState } from '../../../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { getCards, sortByAvailable } from '../../cardsSlice';
import Card from '../Card/Card';

import s from './Cards.module.scss';

const Cards = (): JSX.Element => {
    const [isAvailable, setAvailable] = React.useState(false);

    const { cards } = useSelector((state: RootState) => state.cards);

    const dispatch = useDispatch<AppDispatch>();

    const sortCards = () => {
        setAvailable(!isAvailable);
    };

    React.useEffect(() => {
        if (!isAvailable) {
            dispatch(getCards());
        } else {
            dispatch(sortByAvailable());
        };
    }, [isAvailable]);

    console.log(cards);

    return (
        <div className={s.cards}>
            <div className={s.title}>
                <h1 className={s.title}>Explore</h1>
                <p>Buy and sell digital fashion NFT art</p>
                <div className={s.checkBox}>
                    <input onChange={sortCards} type='checkbox' checked={isAvailable}></input>
                    <label>in available</label>
                </div>
            </div>
            <div className={s.cardsBlock}>
                {cards.map(({ initial_price, created_by, name }, i) =>
                    <Card
                        key={i}
                        price={initial_price}
                        creator={created_by}
                        name={name}
                    />
                )}
            </div>
        </div>
    );
};

export default Cards;