import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import View from "./components/View";
import lenis from "./utils/lenis";
import link from "./utils/link";
import TeamPage from "./components/TeamPage";
import { personData } from "./constants";

function App() {
  useEffect(() => {
    lenis();
    link();
  }, []);

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<View />} />
        {personData.map((person) => (
          <Route
            key={person.id}
            path={`/${person.id}`}
            element={<TeamPage person={person} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
