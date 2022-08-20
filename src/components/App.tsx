import "./App.scss";

import { Layout } from "./layout/Layout";
import { Routes, Route, NavLink } from "react-router-dom";
import { Header } from "./templates/header/Header";
import { TabletMenu } from "./organisms/tablet-menu/TabletMenu";
import { CatalogMenu } from "./molecules/catalog-menu/CatalogMenu";
import { useContext } from "react";
import { CatalogContext } from "../context/catalog.context";
import { Carousel } from "./organisms/carousel/Carousel";

const App = () => {
  const { open, setOpen } = useContext(CatalogContext);

  const closeMenuHandler = () => open && setOpen(!open);

  return (
    <div className="app" onClick={closeMenuHandler}>
      <Header />
      <Layout>
        <div className="app__container">
          <CatalogMenu />
          <Carousel />
        </div>
        <TabletMenu />
      </Layout>
    </div>
  );
};

export default App;
