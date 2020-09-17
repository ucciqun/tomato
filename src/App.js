import { Button } from "@material-ui/core";
import React from "react";
import "./App.css";
import { FAB } from "./FAB";
import { Feed } from "./Feed";
import { Header } from "./Header";
import { Provider } from "./Provider";

function App() {
  return (
    <div className="app">
      <Header />
      <Provider>
        <Feed />
        <FAB />
      </Provider>
    </div>
  );
}

export default App;
