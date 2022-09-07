import React from "react";
import "./Hero.less";
import {PlaySVG} from "../../svg/PlaySVG";

export class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="container hero__background">
                    <div className="hero__text">
                        <p className="hero__uptext">PLAN YOUR LIFE</p>
                        <p className="hero__offer">
                            Increase your&nbsp;
                            <span className="bold">productivity</span>
                        </p>

                        <p className="hero__undertext">
                            Brute laoreet efficiendi id his, ea illum nonumes
                            luptatum pro. Usu atqui laudem an, insolens
                            gubergren similique est cu. Et vel modus congue
                            vituperata.
                        </p>
                        <button className="hero__button">
                            <PlaySVG />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
