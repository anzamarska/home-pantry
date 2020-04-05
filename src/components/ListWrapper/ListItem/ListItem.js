import React from 'react';
import PropTypes from 'prop-types';
import style from './ListItem.module.scss'

const initialStuff = [ {
      name: "pasta",
      amount: 6,
      minNum: 6,
  },
  {
      name: "tomatoes",
      amount: 4,
      minNum: 6,
  },
  {
      name: "rice",
      amount: 7,
      minNum: 4,
  },
  {
    name: "cottage chees",
    amount: 6,
    minNum: 2,
},
    {
        name: "eggs",
        amount: 4,
        minNum: 10,
    },
    {
        name: "bananas",
        amount: 7,
        minNum: 4,
    },
    ];

const ListItem = ({
    name,
    amount,
    onAddAmount,
    onSubAmount
    }) => (
        <>
            <li className={style.wrapper}>
                <p className={style.name}>{name}</p>
                <button className={style.buttonDown} onClick={(e) => onSubAmount(name)}>-1</button>
                <p className={style.number}>{amount}</p>
                <button className={style.buttonUp}onClick={(e) => onAddAmount(name)}>+1</button>
                <button className={style.button}
                //  onClick={confirmDelete}
                 >delete</button>
            </li>
            
        </>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number,
};

ListItem.defaultProps = {
    amount: "1",
}

export default ListItem;
