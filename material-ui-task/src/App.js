import React, { useState } from "react";
import AppBarWithSearch from "./components/fixed/AppBarWithSearch";
import Footer from "./components/fixed/Footer";
import SideBar from "./components/fixed/SideBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <Router>
        <AppBarWithSearch drawerOpen={handleDrawerOpen} />
        <SideBar isOpen={openDrawer} isClose={handleDrawerOpen} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
