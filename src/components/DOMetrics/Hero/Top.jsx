import dometricsBanner from '../../../assets/images/others/do-matrix-banner.png';

const HeroTop = () => {
    return (
        <div className="heroContainer" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Image Background */}
            <img
                src={dometricsBanner}
                alt="DO Metrics Banner"
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

            <div className="heroText" style={{ position: 'relative', zIndex: 2, textAlign: 'left', maxWidth: '800px', margin: '0 40px' }}>
                <h1 className="heroHeader" style={{ color: 'white' }}>
                    Extend to DO Matrix & <br />Mastering the ML lifecycle.
                </h1>
                <p className="heroSubtitle" style={{ color: 'white' }}>
                    Supercharge your MLOps with a fully-managed control plane
                </p>
            </div>
        </div>
    );
};
export default HeroTop;
