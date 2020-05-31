import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = (props) => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navigationItem}>
        <NavLink
          exact
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink}
          onClick={props.openModalFn}
          to="/"
        >
          {" "}
          Home Page
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink}
          onClick={props.closeModalFn}
          to="/addStuff"
        >
          Add New Stuff
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink}
          onClick={props.closeModalFn}
          to="/shoppingList"
        >
          {" "}
          Shopping List
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default HeaderNavigation;
