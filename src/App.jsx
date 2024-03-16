import React, { useEffect } from "react";
import './App.css';
import View from "./components/View";
import lenis from "./utils/lenis";
import link from "./utils/link";

function App() {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <View />
  );
}

export default App;
