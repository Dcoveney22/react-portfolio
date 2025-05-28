import React from "react";
import styles from "./home.module.css";

export default function ProfileImage() {
  return (
    <div className={styles.profileImg}>
      <img src="../../images/profile-image.png" alt="" />
    </div>
  );
}
