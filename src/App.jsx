import React, { useEffect } from "react";
import './App.css';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from "./components/Footer";
import lenis from "./utils/lenis";
import link from "./utils/link";

function App() {
  useEffect(() => {
    lenis();
    link();
}, []);

  return (
    <div >
        <Banner />
        <div><Main /></div>
        <Footer />
    </div>
  );
}

export default App;
