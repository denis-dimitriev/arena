import "./AddNewAd.scss";

const AddNewAd = () => {
  return (
    <div className="add-new">
      <h1 className="add-new__title">Заполните объявление</h1>
      <form id="add-new" className="add-new__form form">
        <div className="form__category block">
          <label htmlFor="category">Раздел*</label>
          <select name="category" id="category">
            <option value="Велосипеды">Велосипеды</option>
            <option value="Электровелосипеды">Электровелосипеды</option>
            <option value="Электроскутеры">Электроскутеры</option>
            <option value="Аксессуары">Аксессуары</option>
          </select>
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
      </form>
    </div>
  );
};

export default AddNewAd;
