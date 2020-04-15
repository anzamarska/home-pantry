// const Form = ({ submitFn }) => (
//     <Form onSubmit={submitFn}>
//         <input placeholder="name" name="name"/>
//         <input placeholder="amount" name="amount"/>
//         <button type="submit">
//             add new item
//         </button>

//     </Form>
// );

// export default Form;

import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';

const Form = ({ submitFn, closeModalFn } ) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={closeModalFn}>close</button>
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
      <Input
        name="category.icon"
        label="category?"
        type="text"
      />
      <Input
        name="category.name"
        label="category?"
        type="text"
      />
  
      {/* <form>
        <div className="radio">
          <label>
            <input type="radio" name="category" value="option1" />
            fruits
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="category" value="option2" />
            vegetables
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="category" value="option3" />
            meat
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="category" value="option4" />
            sweets
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="category" value="option5" />
            eggs
          </label>
        </div>
      </form>
         */}
      <Button 
      // addShopItem={props.addShopItem}
      >add new item</Button>
    </form>
  </div>
);

export default Form;