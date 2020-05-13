import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navigationItem}>
        <NavLink
          exact
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink}
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
          to="/addStuff"
        >
          Add New Stuff
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink}
          to="/shoppingList"
        >
          {" "}
          Shopping List
        </NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink
          activeClassName={styles.navigationItemLinkActive}
          className={styles.navigationItemLink}
          to="/notes"
        >
          {" "}
          Notes View
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default HeaderNavigation;
