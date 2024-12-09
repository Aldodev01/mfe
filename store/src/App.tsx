import "./App.css";
import { StoreProvider } from "./redux";

const App = () => {
  return (
    <StoreProvider>
      <div className="content">
        <h1>Rsbuild with React</h1>
      </div>
    </StoreProvider>
  );
};

export default App;
