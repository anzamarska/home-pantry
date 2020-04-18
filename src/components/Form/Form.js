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

const Form = ({ onAddItem, closeModalFn, onAddShopItem, onSubmit } ) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={closeModalFn}>X</button>
    <Title>new stuff in home</Title>
    <form 
    autoComplete="off"  
    onAddItem={onAddItem}>
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

          <div className="radio" >
            <label>
              <input 
              onChange={onAddItem.bind(this)} 
              type="radio" name="category" value={fruits}/>
              fruits
            </label>
          </div>
          <div className="radio">
            <label>
              <input
               onChange={onAddItem.bind(this)}
                type="radio" name="category" value={sweets}/>
              sweets
            </label>
          </div>
          <div className="radio">
            <label>
              <input 
              onChange={onAddItem.bind(this)} 
              type="radio" name="category" value={meat}/>
              meat
            </label>
          </div>
          <div className="radio">
            <label>
              <input 
              onChange={onAddItem.bind(this)}
               type="radio" name="category" value={vegetables}/>
              vegetables
            </label>
          </div>
    
        
        
      <Button onAddShopItem={onAddShopItem}>add new item</Button>
    </form>
  </div>
);

export default Form;