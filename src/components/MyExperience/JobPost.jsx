import React from "react";
import styles from "./JobPost.module.css";
import FavoriteButton from "./FavoriteButton";

export default function JobPost(props) {
  return (
    <div className={styles.cvContainer}>
      <div className={styles.jobCard}>
        <h3>{props.id}</h3>
        <h2>Dates of Employment: {props.dates}</h2>
        <h2>Title: {props.title}</h2>
        <h2>Employer: {props.employer}</h2>
        <h3>Key Experience</h3>
        <h4>{props.paragraph1}</h4>
        <h4>{props.paragraph2}</h4>
        <h4>{props.paraghraph3}</h4>
        <h4>{props.paraghraph4}</h4>
        <FavoriteButton />
      </div>
    </div>
  );
}
