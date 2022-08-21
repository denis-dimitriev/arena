import "./App.scss";

import { Layout } from "./layout/Layout";
import { Routes, Route, NavLink } from "react-router-dom";
import { Header } from "./templates/header/Header";
import { TabletMenu } from "./organisms/m.organisms/tablet-menu/TabletMenu";
import { Carousel } from "./organisms/carousel/Carousel";
import { useContext } from "react";
import { MobileModalContext } from "../context/mobile-modal";
import { CatalogContext } from "../context/catalog.context";

const App = () => {
  const { openCatalog, setOpenCatalog } = useContext(CatalogContext);
  const { renderingMobileMenu } = useContext(MobileModalContext);

  const setCloseCatalogHandler = () => openCatalog && setOpenCatalog(false);
  return (
    <div className="app" onClick={setCloseCatalogHandler}>
      <Header />
      <Layout>
        <div className="app__container">
          <Carousel />
        </div>
        {renderingMobileMenu}
        <TabletMenu />
      </Layout>
    </div>
  );
};

export default App;
