import React from "react";
import "./Start.less";

export class Start extends React.Component {
    render() {
        return (
            <section className="start">
                <div className="container">
                    <h2 className="start__header">
                        <span className="start__upperheader">
                            PLAN YOUR LIFE
                        </span>
                        <span className="start__underheader">
                            Get <span className="bold">started</span> now
                        </span>
                    </h2>
                    <p className="start__text">
                        Brute laoreet efficiendi id his, ea illum nonumes
                        luptatum pro. Usu atqui laudem an, insolens gubergren
                        similique est cu. Et vel modus congue vituperata.
                    </p>
                    <div className="start__buttons">
                        <button className="start__primary">View pricing</button>
                        <button className="start__light">
                            Read documentation
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
