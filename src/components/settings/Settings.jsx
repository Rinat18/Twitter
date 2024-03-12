import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./Settings.scss";
import { Link } from "react-router-dom";

const Settings = () => {
  const [modalWindow, setModalWindow] = useState(false);

  return (
    <div className="settings-wrapper">
      <div className="Sidebar">
        <SideBar />
      </div>
      <div className="settings-container">
        <div className="settings-container-left">
          <section className="section-navigation">
            <div className="section-header">
              <div className="header-title">
                <h2 id="root-header">Settings</h2>
              </div>
            </div>
            <div className="tab-list">
              <div className="tab-item active" data-testid="activeRoute">
                <div className="tab-link">Your account</div>
              </div>
              <a
                href="https://support.x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="tab-link"
              >
                Help Center
              </a>
            </div>
          </section>
        </div>
        <div className="settings-container-right">
          <section className="section-details">
            <div className="header">
              <h2 id="detail-header">Your Account</h2>
            </div>
            <div className="content">
              <div className="info">
                <p>
                  See information about your account, download an archive of
                  your data, or learn about your account deactivation options
                </p>
              </div>
              <div className="options">
                <div className="option">
                  <svg
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                    fill="white"
                  >
                    <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                  </svg>
                  <div>
                    <span>Account information</span>
                    <p>
                      See your account information like your phone number and
                      email address.
                    </p>
                  </div>
                </div>
                <div className="option" onClick={() => setModalWindow(true)}>
                  <svg
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                    fill="white"
                  >
                    <path d="M13 9.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm9.14 1.77l-5.83 5.84-4-1L6.41 22H2v-4.41l5.89-5.9-1-4 5.84-5.83 7.06 2.35 2.35 7.06zm-12.03 1.04L4 18.41V20h1.59l6.1-6.11 4 1 4.17-4.16-1.65-4.94-4.94-1.65-4.16 4.17 1 4z"></path>
                  </svg>
                  <div>
                    <span>Change your password</span>
                    <p>Change your password at any time.</p>
                  </div>
                  {modalWindow && (
                    <div className="modal-overlay">
                      <section className="section-details">
                        <div className="container">
                          <div className="modal-title">
                            <button className="back-btn">
                              <svg viewBox="0 0 24 24" className="back-icon">
                                <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                              </svg>
                              <span className="back-text">Back</span>
                            </button>
                            <div className="header-pass">
                              <h2 id="detail-header">Change your password</h2>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="current_password">
                              Current password
                            </label>
                            <input
                              type="password"
                              id="current_password"
                              name="current_password"
                            />

                            {/* Ринат тут можно будет, для забыли пароль, чтобы снова отправить код, не уверен будем ли реалтзовывать */}

                            <Link
                              to={"#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="forgot-password"
                            >
                              Forgot password?
                            </Link>
                          </div>
                          {/* Для новых паролей */}
                          <div className="form-group">
                            <label htmlFor="new_password">New password</label>
                            <input
                              type="password"
                              id="new_password"
                              name="new_password"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password_confirmation">
                              Confirm password
                            </label>
                            <input
                              type="password"
                              id="password_confirmation"
                              name="password_confirmation"
                            />
                          </div>
                          <button type="button" className="save-button">
                            Save
                          </button>
                        </div>
                      </section>
                    </div>
                  )}
                </div>
                <div className="option">
                  <svg
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                    fill="white"
                  >
                    <path d="M11.99 16l-5.7-5.7L7.7 8.88l3.29 3.3V2.59h2v9.59l3.3-3.3 1.41 1.42-5.71 5.7zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
                  </svg>
                  <div>
                    <span>Download an archive of your data</span>
                    <p>
                      Get insights into the type of information stored for your
                      account.
                    </p>
                  </div>
                </div>
                <div className="noti-position">
                  <div role="status" className="notification">
                    <div className="icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zM13 17h-2v-5h2v5zm-1-7c-.83 0-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5S12.83 10 12 10z" />
                      </svg>
                    </div>
                    <div className="text">
                      <span className="title">Teams has moved</span>
                      <span className="description">
                        We moved the Teams feature to Delegate in your security
                        and account access settings.
                      </span>
                      <a
                        href="/settings/security_and_account_access"
                        className="link"
                      >
                        Go to security settings
                      </a>
                    </div>
                  </div>
                </div>
                <div className="option">
                  <svg
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                    fill="white"
                  >
                    <path d="M21.398 6.52c-.887-1.79-2.647-2.91-4.601-3.01-1.65-.09-3.367.56-4.796 2.01-1.43-1.45-3.147-2.1-4.798-2.01-1.954.1-3.714 1.22-4.601 3.01-.896 1.81-.846 4.17.514 6.67 1.353 2.48 4.003 5.12 8.382 7.67l.504.3.503-.3c4.378-2.55 7.028-5.19 8.379-7.67 1.36-2.5 1.41-4.86.514-6.67zm-2.27 5.71c-1.074 1.97-3.256 4.27-7.126 6.61-3.872-2.34-6.055-4.64-7.129-6.61-1.112-2.04-1.031-3.7-.479-4.82.561-1.13 1.667-1.84 2.91-1.91 1.077-.05 2.338.38 3.452 1.61L8.588 10.3l4.009 2.5-1.428 2.15 1.665 1.1 2.569-3.85-3.991-2.5 1.405-2.06c1.21-1.63 2.662-2.2 3.88-2.14 1.242.07 2.347.78 2.908 1.91.553 1.12.634 2.78-.477 4.82z" />
                  </svg>
                  <div>
                    <span>Deactivate your account</span>
                    <p>Find out how you can deactivate your account.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
