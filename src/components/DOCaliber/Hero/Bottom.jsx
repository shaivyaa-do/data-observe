import React from 'react';

const HeroBottom = () => {
    return (
        <section className="caliber-explore-products-section" >
            <div className="container">
                <h2 className="caliber-explore-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>EXPLORE PRODUCTS</h2>
                <p className="caliber-explore-subtitle" style={{ fontFamily: "'Merriweather', serif" }}>Boost your AI journey with our products, tools & accelerators.</p>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="caliber-product-card dark-mode">
                            <h3 className="caliber-product-card-title" style={{ color: '#007bff', fontFamily: "'Roboto Condensed', sans-serif" }}>DO CALIBER</h3>
                            <p className="caliber-product-card-text" style={{ fontFamily: "'Merriweather', serif" }}>Tap into the power of AI right away—without compounding the
                                problems created by legacy technology and AI code-generators.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="caliber-product-card">
                            <h3 className="caliber-product-card-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>DO BASE</h3>
                            <p className="caliber-product-card-text" style={{ fontFamily: "'Merriweather', serif" }}>The most extensible AI-powered Data platform</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="caliber-product-card">
                            <h3 className="caliber-product-card-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>DO 360</h3>
                            <p className="caliber-product-card-text" style={{ fontFamily: "'Merriweather', serif" }}>Data Observability Solution - Elevate Data Dependability</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="caliber-product-card">
                            <h3 className="caliber-product-card-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>DO Matrix</h3>
                            <p className="caliber-product-card-text" style={{ fontFamily: "'Merriweather', serif" }}>Supercharge your MLOps with a fully-managed control plane.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default HeroBottom;
