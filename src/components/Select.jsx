import React from "react";

const style = {
  display: "flex",
  flexDirection: "column",
};

export default function Select({ options, onChange }) {
  return (
    <label style={style}>
      Operators
      <select></select>
    </label>
  );
}
