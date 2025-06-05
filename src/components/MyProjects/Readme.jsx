import React from "react";
import styles from "./MyProjects.module.css";

export default function Readme(props) {
  console.log(props.readme);

  return (
    <div>
      <h2>{props.name}</h2>
      <div>
        <img
          id={props.id}
          className={styles.readme}
          src={props.readme}
          alt=""
        />
      </div>
    </div>
  );
}
