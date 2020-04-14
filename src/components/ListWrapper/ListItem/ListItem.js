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
    return (
        <>
            <li className={style.wrapper}>
                {/* <span> */}
                <img 
                className={style.categoryImg} 
                url='../../../assets/images/categoryIcon/sweets.png' alt=""/>
                {/* </span> */}
                {/* <img className={styles.categoryImg} src={src} alt=""/> */}
                <p className={style.name}>{name}</p>
                <button className={style.buttonDown} onClick={() => {onSubAmount(name); onAddShopItem(amount, minNum) }}>-1</button>
                <p className={style.numberBold}>{amount}</p>
                <p>/</p>
                <p className={style.number}>{minNum}</p>
                <button className={style.buttonUp} onClick={() => {onAddAmount(name); onAddShopItem(amount, minNum) }}>+1</button>
                <button className={style.buttonDelete} onClick={() => {onConfirmDelete(name); onAddShopItem(amount, minNum) }}>delete</button>
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
