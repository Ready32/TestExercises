import React from "react";
import "./App.less";
import {About} from "./components/About/About";
import {Application} from "./components/application/Application";
import {Footer} from "./components/Footer/Footer";
import {Sign} from "./components/Form/Sign";
import {Header} from "./components/Header/Header";
import {Help} from "./components/Help/Help";
import {Hero} from "./components/Hero/Hero";
import {Quotes} from "./components/Quotes/Quotes";
import {Resources} from "./components/Resources/Resources";
import {Sponsor} from "./components/Sponsors/Sponsor";
import {Start} from "./components/Start/Start";
import {Stats} from "./components/Stats/Stats";

export class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <Sponsor />
                <Application />
                <About />
                <Stats />
                <Resources />
                <Quotes />
                <Help />
                <Start />
                <Sign />
                <Footer />
            </>
        );
    }
}
