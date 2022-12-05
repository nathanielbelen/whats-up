import { useEffect, useState } from "react";
import Input from "./components/Input";
import Weather from "./components/Weather";
import "./App.css";

import exampleData from "./assets/exampleData.json";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    console.log(location);
  }, [location])

  if (!location) {
    return (
      <div className="container">
        <div className="app-title">what's up</div>
        <Input setLocation={setLocation} />
      </div>
    );
  }

  return (
    <div className="container">
      <Input setLocation={setLocation} />
      <Weather />
    </div>
  )
}

export default App;
