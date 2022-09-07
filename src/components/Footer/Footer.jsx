import React from "react";
import "./Footer.less";
import {FacebookSVG} from "../../svg/FacebookSVG";
import {TwitterSVG} from "../../svg/TwitterSVG";
import {TelegramSVG} from "../../svg/TelegramSVG";
import {MSVG} from "../../svg/MSVG";

// блок__элемент--модификатор

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__container">
                        <div className="footer__left-column">
                            <i className="footer__logo">
                                <img src="" alt="" />
                                <h1 hidden className="footer__title">
                                    название компании{" "}
                                </h1>
                            </i>
                            <nav className="footer__navigation navigation">
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

                        <div className="footer__right-column">
                            <div className="footer__social social">
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

                            <button className="footer__button">
                                Get started
                            </button>
                        </div>
                    </div>
                    <p className="footer__copyright">
                        Copyright © 2018 by Random site
                    </p>
                </div>
            </footer>
        );
    }
}
