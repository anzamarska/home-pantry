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

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>new stuff in home</Title>
    <form 
    autoComplete="off" 
    // className={styles.form} 
    onSubmit={submitFn}>
      <Input
        name="name"
        // label="Name"
        maxLength={30}
        label="name of new stuff"
      />
      <Input
        name="amount"
        // label="Amount"
        label="how many you wanna add?"
        type="number"
      />
      <Input
        name="minNum"
        // label="minNum"
        label="how much of this product you would like to have in home?"
        type="number"
      />
      <Button>add new item</Button>
    </form>
  </div>
);

export default Form;