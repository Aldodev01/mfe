import "./App.css";
import CMPButton from "./CMPButton";
import Recheiver from "./Recheiver";
import useZustand from "./zustand";

const App = () => {
  const { countZS, clearZS, incrementZS } = useZustand();
  return (
    <div className="content">
      <h1 className="text-3xl font-bold underline bg-red-200">
       PROJECT CHILD
      </h1>
      <Recheiver countZS={countZS} />
      <br />
     
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
