import "./App.css";
import { StoreProvider, useStore } from "./redux";

const App = () => {
  const { countRX, incrementRX, clearRX } = useStore();
  return (
    <StoreProvider>
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>{countRX}</p>
        <button onClick={incrementRX}>Increment</button>
      </div>
    </StoreProvider>
  );
};

export default App;
