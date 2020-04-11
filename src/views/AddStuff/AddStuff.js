import React from 'react';
import Form from '../../components/Form/Form';


const AddStuffView = (props) => (
    <Form 
    submitFn={props.addItem}
    onAddShopItem={props.addShopItem}/>
);

export default AddStuffView;