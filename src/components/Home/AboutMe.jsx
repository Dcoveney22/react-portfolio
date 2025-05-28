import React from "react";
import styles from "./home.module.css";

const myProfile = {
  name: "David Coveney",
  title: "My Profile",
  about:
    "With 9 years experience in sales and over 10 years in the hospitality industry, I am a highly self-motivated, confident, and driven individual who thrives on challenges and delivers excellent customer service and sales targets. I have a passion for training and developing my teams and customers, and I have been consistently commended on my leadership skillsI am now aiming to switch my career away from the drinks and hospitality industry. I am training in App/Web Development with IT Career Switch and my own personal mentor",
};

export default function AboutMe() {
  return (
    <div className={styles.profileCard}>
      <h2>{myProfile.title}</h2>
      <p>{myProfile.about}</p>
    </div>
  );
}
