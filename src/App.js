import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Intro from "./components/Section/Intro";
import Section from "./components/Section/Section";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Logo from "./components/Logo.js"

function App() {
  return (
    <SmoothScroll>
      <Logo />
      <Intro />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
    </SmoothScroll>
  );
}

export default App;