import React from "react";

const AppCards = props => {
  return (
    <div className="container border border-dark my-3">
      <img
        src={props.card.imgUrl}
        className="img-thumbnail"
        alt="dude seriously"
      />
      <h3>{props.card.title}</h3>
      <p>{props.card.about}</p>
      <p>Phone: {props.card.phone}</p>
    </div>
  );
};

export default AppCards;
