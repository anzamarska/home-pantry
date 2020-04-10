
import React from "react";
import style from "./ShoppingListWrapper.module.scss";
import Title from '../Title/Title';
import ShoppingItem from './ShoppingItem';


const ShoppingList = (props) => (
    <div className={style.wrapper}>
        <Title>shopping list</Title>
        <ul className={style.ul}>
            {props.shopItems.map(shopItem => (
            <ShoppingItem 
            key={shopItem.name} 
            boughtItem={props.boughtItem}
            {...shopItem} />
            ))}
        </ul>
    </div>
);

export default ShoppingList;
