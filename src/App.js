import React from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
<Header/>
<Hero/>
<h1 className="text-teal-600 font-medium text-2xl">Skills</h1>
<Skills/>
<h1 className="text-teal-800 font-medium text-2xl">My Projects</h1>
<Projects/>
<Buttons/>

    </div>
  );
}

export default App;
