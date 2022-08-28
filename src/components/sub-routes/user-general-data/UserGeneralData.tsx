import "./UserGeneralData.scss";

export const UserGeneralData = () => {
  return (
    <div className="general-data">
      <h3 className="general-data__username">Имя</h3>
      <div className="general-data__body">
        <div className="user-avatar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrErZ_qt6hKCdzDVvgnYBaz9NtQvO_3KHIw&usqp=CAU"
            alt=""
          />
        </div>
        <div className="user-info">
          <span className="user-info__text">Дата регистрации: 02.04.2021</span>
          <span className="user-info__text">Объявлений: 10</span>
        </div>
      </div>
      <div className="general-data__user-ads">
        <h4>Объявления</h4>
      </div>
    </div>
  );
};
