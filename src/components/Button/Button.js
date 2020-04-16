import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, href, onAddShopItem }) => (
  <>
    {
      href ? (
        <a
          href={href}
          target="_blank"
          className={styles.button}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
          <button className={styles.button} 
          onClick={() => onAddShopItem()}
          >
            {children}
          </button>
        )
    }
  </>
);

export default Button;