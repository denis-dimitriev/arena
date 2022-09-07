import "./AdsSpecs.scss";

import { CustomSelect } from "../../ui/custom-select/CustomSelect";

const bicyclesTypes = [
  "Горный",
  "Шоссейный",
  "Туристический",
  "Гибрид",
  "Городской",
  "BMX",
  "Складной",
  "Детский",
  "Другое",
];
const bicyclesBrands = [
  "AIST",
  "Author",
  "Azimut",
  "Bergamont",
  "Canyon",
  "Cube",
  "Focus",
  "Giant",
  "Haibike",
  "Kross",
  "Merida",
  "Scott",
  "Specialized",
  "TREK",
  "Десна",
  "Другое",
];
const condition = ["На запчасти", "Б/у", "Новый"];
const frameMaterials = ["Алюминий", "Магний", "Сталь", "Карбон", "Другое"];
const frameSize = [
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];
const wheelSize = [
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "27.5",
  "28",
  "29",
  "Другое",
];
const brakes = ["Барабанный", "Дисковый", "Ободной"];
const suspension = ["Передний", "Двухподвес", "Нет"];
const components = ["Shimano", "Sram", "Campagnolo", "Другой"];
const options = ["Женский", "Мужской", "Универсальный"];
const colors = [
  "Бежевый",
  "Белый",
  "Бордовый",
  "Голубой",
  "Желтый",
  "Зелёный",
  "Золотой",
  "Коричневый",
  "Красный",
  "Малины",
  "Оранжевый",
  "Розовый",
  "Салатовый",
  "Серебряный",
  "Серый",
  "Синий",
  "Тёмно-зелёный",
  "Фиолетовый",
  "Хамелеон",
  "Черный",
  "Другое",
];

interface BicyclesSpecsProps {
  category: "bicycle" | "e-bicycle" | "e-scooter";
}

export const AdsSpecs: React.FC<BicyclesSpecsProps> = ({ category }) => {
  return (
    <>
      {category !== "e-scooter" && (
        <div className="bicycle-specs">
          <div className="bicycle-specs__row">
            <div className="bicycle-specs__block">
              <CustomSelect label={"Тип"} arrayToMap={bicyclesTypes} />
            </div>
            <div className="bicycle-specs__block">
              <CustomSelect
                label={"Производитель"}
                arrayToMap={bicyclesBrands}
              />
            </div>
            <div className="bicycle-specs__block">
              <CustomSelect label={"Состояние"} arrayToMap={condition} />
            </div>
          </div>
          <div className="bicycle-specs__row">
            <div className="bicycle-specs__block">
              <CustomSelect label={"Материал"} arrayToMap={frameMaterials} />
            </div>
            <div className="bicycle-specs__block">
              <CustomSelect label={"Размер рамы"} arrayToMap={frameSize} />
            </div>
            <div className="bicycle-specs__block">
              <CustomSelect label={"Диаметр колес"} arrayToMap={wheelSize} />
            </div>
          </div>

          <div className="bicycle-specs__row">
            <div className="bicycle-specs__block">
              <CustomSelect label={"Обвес"} arrayToMap={components} />
            </div>
            <div className="bicycle-specs__block">
              <CustomSelect label={"Тип тормоза"} arrayToMap={brakes} />
            </div>
            <div className="bicycle-specs__block">
              <CustomSelect label={"Подвеска"} arrayToMap={suspension} />
            </div>
          </div>
          <div className="bicycle-specs__row">
            <div className="bicycle-specs__block">
              <CustomSelect label={"Опции"} arrayToMap={options} />
            </div>
            <div className="bicycle-specs__block">
              <CustomSelect label={"Цвет"} arrayToMap={colors} />
            </div>
            <div className="bicycle-specs__block">
              <label htmlFor="weight">Вес, кг</label>
              <input id="weight" type="text" />
            </div>
          </div>
        </div>
      )}

      {category === "e-bicycle" ||
        (category === "e-scooter" && (
          <div className="bicycle-specs__e-bicycle">
            <div className="bicycle-specs__row">
              <div className="bicycle-specs__block">
                <label htmlFor="speed">Скорость, км/ч</label>
                <input id="speed" type="text" />
              </div>
              <div className="bicycle-specs__block">
                <label htmlFor="power">Мощность, вт</label>
                <input id="power" type="text" />
              </div>
              <div className="bicycle-specs__block">
                <label htmlFor="distance">Км на 1ом заряде</label>
                <input id="distance" type="text" />
              </div>
            </div>
            <div className="bicycle-specs__row">
              <div className="bicycle-specs__block">
                <label htmlFor="capacity">Ёмкость акк. А/ч</label>
                <input id="capacity" type="text" />
              </div>
              <div className="bicycle-specs__block">
                <label htmlFor="speed">Время зарядки ч.</label>
                <input id="speed" type="text" />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
