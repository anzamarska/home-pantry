import React from "react";
import Form from "../../components/Form/Form";

const AddStuffView = (props) => (
  <Form
    closeModalFn={props.closeModalFn}
    onAddItem={props.addItem}
    onAddShopItem={props.onAddShopItem}
  />
);

export default AddStuffView;
