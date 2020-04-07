import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/bear.png'


const Header = () => (
    <header className={styles.wrapper}>
        <img className={styles.logo} src={logoImage} alt="logo"/>
        <HeaderNavigation/>
    </header>

);

export default Header;