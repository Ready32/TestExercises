import React from "react";
import "./Resources.less";
import {ArrowleftSVG} from "../../svg/ArrowleftSVG";
import {ArrowrightSVG} from "../../svg/ArrowrightSVG";

const initSwiper = () => {
    const swiper = new Swiper(".resources-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        navigation: {
            nextEl: ".resources-slider__button .button-next",
            prevEl: ".resources-slider__button .button-prev"
        },
        pagination: {
            el: ".resources-slider__pagination",
            type: "resubullets"
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

export class Resources extends React.Component {
    componentDidMount() {
        initSwiper();
    }

    render() {
        return (
            <section className="resources">
                <div className="container resources__container">
                    <h2 className="resources__header">
                        <span className="resources__uppertext">
                            OUR RESOURCES
                        </span>
                        <span className="resources__undertext">
                            Start reading our blog
                        </span>
                    </h2>

                    <div className="resources__slider">
                        <button className="resources-slider__button button-prev">
                            <ArrowleftSVG />
                        </button>

                        <div className="swiper resources-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="swiper__content">
                                        <div className="swiper__slide--element">
                                            <img
                                                className="swiper__img"
                                                src="img/img_slider.png"
                                                alt="img-slider"
                                            />
                                            <div className="swiper__text">
                                                <h2 className="swiper__header">
                                                    How to start planning
                                                </h2>
                                                <p className="swiper__text--element">
                                                    Quidam vocibus eum ne, erat
                                                    consectetuer voluptatibus ut
                                                    nam. Eu usu vidit tractatos,
                                                    vero tractatos ius an, in
                                                    mel diceret persecuti. Natum
                                                    petentium principes mei ea.
                                                    Tota everti periculis vis
                                                    ei, quas tibique pro at, eos
                                                    ut decore ...
                                                </p>
                                                <div className="swiper__button">
                                                    <button className="swiper__button--primary">
                                                        Read now
                                                    </button>
                                                    <button className="swiper__button--light">
                                                        Add to your bookmarks
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__content">
                                        <div className="swiper__slide--element">
                                            <img
                                                className="swiper__img"
                                                src="img/img_slider.png"
                                                alt="img-slider"
                                            />
                                            <div className="swiper__text">
                                                <h2 className="swiper__header">
                                                    Slide #2
                                                </h2>
                                                <p className="swiper__text--element">
                                                    Quidam vocibus eum ne, erat
                                                    consectetuer voluptatibus ut
                                                    nam. Eu usu vidit tractatos,
                                                    vero tractatos ius an, in
                                                    mel diceret persecuti. Natum
                                                    petentium principes mei ea.
                                                    Tota everti periculis vis
                                                    ei, quas tibique pro at, eos
                                                    ut decore ...
                                                </p>
                                                <div className="swiper__button">
                                                    <button className="swiper__button--primary">
                                                        Read now
                                                    </button>
                                                    <button className="swiper__button--light">
                                                        Add to your bookmarks
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="swiper__content">
                                        <div className="swiper__slide--element">
                                            <img
                                                className="swiper__img"
                                                src="img/img_slider.png"
                                                alt="img-slider"
                                            />
                                            <div className="swiper__text">
                                                <h2 className="swiper__header">
                                                    Slide #3
                                                </h2>
                                                <p className="swiper__text--element">
                                                    Quidam vocibus eum ne, erat
                                                    consectetuer voluptatibus ut
                                                    nam. Eu usu vidit tractatos,
                                                    vero tractatos ius an, in
                                                    mel diceret persecuti. Natum
                                                    petentium principes mei ea.
                                                    Tota everti periculis vis
                                                    ei, quas tibique pro at, eos
                                                    ut decore ...
                                                </p>
                                                <div className="swiper__button">
                                                    <button className="swiper__button--primary">
                                                        Read now
                                                    </button>
                                                    <button className="swiper__button--light">
                                                        Add to your bookmarks
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="resources-slider__button button-next">
                            <ArrowrightSVG />
                        </button>
                    </div>
                    <div className="resources-slider__pagination pagination" />
                </div>
            </section>
        );
    }
}
