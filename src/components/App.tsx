import "./App.scss";

import { Layout } from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Header } from "./templates/header/Header";
import { TabletMenu } from "./organisms/m.organisms/tablet-menu/TabletMenu";
import { useContext } from "react";
import { MobileModalContext } from "../context/mobile-modal";
import { CatalogContext } from "../context/catalog.context";
import Homepage from "./pages/homepage/Homepage";
import Authentication from "./pages/authentication/Authentication";
import UserPage from "./pages/user-page/UserPage";
import AddNewAd from "./pages/add-new-ad/AddNewAd";

const App = () => {
  const { setCloseCatalogHandler } = useContext(CatalogContext);
  const { renderingMobileMenu } = useContext(MobileModalContext);

  return (
    <div className="app" onClick={setCloseCatalogHandler}>
      <Header />
      <Layout>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="user-page/*" element={<UserPage />} />
          <Route path="add-new-advertisement" element={<AddNewAd />} />
        </Routes>
        {renderingMobileMenu}
        <TabletMenu />
      </Layout>
    </div>
  );
};

export default App;
