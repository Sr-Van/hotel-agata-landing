import React from "react";

import "./App.css";

import { Header } from "./shared/components/header.component";
import { Home } from "./shared/components/home.component";
import { MobileBar } from "./shared/components/mobileBar.component";

function App() {
  return (
    <div className="App min-h-lvh relative">
      <Header />
      <Home />

      <MobileBar />
    </div>
  );
}

export default App;
