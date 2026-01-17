import dometricsVid from '../../../assets/videos/dometrics-vid.mp4';

const HeroTop = () => {
    return (
        <div className="heroContainer" style={{ position: 'relative', overflow: 'hidden' }}>
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
                <source src={dometricsVid} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.6)',
                zIndex: 1
            }}></div>

            <div className="heroText" style={{ position: 'relative', zIndex: 2, textAlign: 'left', maxWidth: '800px', margin: '0 40px' }}>
                <h1 className="heroHeader" style={{ color: 'white' }}>
                    Extend to DO Metrics & <br />Mastering the ML lifecycle.
                </h1>
                <p className="heroSubtitle" style={{ color: 'white' }}>
                    Supercharge your MLOps with a fully-managed control plane
                </p>
            </div>
        </div>
    );
};
export default HeroTop;
