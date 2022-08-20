import "./App.scss";

import { Layout } from "./layout/Layout";
import { Routes, Route, NavLink } from "react-router-dom";
import { Header } from "./templates/header/Header";
import { TabletMenu } from "./organisms/tablet-menu/TabletMenu";
import { CatalogMenu } from "./molecules/catalog-menu/CatalogMenu";
import { Carousel } from "./organisms/carousel/Carousel";
import { MobileModal } from "./molecules/mobile-modal/MobileModal";
import { useContext } from "react";
import { MobileModalContext } from "../context/mobile-modal";

const App = () => {
  const { openMobileModal } = useContext(MobileModalContext);

  return (
    <div className="app">
      <Header />
      <Layout>
        <div className="app__container">
          <Carousel />
        </div>
        {openMobileModal && (
          <MobileModal title={"Каталог"}>
            <CatalogMenu />
          </MobileModal>
        )}
        <TabletMenu />
      </Layout>
    </div>
  );
};

export default App;
