import "./App.css";
import CMPButton from "./CMPButton";


const App = () => {
  return (
    <div className="content">
      <h1 className="text-3xl font-bold underline bg-red-200">Rsbuild with React</h1>
      <CMPButton typer="primary" color="danger" size="large">
        HEHE
      </CMPButton>
    </div>
  );
};

export default App;
