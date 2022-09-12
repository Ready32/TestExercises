import React from "react";
import "./Header.less";
import { FacebookSVG } from "../../svg/FacebookSVG";
import { TwitterSVG } from "../../svg/TwitterSVG";
import { TelegramSVG } from "../../svg/TelegramSVG";
import { MSVG } from "../../svg/MSVG";

// блок__элемент--модификатор

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container header__container">
          <div className="header__left-column">
            <i className="header__logo">
              <img src="" alt="" />
              <h1 hidden className="header__title">
                название компании{" "}
              </h1>
            </i>

            <nav className="header__navigation navigation">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a
                    href=""
                    className="navigation__link navigation__link--active"
                  >
                    Home
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="" className="navigation__link">
                    Blog
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="" className="navigation__link">
                    Features
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="" className="navigation__link">
                    Pricing
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="" className="navigation__link">
                    Documentation
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__right-column">
            <div className="header__social social">
              <ul className="social__list">
                <li className="social__item">
                  <i className="social__icon">
                    <FacebookSVG />
                  </i>
                </li>
                <li className="social__item">
                  <i className="social__icon">
                    <TelegramSVG />
                  </i>
                </li>
                <li className="social__item">
                  <i className="social__icon">
                    <TwitterSVG />
                  </i>
                </li>
                <li className="social__item">
                  <i className="social__icon">
                    <MSVG />
                  </i>
                </li>
              </ul>
            </div>

            <button className="header__button">Get started</button>
          </div>
        </div>
      </header>
    );
  }
}
