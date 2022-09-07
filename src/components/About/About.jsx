import React from "react";
import "./About.less";
import {OverSVG} from "../../svg/OverSVG";
import {FileSVG} from "../../svg/FileSVG";
import {MessageSVG} from "../../svg/MessageSVG";
import {SaveSVG} from "../../svg/SaveSVG";

export class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="about__header">
                        <h2 className="about__uptext">
                            <span className="about__uptext">ABOUT US</span>
                            <span className="about__undertext">
                                Read about our app
                            </span>
                        </h2>
                    </div>
                    <div className="about__content">
                        <div className="about__elements">
                            <div className="about__icon">
                                <OverSVG />
                            </div>
                            <div className="about__elements--header">
                                <p>Overview</p>
                            </div>
                            <div className="about__elements--text">
                                <p>
                                    Brute laoreet efficiendi id his, ea illum
                                    nonumes luptatum pro.
                                </p>
                            </div>
                        </div>
                        <hr className="about__hr" />
                        <div className="about__elements">
                            <div className="about__icon">
                                <FileSVG />
                            </div>

                            <div className="about__elements--header">
                                <p>Files</p>
                            </div>
                            <div className="about__elements--text">
                                <p>
                                    No vim nulla vitae intellegat. Ei enim error
                                    ius, solet atomorum conceptam ex has.
                                </p>
                            </div>
                        </div>
                        <hr className="about__hr" />

                        <div className="about__elements">
                            <div className="about__icon">
                                <MessageSVG />
                            </div>

                            <div className="about__elements--header">
                                <p>Meeting chats</p>
                            </div>
                            <div className="about__elements--text">
                                <p>
                                    Vim ne tacimates neglegentur. Erat diceret
                                    omittam at est.
                                </p>
                            </div>
                        </div>
                        <hr className="about__hr" />

                        <div className="about__elements">
                            <div className="about__icon">
                                <SaveSVG />
                            </div>

                            <div className="about__elements--header">
                                <p>Save events</p>
                            </div>
                            <div className="about__elements--text">
                                <p>Nisl idque mel ea, nominati voluptatum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <button className="about__danger">Read more</button>
                        <div className="about__hr--p">
                            <hr className="about__hr about__hr--buttons" />
                            <p className="about__elements--text about__between">
                                OR
                            </p>
                            <hr className="about__hr about__hr--buttons" />
                        </div>
                        <button className="about__primary">Get started</button>
                    </div>
                </div>
            </section>
        );
    }
}
