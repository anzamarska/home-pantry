import React from 'react';
// import PropTypes from 'prop-types';
import style from './ShoppingItem.module.scss'

const ShoppingItem = ({
    name,
    desireAmount,
    boughtItem
    }) => {
    return (
        <>
            <li className={style.wrapper}>
                {
                    <>
                <p className={style.name}>{name}</p>
                <p className={style.name}>{desireAmount}</p>
                <button className={style.buttonBought} onClick={() => boughtItem(name)}>bought</button>
                    </>
                }
            </li>
            
        </>
)};

export default ShoppingItem;
