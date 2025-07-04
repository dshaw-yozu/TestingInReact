import React from "react";
import { render } from "react-dom";
import Calculator from "./components/Calculator";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const App = () => (
  <div style={styles}>
    <h1>Rubbish Calculator™</h1>
    <Calculator />
  </div>
);

render(<App />, document.getElementById("root"));
