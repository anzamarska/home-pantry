import React from 'react';
import PropTypes from 'prop-types';
import style from './ListItem.module.scss'



const ListItem = ({
    name,
    amount
    }) => {
        

        function subAmount() {
            alert('Hello');
        }
        
        function addAmount() {
            {amount} + 1;
        }
        
        function confirmDelete (key) {
            let agreement = window.confirm('Do you want to delete this item?')
               ? null
            //    removeItem 
               : null};
        
        // const removeItem = (key) => {
        // const newState = this.state.products.filter(
        //     (item) => {
        //         return item[0] !== key;
        //     }
        // )};
        
        // this.setState({
        //     products: newState,
        // });
                
       return (
        <>
            <li className={style.wrapper}>
                <p className={style.name}>{name}</p>
                <button className={style.buttonDown} onClick={subAmount}>-1</button>
                <p className={style.number}>{amount}</p>
                <button className={style.buttonUp}onClick={addAmount}>+1</button>
                <button className={style.button} onClick={confirmDelete}>delete</button>
            </li>
            
        </>
)};

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.number,
};

ListItem.defaultProps = {
    amount: "1",
}

export default ListItem;
