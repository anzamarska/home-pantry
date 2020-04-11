
import React from "react";
import style from "./ShoppingListWrapper.module.scss";
import Title from '../Title/Title';
import ShoppingItem from './ShoppingItem';


const ShoppingList = (props) => (
    <div className={style.wrapper}>
        <Title>shopping list</Title>
        { props.shopItems.length > 0 ? (
            
        <ul className={style.ul}>
            {props.shopItems.map(shopItem => (
            <ShoppingItem 
            key={shopItem.name} 
            boughtItem={props.boughtItem}
            {...shopItem} />
            ))}
        </ul>
        ) : (
            <p>you haven't got any products.</p>
        ) }
    </div>
);

export default ShoppingList;
