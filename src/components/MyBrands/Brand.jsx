import React from "react";

export default function Brand(props) {
  props.brands.map((brand) => {
    console.log(brand.logo);
    return (
      <div>
        <p>this brand is {brand.brand} </p>
        <div>
          <img src={brand.logo} alt="" />
        </div>
      </div>
    );
  });
}
