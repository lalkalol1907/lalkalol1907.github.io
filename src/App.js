import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <About />
      <Work />
      <Nav />
      <div className="h-[100px]"></div>
    </div>
  );
};

export default App;
