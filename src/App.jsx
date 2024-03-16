import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import View from "./components/View";
import lenis from "./utils/lenis";
import link from "./utils/link";
import TeamPage from "./components/TeamPage";

function App() {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/team" element={<TeamPage />} /> // 경로는 예시, 필요에 맞게 조정
      </Routes>
    </Router>
  );
}

export default App;
