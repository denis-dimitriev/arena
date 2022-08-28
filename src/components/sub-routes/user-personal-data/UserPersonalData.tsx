import "./UserPersonalData.scss";
import { ButtonForm } from "../../atoms/ui/button-form/ButtonForm";

export const UserPersonalData = () => {
  return (
    <form id="personal-data" className="personal-data">
      <div className="personal-data__column">
        <label htmlFor="username">Имя</label>
        <input id="username" type="text" className="personal-data__input" />
        <label htmlFor="username">Эл. почта</label>
        <input id="email" type="email" className="personal-data__input" />
        <label htmlFor="tel">Телефон</label>
        <input id="tel" type="tel" className="personal-data__input" />
      </div>

      <div className="personal-data__column">
        <label htmlFor="region">Город</label>
        <select
          name="region"
          form="personal-data"
          className="personal-data__select"
        >
          <option value="1">uno</option>
          <option value="2">dos</option>
          <option value="3">tres</option>
          <option value="4">cinco</option>
        </select>
        <label htmlFor="avatar">Аватарка</label>
        <input
          id="avatar"
          type="file"
          className="personal-data__input"
          accept="image/png, image/jpeg"
        />
        <ButtonForm>Сохранить</ButtonForm>
      </div>
    </form>
  );
};
