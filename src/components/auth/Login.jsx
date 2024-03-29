import React, { useState } from "react";
import "./Login.scss";
import LoginModal from "./LoginModal";
import Registration from "./Registration";

const Login = () => {
  const [modalWindow, setModalWindow] = useState(false);
  const [modalWindow2, setModalWindow2] = useState(false);
  console.log(modalWindow, 123);
  console.log(modalWindow2, "qwe");
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="login-container">
          <div className="login-container__left"></div>
          <div className="login-container__right">
            <h1>
              В курсе <br /> происходящего
            </h1>
            <p>Присоединяйтесь сегодня.</p>
            <div className="login-container__form">
              <div className="googlebut">
                <div class="btn-google">
                  <svg
                    class="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                  >
                    <g>
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      ></path>
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      ></path>
                      <path fill="none" d="M0 0h48v48H0z"></path>
                    </g>
                  </svg>
                  <span>Войти с учетной записью Google</span>
                </div>
              </div>
              <div class="apple-sign-in">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                  </g>
                </svg>
                <span>Войти с учетной записью Apple</span>
              </div>

              <div class="signupOr">
                <div class="signupOrItem"></div>
                <div class="signupOrText">или</div>
                <div class="signupOrItem"></div>
              </div>

              <div
                class="registrate-button"
                onClick={() => setModalWindow2(true)}
              >
                <span class="button-content">Зарегистрироваться</span>
              </div>

              <div className="poilitics">
                Регистрируясь, вы соглашаетесь с{" "}
                <span>
                  Условиями <br /> предоставления услуг{" "}
                </span>
                и <span>Политикой конфиденциальности </span>, а <br /> также с{" "}
                <span>Политикой использования файлов cookie.</span>
              </div>
              <div className="reg-titel">Уже зарегестрированы?</div>
              <button
                className="sign-in-bitton"
                onClick={() => setModalWindow(true)}
              >
                Войти
              </button>
            </div>

            {modalWindow ? (
              <LoginModal
                setModalWindow={setModalWindow}
                setModalWindow2={setModalWindow2}
              />
            ) : null}
            {modalWindow2 ? (
              <Registration
                setModalWindow={setModalWindow}
                setModalWindow2={setModalWindow2}
              />
            ) : null}
          </div>
        </div>
        <div class="footer">
          <nav
            aria-label="Нижний колонтитул"
            role="navigation"
            class="footer-nav"
          >
            <a
              href="https://about.twitter.com"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              О нас
            </a>
            <a
              href="https://help.twitter.com/using-x/download-the-x-app"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Скачать приложение X
            </a>
            <a
              href="https://help.twitter.com"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Справочный центр
            </a>
            <a
              href="https://twitter.com/ru/tos"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Условия предоставления услуг
            </a>
            <a
              href="https://twitter.com/ru/privacy"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Политика конфиденциальности X
            </a>
            <a
              href="https://help.twitter.com/ru/rules-and-policies/x-cookies"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Политика в отношении файлов cookie
            </a>
            <a
              href="https://help.twitter.com/ru/resources/accessibility"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Специальные возможности
            </a>
            <a
              href="https://help.twitter.com/ru/resources/accessibility"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Информация о рекламе
            </a>
            <a
              href="https://blog.twitter.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Блог
            </a>
            <a
              href="https://status.twitterstat.us/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Статус
            </a>
            <a
              href="https://careers.twitter.com/en"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Работа
            </a>
            <a
              href="https://about.twitter.com/en/who-we-are/brand-toolkit"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Ресурсы бренда
            </a>
            <a
              href="https://business.x.com/en/advertising.html?ref=gl-tw-tw-twitter-advertise"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Реклама
            </a>
            <a
              href="https://business.x.com/en/advertising.html?ref=gl-tw-tw-twitter-advertise"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Маркетинг
            </a>
            <a
              href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Х для бизнеса
            </a>
            <a
              href="https://developer.twitter.com/ent"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Разработчикам
            </a>
            <a
              href="https://twitter.com/settings/account/personalization"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="footer-link"
            >
              Настройки
            </a>
            <span class="copyright">© 2024 X Corp.</span>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Login;
