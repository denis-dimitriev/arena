import "./AddNewAdvertisement.scss";

import { AdsSpecs } from "../../molecules/ads-specs/AdsSpecs";
import { ButtonForm } from "../../ui/atoms/button-form/ButtonForm";
import { CustomSelect } from "../../ui/custom-select/CustomSelect";
import { region } from "../../../models/region.model";

const category = [
  "Велосипеды",
  "Электровелосипеды",
  "Электроскутеры",
  "Аксессуары",
];

const AddNewAdvertisement = () => {
  return (
    <div className="add-new">
      <h1 className="add-new__title">Заполните объявление</h1>
      <form id="add-new" className="add-new__form form">
        <div className="form__category block">
          <CustomSelect label={"Раздел"} arrayToMap={category} />
        </div>
        <div className="form__offer block">
          <p>Тип предложения*</p>
          <div className="form__offer-type">
            <span>
              <input
                form="add-new"
                id="sale"
                name="offer"
                type="radio"
                value="Продам"
              />
              <label htmlFor="sale">Продам</label>
            </span>
            <span>
              <input
                form="add-new"
                id="buy"
                name="offer"
                type="radio"
                value="Куплю"
              />
              <label htmlFor="buy">Куплю</label>
            </span>
          </div>
        </div>
        <div className="form__title block">
          <label htmlFor="title">Заголовок объявления*</label>
          <input id="title" type="text" />
        </div>
        <div className="form__text block">
          <label htmlFor="text">Текст объявления</label>
          <textarea name="text" id="text" maxLength={2000} />
        </div>

        <div className="form__options row">
          <div className="region block">
            <CustomSelect label={"Регион"} arrayToMap={region} />
          </div>
          <div className="price block">
            <label htmlFor="price">Цена*</label>
            <div className="row">
              <span>
                <input id="price" type="text" />
                <select name="currency" id="currency">
                  <option value="eur">EUR</option>
                  <option value="usd">USD</option>
                  <option value="mdl">MDL</option>
                </select>
              </span>
              <span className="negotiable">
                <input id="negotiable" type="checkbox" />
                <label htmlFor="negotiable">договорная</label>
              </span>
            </div>
          </div>
        </div>

        <div className="form__specs">
          <h4>Характеристики</h4>
          <AdsSpecs category={"e-scooter"} />
        </div>

        <div className="form__upload-photo block">
          <label htmlFor="file-upload">Фотографии</label>
          <input
            id="file-upload"
            name="file"
            type="file"
            accept="image/gif, image/jpeg, image/png, image/webp"
            multiple
          />
        </div>
        <ButtonForm className="form__submit-button">
          Разместить объявление
        </ButtonForm>
      </form>
    </div>
  );
};

export default AddNewAdvertisement;
