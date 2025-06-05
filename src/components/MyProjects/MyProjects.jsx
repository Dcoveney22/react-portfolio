import React, { useState } from "react";
import Readme from "./Readme";
import ProjectDisplay from "./ProjectDisplay";
import styles from "./MyProjects.module.css";

const projects = [
  {
    id: 1,
    name: "salesDock",
    logo: "./../images/salesDock-NEW700.png",
    readme: "./../images/salesDock-READMEimg.png",
  },

  {
    id: 3,
    name: "fancyFood",
    logo: "./../images/fancyfoodNEWNEW.png",
    readme: "./../images/fancyfoodNEWNEW.png",
  },
  {
    id: 4,
    name: "priceTree",
    logo: "./../images/priceTreeNEW.png",
    readme: "./../images/README-PriceTree.png",
  },
  {
    id: 2,
    name: "spiritSync",
    logo: "./../images/spiritSync-logo-NEWNEW.png",
    readme: "./../images/spiritSync-logo-NEWNEW.png",
  },
];

export default function MyProjects() {
  const [description, setDescription] = useState(null);

  return (
    <div>
      <h2>these are my projects</h2>
      <div className={styles.mainContainer}>
        {projects.map((project) => (
          <ProjectDisplay
            logo={project.logo}
            id={project.id}
            readme={project.readme}
            description={description}
            setDescription={setDescription}
          />
        ))}
      </div>

      <div>{description}</div>
    </div>
  );
}
