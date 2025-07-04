import Calculator from "./components/Calculator";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export default function App() {
  return (
    <div style={style}>
      <h1>Simple Calculator</h1>
      <Calculator />
    </div>
  );
}
