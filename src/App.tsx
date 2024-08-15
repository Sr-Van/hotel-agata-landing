import React from "react";

import "./App.css";
import "./assets/css/animations.css";

import { Header } from "./shared/components/header.component";
import { Home } from "./shared/components/home.component";
import { MobileBar } from "./shared/components/mobileBar.component";
import { Section1 } from "./shared/components/section1.component";
import { Section2 } from "./shared/components/section2.component";
import { Section3 } from "./shared/components/section3.component";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App min-h-lvh relative">
      <Header />
      <Home />
      <Section1 />
      <Section2 />
      <Section3 />
      <MobileBar />
    </div>
  );
}

export default App;
