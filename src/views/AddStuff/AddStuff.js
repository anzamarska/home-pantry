import React from "react";
import styles from "./AddStuff.module.scss";
import Form from "../../components/Form/Form";

const AddStuffView = (props) => (
  <div className={styles.wrapper}>
    <Form
      closeModalFn={props.closeModalFn}
      onAddItem={props.addItem}
      onAddShopItem={props.onAddShopItem}
    />
  </div>
);

export default AddStuffView;
