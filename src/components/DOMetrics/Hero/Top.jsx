import React from 'react';
import { ImgXCaliber } from '@assets/images';

const HeroTop = () => {
    return (
        <div className="heroContainer" style={{ backgroundColor: '#e0e0e0' }}>
            <div className="heroText" style={{ color: '#333' }}>
                <h1 className="heroHeader">
                    Extend to DO Metrics & <br />Mastering the ML lifecycle.
                </h1>
                <p className="heroSubtitle">
                    Supercharge your MLOps with a fully-managed control plane
                </p>
            </div>
        </div>
    );
};
export default HeroTop;
