import React from "react";

export default function FavoriteButton({ onClickHandler }) {
  return (
    <button className="favorite-button" onClick={onClickHandler}>
      <img className="heart-icon" alt="" src="./Icon.svg" />
    </button>
  );
}
