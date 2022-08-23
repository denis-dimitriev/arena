import "./Authentication.scss";
import { CloseIcon } from "../../assets";
import { ButtonGhost } from "../../components/atoms/ui/button-ghost/ButtonGhost";
import React, { ChangeEvent, useState } from "react";
import { ButtonForm } from "../../components/atoms/ui/button-form/ButtonForm";
import { NavLink } from "react-router-dom";

const Authentication = () => {
  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [signup, setSignup] = useState<boolean>(false);

  const getUserSignUpHandler = () => !signup && setSignup(true);
  const getUserSignInHandler = () => signup && setSignup(false);

  return (
    <div className="auth">
      <div className="auth__pop-up">
        {signup ? (
          <form className="auth__sign-up-form form" onSubmit={onSubmit}>
            <div className="form__header">
              <h3 className="form__title">Регистрация</h3>
              <NavLink to="/">
                <CloseIcon />
              </NavLink>
            </div>
            <div className="form__body">
              <label htmlFor="username">Имя</label>
              <input id="username" type="text" className="form__input" />
              <label htmlFor="email">Эл. почта</label>
              <input id="email" type="text" className="form__input" />
              <label htmlFor="tel">Номер телефона</label>
              <input id="tel" type="text" className="form__input" />
              <label htmlFor="password">Придумайте пароль</label>
              <input id="password" type="password" className="form__input" />
              <p className="text">
                Регистрируясь, вы соглашаетесь
                <br /> c пользовательским соглашением
              </p>
            </div>
            <div className="form__bottom">
              <ButtonForm>Зарегистрироваться</ButtonForm>
              <ButtonGhost
                className="form__bottom__button"
                onClick={getUserSignInHandler}
              >
                Войти
              </ButtonGhost>
            </div>
          </form>
        ) : (
          <form className="auth__sign-in-form form" onSubmit={onSubmit}>
            <div className="form__header">
              <h3 className="form__title">Вход</h3>
              <NavLink to="/">
                <CloseIcon />
              </NavLink>
            </div>
            <div className="form__body">
              <label htmlFor="email">Эл. почта или телефон</label>
              <input id="email" type="text" className="form__input" />
              <label htmlFor="password">Пароль</label>
              <input id="password" type="password" className="form__input" />
              <span className="form__checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Запомнить меня</label>
              </span>
            </div>
            <div className="form__bottom">
              <ButtonForm>Войти</ButtonForm>
              <ButtonGhost
                className="form__bottom__button"
                onClick={getUserSignUpHandler}
              >
                Зарегистрироваться
              </ButtonGhost>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Authentication;
