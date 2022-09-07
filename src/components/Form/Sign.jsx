import React from "react";
import "./Sign.less";

export class Sign extends React.Component {
    render() {
        return (
            <section className="sign">
                <div className="container">
                    <div className="sign__content">
                        <div className="sign__left">
                            <h2 className="sign__header">
                                Sign up for newsletter
                            </h2>
                            <p className="sign__text">
                                Cu qui soleat partiendo urbanitas. Eum aperiri
                                indoctum eu, homero alterum.
                            </p>
                        </div>
                        <div className="sign__right">
                            <form className="sign__form" action="">
                                <input
                                    className="sign__email"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                />
                                <button className="sign__primary">
                                    Save me
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
