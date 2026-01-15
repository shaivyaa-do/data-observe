import React from 'react';
import caliberGif from '../../../assets/images/others/caliber.gif';

const HeroTop = () => {
    return (
        <div className="heroContainer">
            <div className="heroContent">
                <div className="heroText">
                    <h1 className="heroHeader">
                        Extend to DO Caliber & <br /> accelerate with power of GenAI.
                    </h1>
                    <p className="heroSubtitle">
                        Rapidly build, test, and run Regenerative Applications that minimize technical debt and grow stronger and more secure over time.
                    </p>
                </div>
                <div className="heroImage">
                    <img
                        src={caliberGif}
                        alt="DO Caliber Animation"
                        className="caliber-gif"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroTop;
