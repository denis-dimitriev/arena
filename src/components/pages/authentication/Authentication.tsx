import "./Authentication.scss";

import { CloseIcon, GoogleIcon } from "../../../assets";
import { ButtonGhost } from "../../atoms/ui/button-ghost/ButtonGhost";
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { ButtonForm } from "../../atoms/ui/button-form/ButtonForm";
import { NavLink, useNavigate } from "react-router-dom";

import { getRedirectResult } from 'firebase/auth'
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogleRedirect,
  signUpWithEmailAndPassword,
} from "../../../utils/firebase.auth";
import { UserContext } from "../../../context/user.context";


interface IFormFields {
  username: string;
  email: string;
  password: string
  confirmPassword: string
}

const initialFormFields: IFormFields = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Authentication = () => {
  const [signup, setSignup] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<IFormFields>(initialFormFields)
  const { username, email, password, confirmPassword } = formFields

  const navigate = useNavigate()

  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormFields({...formFields, [id]: value})
  }

  const onSignUpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Пароли не совпадают')
      return
    }

    try {
      const newUserCredential = await signUpWithEmailAndPassword(email, password)
      if (newUserCredential) {
        navigate('/')
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert("User already exists")
      }
    }

  };

  const onLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userCredential = await logInWithEmailAndPassword(email, password)
      if (userCredential) {
        navigate('/')
      }
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        alert('Пользователь не существует')
      }
    }
  }

  const loginWithGoogleHandler = async () => {
     await signInWithGoogleRedirect()
  }

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        const user = result?.user;
        if (user) {
          navigate('/')
        }
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      console.log(errorCode, errorMessage, email)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])




  const getUserSignUpHandler = () => !signup && setSignup(true);
  const getUserLogInInHandler = () => signup && setSignup(false);

  return (
    <div className="auth">
      <div className="auth__pop-up">
        {signup ? (
          <form className="auth__form form" onSubmit={onSignUpSubmit}>
            <div className="form__header">
              <h3 className="form__title">Регистрация</h3>
              <NavLink to="/">
                <CloseIcon />
              </NavLink>
            </div>
            <div className="form__body">
              <label htmlFor="username">Имя</label>
              <input id="username" type="text" className="form__input" value={username}
                onChange={onInputChangeHandler}
              />
              <label htmlFor="email">Эл. почта</label>
              <input id="email" type="text" className="form__input" value={email}
                     onChange={onInputChangeHandler}
              />
              <label htmlFor="password">Придумайте пароль</label>
              <input id="password" type="password" className="form__input" value={password}
                     onChange={onInputChangeHandler}
              />
              <label htmlFor="confirmPassword">Подтвердите пароль</label>
              <input id="confirmPassword" type="password" className="form__input" value={confirmPassword}
                     onChange={onInputChangeHandler}
              />
              <p className="text">
                Регистрируясь, вы соглашаетесь
                <br /> c пользовательским соглашением
              </p>
            </div>
            <div className="form__bottom">
              <ButtonForm>Зарегистрироваться</ButtonForm>
              <ButtonGhost
                className="form__sign-button"
                onClick={getUserLogInInHandler}
              >
                Войти
              </ButtonGhost>
            </div>
          </form>
        ) : (
          <form className="auth__form form" onSubmit={onLoginSubmit}>
            <div className="form__header">
              <h3 className="form__title">Вход</h3>
              <NavLink to="/">
                <CloseIcon />
              </NavLink>
            </div>
            <div className="form__body">
              <label htmlFor="email">Эл. почта</label>
              <input id="email" type="text" className="form__input" value={email}
                onChange={onInputChangeHandler}
              />
              <label htmlFor="password">Пароль</label>
              <input id="password" type="password" className="form__input" value={password}
                     onChange={onInputChangeHandler}
              />
              <span className="form__checkbox">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Запомнить меня</label>
              </span>
            </div>
            <div className="form__bottom">
              <ButtonForm>Войти</ButtonForm>
              <ButtonForm className="form__google-button" onClick={loginWithGoogleHandler}>
                <GoogleIcon />
                Войти через Google
              </ButtonForm>
              <ButtonGhost
                className="form__sign-button"
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
