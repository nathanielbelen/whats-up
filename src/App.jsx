import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Input from "./components/Input";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [location, setLocation] = useState(null);
  const [showWeather, setShowWeather] = useState(true);

  useEffect(() => {
    if (location) setShowWeather(true);
  }, [location]);

  return (
    <div className="container">
      <AnimatePresence>
        <motion.div
          key={"app-title"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="app-title"
        >
          what's up
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            ☀️
          </motion.span>
        </motion.div>
        <Input setLocation={setLocation} />
        {showWeather && <Weather location={location} key="weather" />}
      </AnimatePresence>
      <footer>
        app by{" "}
        <a href="https://nathanielbelen.com" target="_blank">
          nathaniel
        </a> | <a href="https://github.com/nathanielbelen/whats-up" target="_blank">
        github
        </a>
      </footer>
    </div>
  );
}

export default App;
