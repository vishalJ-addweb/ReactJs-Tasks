import React from "react";
import AppBarWithSearch from "./components/AppBarWithSearch";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App(props) {
  return (
    <>
      <AppBarWithSearch />
      <SideBar />
      <Footer />
    </>
  );
}

export default App;
