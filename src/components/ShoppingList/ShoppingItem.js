import React from "react";
// import PropTypes from 'prop-types';
import style from "./ShoppingItem.module.scss";
import Imput from "../Input/Input";

const ShoppingItem = ({ name, desireAmount, boughtItem }) => {
  return (
    <>
      <li className={style.wrapper}>
        {
          <>
            <p className={style.name}>{name}</p>
            <p className={style.name}>{desireAmount}</p>
            <input
              className={style.input}
              name="amount"
              placeholder="how many you bought?"
              type="number"
              // value={this.state.value}
              // onChange={(e) => boughtItem(e)}
            />
            <button
              className={style.buttonBought}
              onClick={() => boughtItem(name)}
            >
              bought
            </button>
          </>
        }
      </li>
    </>
  );
};

export default ShoppingItem;
