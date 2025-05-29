import React from "react";

export default function Brand(props) {
  return (
    <div>
      <p>
        <h3>{props.name}</h3>
      </p>
      <div>
        <img src={props.logo} alt="" />
      </div>
    </div>
  );
}
