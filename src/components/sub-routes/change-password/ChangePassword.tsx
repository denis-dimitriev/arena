import "./ChangePassword.scss";
import { ButtonForm } from "../../atoms/ui/button-form/ButtonForm";

export const ChangePassword = () => {
  return (
    <form id="change-password" className="change-password">
      <label htmlFor="old">Введите старый пароль</label>
      <input id="old" type="password" className="change-password__input" />
      <label htmlFor="new">Введите новый пароль</label>
      <input id="new" type="password" className="change-password__input" />
      <label htmlFor="new-confirm">Повторите новый пароль</label>
      <input
        id="new-confirm"
        type="password"
        className="change-password__input"
      />
      <ButtonForm>Сохранить изменения</ButtonForm>
    </form>
  );
};
