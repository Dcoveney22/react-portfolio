import React from "react";

import Brand from "./Brand";

const myBrands = [
  {
    brand: "spiritSync",
    logo: "./../images/spiritSync-logo-NEWNEW.png",
  },
  {
    brand: "salesDock",
    logo: "./../images/salesDock-NEW700.png",
  },
];

export default function MyBrands() {
  return <Brand brands={myBrands} />;
}
