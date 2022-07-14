import React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/logo.png';
export default function Header() {
  return (
    <header>
      <div className={styles.headerBg}>
        <div className={styles.logo}>
          <div className={styles.logoBlock}>
            <img src={logo} alt="" />
            <h1>ImageMan</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
