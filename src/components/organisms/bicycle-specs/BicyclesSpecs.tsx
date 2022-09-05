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

export const BicyclesSpecs = () => {
  return (
    <div>
      <div className="block">
        <label htmlFor="bike-type">Тип*</label>
        <select name="bike-type" id="bike-type">
          {bicyclesTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
