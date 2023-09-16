import "./App.css";
import Home from "./components/Home/Home";
import Credit from "./components/Credit/Credit";

function App() {
  return (
    <>
      <Home></Home>
      <div className="main">
        <Credit></Credit>
      </div>
    </>
  );
}

export default App;
