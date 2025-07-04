import Input from "./Input";
import React, { useState } from "react";
import Select from "./Select";
import Button from "./Button";

const style = {
  display: "flex",
  gap: "8px",
  justifyContent: "center",
};

export default function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <div style={style}>
        <Input label="A" onChange={setA} />
        <Select label="Operator" />
        <Input label="B" onChange={setA} />
        <p>Result: 50</p>
      </div>
      <Button text="reset" onClick={() => alert("RESET TODO")} />
    </div>
  );
}
