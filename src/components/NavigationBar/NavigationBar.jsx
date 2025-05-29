import React from "react";
import styles from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className={styles["nav-container"]}>
      {/* <div className={styles.navCardName}>
        <p>David Coveney</p>
      </div> */}
      <NavLink to="/home" className={styles.navCard}>
        <p>home</p>
      </NavLink>
      <NavLink to="/mybrands" className={styles.navCard}>
        <p>My Brands</p>
      </NavLink>

      <div className={styles.navCard}>
        <NavLink to="/myprojects">My Projects</NavLink>
      </div>
      <div className={styles.navCard}>
        <NavLink to="/myexperience">My Experience</NavLink>
      </div>
      <div className={styles.navCard}>
        <NavLink to="/contactme">Contact Me</NavLink>
      </div>
    </div>
  );
}
