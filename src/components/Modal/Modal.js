import React from 'react';
import styles from "./Modal.module.scss";
import Form from '../../components/Form/Form';

const Modal = (props) => (
    <div className={styles.wrapper}>
        <Form 
            closeModalFn={props.closeModalFn}
            submitFn={props.addItem}
            onAddShopItem={props.addShopItem}/>
    </div>
);

export default Modal;


