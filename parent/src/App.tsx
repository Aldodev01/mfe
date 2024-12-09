import { lazy } from "react";
import "./App.css";
const CMPButton = lazy(() => import("child/CMPButton"));
import useZustand from "child/zustand";

const App = () => {
  const { countZS, clearZS, incrementZS } = useZustand();
  return (
    <div className="content">
    <h1 className="text-3xl font-bold underline bg-red-200">
     PROJECT PARENT
    </h1>
    <p>{countZS}</p>
    <div className="flex gap-2">
      <CMPButton
        typer="primary"
        color="danger"
        size="large"
        onClick={incrementZS}
      >
        INCREMENT
      </CMPButton>
      <CMPButton
        typer="outlined"
        color="primary"
        size="large"
        onClick={clearZS}
      >
        CLEAR
      </CMPButton>
    </div>
  </div>
  );
};

export default App;
