import React from "react";
import styles from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className={styles["nav-container"]}>
      <div className={styles.navCardName}>
        <p>David Coveney</p>
      </div>
      <NavLink to="/home" className={styles.navCard}>
        <p>home</p>
      </NavLink>
      <NavLink to="/mybrands" className={styles.navCard}>
        <p>My Brands</p>
      </NavLink>

      <div className={styles.navCard}>
        <a href="#myProjects">My Projects</a>
      </div>
      <div className={styles.navCard}>
        <a target="_blank" href="/contact.html">
          Contact Me
        </a>
      </div>
    </div>
  );
}
