import {
  Dialog,
  DialogTitle,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import React, { useContext } from "react";
import "./AddDialog.css";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import { dataList } from "./Provider";

export const AddDialog = ({ onClose, open }) => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState("");
  const [items, setItems] = useContext(dataList);
  const today = new Date();
  const date = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };
  if (date.month <= 9) {
    date.month = "0" + date.month.toString();
  }
  const [limit, setLimit] = useState(`${date.year}-${date.month}-${date.day}`);
  const onSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        name: { item },
        value: { count },
        deadline: { limit },
      },
    ]);
    setCount(1);
    setItem("");
    setLimit(`${date.year}-${date.month}-${date.day}`);
  };
  return (
    <Dialog onClose={onClose} open={open} className="addDialog">
      <DialogTitle>買ったものを記録する</DialogTitle>
      <TextField
        placeholder="品名"
        className="addDialog__input"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <TextField
        className="addDialog__input"
        type="date"
        label="賞味期限/消費期限"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
      <div className="addDialog__counter">
        <IconButton onClick={() => setCount(count - 1)}>
          <RemoveIcon />
        </IconButton>
        <h2>{count}</h2>
        <IconButton onClick={() => setCount(count + 1)}>
          <AddIcon />
        </IconButton>
      </div>
      <Button
        type="submit"
        onClick={(e) => {
          onClose();
          onSubmit(e);
        }}
        style={{ backgroundColor: "#ee6352", color: "white", marginTop: 16 }}
      >
        記録する
      </Button>
    </Dialog>
  );
};
