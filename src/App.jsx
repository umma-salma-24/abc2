import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Credit from "./components/Credit/Credit";

function App() {
  const [count, setCount] = useState(0);

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
