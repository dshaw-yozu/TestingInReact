import React from "react";

const style = {
  display: "flex",
  flexDirection: "column",
};
export default function Input({ label, onChange }) {
  const handleOnChange = () => {
    onChange(1);
  };

  return (
    <label style={style}>
      {label}
      <input onChange={handleOnChange} />
    </label>
  );
}
