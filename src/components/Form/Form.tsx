import React from "react";
import "./Form.scss";
import cities from '../../utils/cities.json';


const Form = () => {
  return (
    <form className="form">
      <div className="form__section">
        <label className="form__label">
          Ваш город
          <select className="form__select">
            {cities.map((item) => <option className="form__option">{item.city}</option>)}
          </select>
        </label>
      </div>
      <div className="form__section">
        <label className="form__label">
          Пароль
          <input className="form__input form__input--password" type="password" />
          <p className="form__description">
            Ваш новый пароль должен содержать не менее 5 символов.
          </p>
        </label>
        <label className="form__label">
          Пароль еще раз
          <input className="form__input form__input--password-repeat" type="password" />
          <p className="form__description">
            Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
            ошибки.
          </p>
        </label>
      </div>
      <div className="form__section">
      <label className="form__label">
        Электронная почта
        <input className="form__input form__input--email" type="email" />
        <p className="form__description">
          Можно изменить адрес, указанный при регистрации.{" "}
        </p>
      </label>
      </div>
        <label className="form__label">
          Я согласен
          <input className="form__input form__input--approve" type="checkbox" />
          <p className="form__description">
            принимать актуальную информацию на емейл
          </p>
        </label>
      <div className="form__approve">
        <button className="form__button">Изменить</button>
        <p className="form__description">
          последние изменения 15 мая 2012 в 14:55:17
        </p>
      </div>
    </form>
  );
};

export default Form;
