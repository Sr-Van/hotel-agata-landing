import React from "react";

import "./App.css";
import "./assets/css/animations.css";

import { Header } from "./shared/components/header.component";
import { Home } from "./shared/components/home.component";
import { MobileBar } from "./shared/components/mobileBar.component";
import { Section1 } from "./shared/components/section1.component";
import { Section2 } from "./shared/components/section2.component";

function App() {
  return (
    <div className="App min-h-lvh relative">
      <Header />
      <Home />
      <Section1 />
      <Section2 />
      <MobileBar />
    </div>
  );
}

export default App;
