import React from 'react';
import { ImgXGenesis } from '@assets/images';

const HeroTop = () => {
    return (
        <div className="heroContainer" style={{ backgroundColor: '#e0e0e0' }}>
            <div className="heroText" style={{ color: '#2B2B2B', textAlign: 'left', paddingLeft: '40px' }}>
                <h1 className="heroHeader">
                    Data Observability
                    Solution - Elevate
                    Data Dependability
                </h1>
                <p className="heroSubtitle">
                    Unleash the true potential of your data.
                </p>
            </div>
        </div>
    );
};
export default HeroTop;
