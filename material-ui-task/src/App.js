import React, { useState } from "react";
import AppBarWithSearch from "./components/AppBarWithSearch";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  // const isClose = () => {
  //   setOpenDrawer(false);
  // };

  return (
    <>
      <AppBarWithSearch drawerOpen={handleDrawerOpen} />
      <SideBar isOpen={openDrawer} isClose={handleDrawerOpen} />
      <Footer />
    </>
  );
}

export default App;
