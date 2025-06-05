import React from "react";
import Readme from "./Readme";
import styles from "./MyProjects.module.css";
import { useState } from "react";

export default function ProjectDisplay(props) {
  function addDescription() {
    if (props.description === null) {
      props.setDescription(
        <Readme id={props.id} readme={props.readme} name={props.name} />
      );
    } else {
      props.setDescription(null);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        <img onClick={addDescription} src={props.logo} alt="" />
      </div>
      <div></div>
    </div>
  );
}
