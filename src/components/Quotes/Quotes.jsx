import React from "react";
import "./Quotes.less";

const initSwiper = () => {
    const swiper = new Swiper(".quotes-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        navigation: {
            nextEl: ".quotes__slider .button-next",
            prevEl: ".quotes__slider .button-prev"
        },
        pagination: {
            el: ".quotes-slider__pagination",
            type: "bullets"
        },
        breakpoints: {
            320: {
                spaceBetween: 20
            },
            480: {
                spaceBetween: 30
            },
            640: {
                spaceBetween: 40
            }
        }
    });
};

export class Quotes extends React.Component {
    componentDidMount() {
        initSwiper();
    }
    render() {
        return (
            <section className="quotes">
                <div className="container quotes__container">
                    <div className="quotes__left">
                        <h2 className="quotes__header">
                            <span className="quotes__uppertext">
                                TESTIMONIALS
                            </span>
                            <span className="quotes__undertext">
                                Customers's quotes
                            </span>
                        </h2>
                        <p className="quotes__text">
                            Brute laoreet efficiendi id his, ea illum nonumes
                            luptatum pro. Usu atqui laudem an.
                        </p>
                    </div>
                    <div>
                        <div className="quotes-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="swiper__content">
                                        <div className="swiper__slide--element">
                                            <div className="quotes__right">
                                                <p className="quotes__right--text">
                                                    Quidam vocibus eum ne, erat
                                                    consectetuer voluptatibus ut
                                                    nam. Eu usu vidit tractatos,
                                                    vero tractatos ius an, in
                                                    mel diceret persecuti.
                                                </p>
                                                <img
                                                    className="quotes__img"
                                                    src="img/people1.png"
                                                    alt="people1"
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__content">
                                        <div className="swiper__slide--element">
                                            <div className="quotes__right">
                                                <p className="quotes__right--text">
                                                    Quidam vocibus eum ne, erat
                                                    consectetuer voluptatibus ut
                                                    nam. Eu usu vidit tractatos,
                                                    vero tractatos ius an, in
                                                    mel diceret persecuti.
                                                </p>
                                                <img
                                                    className="quotes__img"
                                                    src="img/people1.png"
                                                    alt="people1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__content">
                                        <div className="swiper__slide--element">
                                            <div className="quotes__right">
                                                <p className="quotes__right--text">
                                                    Quidam vocibus eum ne, erat
                                                    consectetuer voluptatibus ut
                                                    nam. Eu usu vidit tractatos,
                                                    vero tractatos ius an, in
                                                    mel diceret persecuti.
                                                </p>
                                                <img
                                                    className="quotes__img"
                                                    src="img/people1.png"
                                                    alt="people1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="quotes-slider__pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
