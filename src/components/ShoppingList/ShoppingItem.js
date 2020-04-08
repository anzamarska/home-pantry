import React from 'react';
// import PropTypes from 'prop-types';
import style from './ShoppingItem.module.scss'

const ShoppingItem = ({
    name,
    desireAmount,
    // amount,
    // minNum,
    // onAddAmount,
    // onSubAmount,
    // onConfirmDelete,
    // onAddShopItem
    }) => {
    return (
        <>
            <li className={style.wrapper}>
                {
                    <>
                <p className={style.name}>{name}</p>
                <p className={style.name}>{desireAmount}</p>
                <p>tu chcemy produkty jakich level w spiżarni jest zaniski</p>
                </>
                /* 
                <button className={style.buttonDown} onClick={() => {onSubAmount(name); onAddShopItem(name) }}>-1</button>
                <p className={style.numberBold}>{amount}</p>
                <p>/</p>
                <p className={style.number}>{minNum}</p>
                <button className={style.buttonUp} onClick={() => onAddAmount(name)}>+1</button>
                <button className={style.buttonDelete} onClick={() => onConfirmDelete(name)}>delete</button> */}
            </li>
            
        </>
)};

// ListItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     amount: PropTypes.number,
//     minNum: PropTypes.number,
// };

// ListItem.defaultProps = {
//     amount: "1",
//     minNum: 1,
// }

export default ShoppingItem;
