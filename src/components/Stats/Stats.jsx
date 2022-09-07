import React from "react";
import {PeopleSVG} from "../../svg/PeopleSVG";
import {PercentSVG} from "../../svg/PercentSVG";
import "./Stats.less";

export class Stats extends React.Component {
    render() {
        return (
            <section className="stats">
                <div className="stats__background--left">
                    <div className="container">
                        <div className="stats__left">
                            <i className="stats__icon">
                                <PercentSVG />
                            </i>

                            <p className="stats__header">89%</p>
                            <p className="stats__text stats__text_left">
                                Customers who have increased their productivity
                            </p>
                        </div>
                    </div>
                </div>
                <div className="stats__background--right">
                    <div className="container">
                        <div className="stats__right">
                            <i>
                                <PeopleSVG />
                            </i>
                            <p className="stats__header">3123</p>
                            <p className="stats__text stats__text_right">
                                Users who have used our application
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
