import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="App">
      <Navbar />  
      <Main />
      <Summary />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
