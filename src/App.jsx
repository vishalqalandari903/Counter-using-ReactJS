import { useEffect, useState } from "react";
import "./App.css";
import { Counter, Header } from "./components";

function App() {
  // const [themeMode, setThemeMode] = useState("dark");
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <Header />
      <Counter />
    </>
  );
}

export default App;
