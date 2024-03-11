import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "./Registration.scss";

const Registration = ({ setModalWindow, setModalWindow2 }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [activateAcc, setActivateAcc] = useState("");
  const [userName, setUserName] = useState("");
  const { registrate, activateAccount } = useAuth();

  const handleLogin = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      !userName.trim()
    ) {
      alert("Заполните все поля");
    } else {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      formData.append("username", userName);
      registrate(formData);
      setUserName("");
      setEmail("");
      setPassword("");
      setActivateAcc("");
    }
  };
  const activate = () => {
    const formData = new FormData();
    formData.append("activation_code", activateAcc);
    formData.append("username", userName);

    activateAccount(formData);
  };
  return (
    <div class="container">
      <span className="close" onClick={() => setModalWindow2(false)}>
        &times;
      </span>

      <div class="header">
        <h2>Регистрация в X</h2>
      </div>
      <div class="login-form">
        <label>
          <span>Введите Адрес Электронной Почты</span>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Имя пользователся</span>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <span>Введите пароль</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Подтвердите пароль</span>
          <input
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </label>

        <label>
          <span>Введите код которую отправили вам на почту</span>
          <input
            type="text"
            onChange={(e) => setActivateAcc(e.target.value)}
          />{" "}
          <span onClick={() => activate()}>Activate</span>
        </label>
      </div>
      <div class="buttons">
        <button onClick={() => handleLogin()}>Registration</button>
      </div>
      <div class="register-link">
        <span>
          Есть учетная запись?{" "}
          <p
            className="p-links"
            onClick={() => {
              setModalWindow(true);
              setModalWindow2(false);
            }}
          >
            Войти
          </p>
        </span>
      </div>
    </div>
  );
};

export default Registration;
