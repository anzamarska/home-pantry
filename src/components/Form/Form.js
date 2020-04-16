import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';
import sweets from '../../assets/images/categoryIcon/sweets.png';
import meat from '../../assets/images/categoryIcon/meat.png';
import fruits from '../../assets/images/categoryIcon/fruits.png';
import vegetables from '../../assets/images/categoryIcon/vegetables.png';

console.log("fruits", fruits);
const fruits1 = {name:"fruits", icon: fruits}

const Form = ({ submitFn, closeModalFn, onAddShopItem } ) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={closeModalFn}>X</button>
    <Title>new stuff in home</Title>
    <form 
    autoComplete="off"  
    onSubmit={submitFn}>
      <Input
        name="name"
        maxLength={30}
        label="name of new stuff"
      />
      <Input
        name="amount"
        label="how many you wanna add?"
        type="number"
      />
      <Input
        name="minNum"
        label="how much of this product you would like to have in home?"
        type="number"
      />
      
          <div className="radio">
            <label>
              <input type="radio" name="category" value={sweets}/>
              fruits
            </label>
          </div>
          {/* <div className="radio">
            <label>
              <input type="radio" name="category" value.name="vegetables" value.icon: vegetables}} />
              vegetables
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="category" value={{name: "meat", icon: meat}} />
              meat
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="category" value={{name:"sweets", icon: sweets}} />
              sweets
            </label>
          </div> */}
        
        
      <Button onAddShopItem={onAddShopItem}>add new item</Button>
    </form>
  </div>
);

export default Form;