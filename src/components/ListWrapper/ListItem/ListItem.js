import React from "react";
import PropTypes from "prop-types";
import style from "./ListItem.module.scss";
import sweets from "../../../assets/images/categoryIcon/sweets.png";
import meat from "../../../assets/images/categoryIcon/meat.png";
import fruits from "../../../assets/images/categoryIcon/fruits.png";
import vegetables from "../../../assets/images/categoryIcon/vegetables.png";
import eggs from "../../../assets/images/categoryIcon/eggs.png";

const ListItem = ({
  name,
  category,
  amount,
  minNum,
  onAddAmount,
  onSubAmount,
  onConfirmDelete,
  onAddShopItem,
}) => {
  return (
    <>
      <li className={style.wrapper}>
        {/* <span> */}
        <img
          className={style.categoryImg}
          src={category}
          // alt={category.name}
        />
        {/* </span> */}
        <p className={style.name}>{name}</p>
        <button
          className={style.buttonDown}
          onClick={() => {
            onSubAmount(name);
            onAddShopItem(amount, minNum);
          }}
        >
          -1
        </button>
        <p className={style.numberBold}>{amount}</p>
        <p>/</p>
        <p className={style.number}>{minNum}</p>
        <button
          className={style.buttonUp}
          onClick={() => {
            onAddAmount(name);
            onAddShopItem(amount, minNum);
          }}
        >
          +1
        </button>
        <button
          className={style.buttonDelete}
          onClick={() => {
            onConfirmDelete(name);
            onAddShopItem(amount, minNum);
          }}
        >
          delete
        </button>
      </li>
    </>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number,
  minNum: PropTypes.number,
};

ListItem.defaultProps = {
  amount: "1",
  minNum: 1,
};

export default ListItem;
