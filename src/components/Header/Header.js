import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/bear.png";

const Header = (props) => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={logoImage} alt="logo" />
    <HeaderNavigation openModalFn={props.openModalFn} />
    {/* <button onClick={openModalFn}> add new item </button> */}
  </header>
);

export default Header;
