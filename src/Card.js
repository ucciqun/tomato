import React from "react";
import "./Card.css";

export const Card = ({ name, value, deadline }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="card__detail">
        <h2>{value}個</h2>
        <div className="card__deadline">
          <h4>賞味期限</h4>
          <h4>{deadline}</h4>
        </div>
      </div>
    </div>
  );
};
