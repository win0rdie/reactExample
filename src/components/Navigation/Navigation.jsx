import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      to="/signup"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Форма
    </NavLink>

    <NavLink
      to="/colorpicker"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Колорпикер
    </NavLink>

    <NavLink
      to="/counter"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Счётчик
    </NavLink>

    <NavLink
      to="/clock"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Часы
    </NavLink>

    <NavLink
      to="/pokemon"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Покемоны
    </NavLink>
  </nav>
);

export default Navigation;
