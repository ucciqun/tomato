import React from "react";
import "./Feed.css";
import { Card } from "./Card";
import { useContext } from "react";
import { dataList } from "./Provider";

export const Feed = () => {
  //Cardを並べる
  const [items, setItems] = useContext(dataList);

  return (
    <div>
      {items.map((e) => (
        <Card name={e.name} value={e.value} deadline={e.deadline} />
      ))}
    </div>
  );
};
