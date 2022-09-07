import React from "react";
import "./Application.less";

export class Application extends React.Component {
    render() {
        return (
            <section className="application">
                <div className="container application__content">
                    <div className="application__left">
                        <div className="application__text">
                            <div className="application__uptext">
                                <p>DESKTOP AND MOBILE APP</p>
                            </div>
                            <div className="application__offer">
                                <h1>
                                    <span className="bold">Plan</span>
                                    &nbsp;and&nbsp;
                                    <span className="bold">manage</span>
                                </h1>
                            </div>
                            <div className="application__undertext">
                                <p>
                                    Brute laoreet efficiendi id his, ea illum
                                    nonumes luptatum pro. Usu atqui laudem an,
                                    insolens gubergren similique est cu. Et vel
                                    modus congue vituperata. Solum patrioque no
                                    sea. Mea ex malis mollis oporteat. Eum an
                                    expetenda consequat.
                                </p>
                            </div>
                        </div>
                        <div className="application__buttons">
                            <button className="application__primary">
                                View video &nbsp;
                                <span>
                                    <svg
                                        width="7"
                                        height="8"
                                        viewBox="0 0 7 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <button className="application__light">
                                See feature
                            </button>
                        </div>
                    </div>
                    <div className="application__right"></div>
                </div>
            </section>
        );
    }
}
