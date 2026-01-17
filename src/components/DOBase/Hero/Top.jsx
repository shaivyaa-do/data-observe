import React from 'react';
import dobaseVid from '../../../assets/videos/dobase-vid.mp4';

const HeroTop = () => {
    return (
        <div className="dobase-hero-main">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            >
                <source src={dobaseVid} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
                zIndex: 1
            }}></div>

            <div className="dobase-hero-text" style={{ zIndex: 2 }}>
                <h1 className="dobase-hero-header">
                    Extend to DO Base & <br /> unlock powerful smarter systems.
                </h1>
                <p className="dobase-hero-subtitle">
                    The most extensible
                    AI-powered Data platform.
                    <br />
                    Total control. Infinite extensibility. AI collaboration.
                </p>
            </div>
        </div>
    );
};
export default HeroTop;
