import React from 'react';
import PropTypes from 'prop-types';
import style from './ListItem.module.scss'

const ListItem = ({
    name,
    amount,
    minNum,
    onAddAmount,
    onSubAmount,
    onConfirmDelete,
    onAddShopItem
    }) => {
    console.log(amount, minNum);
    return (
        <>
            <li className={style.wrapper}>
                <p className={style.name}>{name}</p>
                <button className={style.buttonDown} onClick={() => {onSubAmount(name); onAddShopItem(amount, minNum) }}>-1</button>
                <p className={style.numberBold}>{amount}</p>
                <p>/</p>
                <p className={style.number}>{minNum}</p>
                <button className={style.buttonUp} onClick={() => onAddAmount(name)}>+1</button>
                <button className={style.buttonDelete} onClick={() => onConfirmDelete(name)}>delete</button>
            </li>
            
        </>
)};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number,
    minNum: PropTypes.number,
};

ListItem.defaultProps = {
    amount: "1",
    minNum: 1,
}

export default ListItem;
