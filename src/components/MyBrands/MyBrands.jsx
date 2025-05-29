import React from "react";
import Brand from "./Brand";

const myBrands = [
  {
    brand: "spiritSync",
    logo: "./../images/spiritSync-logo-NEWNEW.png",
    id: 1,
  },
  {
    brand: "salesDock",
    logo: "./../images/salesDock-NEW700.png",
    id: 1,
  },
];

export default function MyBrands() {
  return (
    <section id="mybrands">
      <h2>My Brands</h2>
      <div>
        {myBrands.map((brand) => (
          <Brand key={brand.id} name={brand.brand} logo={brand.logo} />
        ))}
      </div>
    </section>
  );
}
