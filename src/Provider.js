import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const dataList = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([
    {
      name: "とまと",
      value: 4,
      deadline: "2020/09/12",
    },
    {
      name: "じゃがいも",
      value: 2,
      deadline: "2020/09/13",
    },
    {
      name: "きゅうり",
      value: 8,
      deadline: "2020/09/24",
    },
  ]);
  return (
    <dataList.Provider value={[items, setItems]}>{children}</dataList.Provider>
  );
};
