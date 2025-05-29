import React from "react";
import cvArray from "./experienceData";
import JobPost from "./JobPost";
import styles from "./JobPost.module.css";

console.log();

export default function MyExperience() {
  return (
    <div className={styles.cvContainer}>
      <div className={styles.pageTitle}>
        <h2>MY EXPERIENCE</h2>
      </div>
      {cvArray.map((job) => (
        <JobPost
          dates={job.dates}
          id={job.id}
          title={job.title}
          employer={job.employer}
          paragraph1={job.paragraph1}
          paragraph2={job.paragraph2}
          paragraph3={job.paragraph3}
          paragraph4={job.paragraph4}
        />
      ))}
    </div>
  );
}
