import docaliberBanner from '../../../assets/images/others/do-caliber-banner.png';

const HeroTop = () => {
    return (
        <div className="heroContainer" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Image Background */}
            <img
                src={docaliberBanner}
                alt="DO Caliber Banner"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            />

            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.2)',
                zIndex: 1
            }}></div>

            {/* Content */}
            <div className="heroContent" style={{ justifyContent: 'flex-start', textAlign: 'left', position: 'relative', zIndex: 2 }}>
                <div className="heroText" style={{ maxWidth: '800px', margin: '0' }}>
                    <h1 className="heroHeader">
                        Extend to DO Caliber & <br /> accelerate your AI application journey
                    </h1>
                    <p className="heroSubtitle">
                        Rapidly build, test, and run Generative Applications that minimize technical debt and grow stronger and more secure over time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroTop;
