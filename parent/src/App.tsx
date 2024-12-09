import { lazy } from "react";
import "./App.css";
const CMPButton = lazy(() => import("child/CMPButton"));
const App = () => {
  return (
      <div className="content">
        <h1 className="text-3xl font-bold underline text-red-200"></h1>
        <CMPButton typer="primary" color="danger" size="large">
          HEHE
        </CMPButton>
      </div>
  );
};

export default App;
