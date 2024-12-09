import "./App.css";
import CMPButton from "./CMPButton";
import { useCountGS } from "./Global";
import Recheiver from "./Recheiver";
import useZustand from "./zustand";

const App = () => {
  const { countZS, clearZS, incrementZS } = useZustand();
  const { countGS, incrementGS, clearGS } = useCountGS();
  return (
    <div className="content">
      <h1 className="text-3xl font-bold underline bg-red-200">PROJECT CHILD</h1>
      <Recheiver countZS={countZS} count={countGS} />
      <br />
      <div>
        <p>Zustand Control</p>
        <span className="flex gap-2">
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
        </span>
      </div>
      <div>
        <p>Global State Control</p>
        <span className="flex gap-2">
          <CMPButton
            typer="primary"
            color="danger"
            size="large"
            onClick={incrementGS}
          >
            INCREMENT
          </CMPButton>
          <CMPButton
            typer="outlined"
            color="primary"
            size="large"
            onClick={clearGS}
          >
            CLEAR
          </CMPButton>
        </span>
      </div>
    </div>
  );
};

export default App;
