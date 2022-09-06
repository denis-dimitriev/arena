import "./UserPage.scss";

import { NavLink, Route, Routes } from "react-router-dom";
import { ButtonGhost } from "../../ui/atoms/button-ghost/ButtonGhost";
import { UserGeneralData } from "../../sub-routes/user-general-data/UserGeneralData";
import { UserPersonalData } from "../../sub-routes/user-personal-data/UserPersonalData";
import { ChangePassword } from "../../sub-routes/change-password/ChangePassword";

const UserPage = () => {
  return (
    <div className="user-page">
      <div className="user-page__container">
        <h2 className="category__title">Личный кабинет</h2>
        <div className="grid">
          <div className="user-page__category category">
            <ul className="category__list">
              <li className="category__list-item">
                <NavLink className="item-link" to="/user-page">
                  Общие сведения
                </NavLink>
              </li>
              <li className="category__list-item">
                <NavLink className="item-link" to="personal-data">
                  Личные данные
                </NavLink>
              </li>
              <li className="category__list-item">
                <NavLink className="item-link" to="watched-data">
                  История просмотров
                </NavLink>
              </li>
              <li className="category__list-item">
                <NavLink className="item-link" to="favorites-data">
                  Избранное
                </NavLink>
              </li>
              <li className="category__list-item">
                <NavLink className="item-link" to="change-password">
                  Сменить пароль
                </NavLink>
              </li>
              <li className="category__list-item">
                <ButtonGhost className="item-button">Выйти</ButtonGhost>
              </li>
            </ul>
          </div>

          <div className="user-page__info">
            <Routes>
              <Route index element={<UserGeneralData />} />
              <Route path="personal-data" element={<UserPersonalData />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
