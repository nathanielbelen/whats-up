import { useState } from "react";
import Input from "./components/Input";
import "./App.css";

import exampleData from "./assets/exampleData.json";

function App() {
  const [count, setCount] = useState(0);
  console.log(exampleData);
  return (
    <div className="container">
      <div className="app-title">
        what's up
      </div>
      <Input />
    </div>
  );
}

export default App;
