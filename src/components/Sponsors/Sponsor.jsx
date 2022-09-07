import React from "react";
import "./Sponsor.less";
import {BitBucketSVG} from "../../svg/BitBucketSVG";
import {ApplewatchSVG} from "../../svg/ApplewatchSVG";
import {FacebookSponsorSVG} from "../../svg/FacebookSponsorSVG";
import {AtlassianSVG} from "../../svg/AtlassianSVG";
import {AudiSVG} from "../../svg/AudiSVG";
export class Sponsor extends React.Component {
    render() {
        return (
            <section className="container sponsor">
                <div className="sponsor__elements">
                    <div className="sponsor__logo">
                        <BitBucketSVG />
                    </div>
                    <div className="sponsor__logo">
                        <ApplewatchSVG />
                    </div>
                    <div className="sponsor__logo">
                        <FacebookSponsorSVG />
                    </div>
                    <div className="sponsor__logo">
                        <AtlassianSVG />
                    </div>
                    <div className="sponsor__logo">
                        <AudiSVG />
                    </div>
                </div>
            </section>
        );
    }
}
