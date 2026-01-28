import React from 'react';

const InfoTop = () => {
    return (
        <section className="caliber-easy-apply-section">
            <div className="container">
                <h2 className="caliber-easy-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Get started with DO Matrix</h2>
                <p className="caliber-easy-subtitle" style={{ fontFamily: "'Merriweather', serif" }}>
                    With Four-Step Intelligent Application Lifecycle
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {/* Step 1 */}
                        <div className="caliber-timeline-item">
                            <div className="caliber-timeline-circle">1</div>
                            <h3 className="caliber-timeline-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Logic-First Modeling</h3>
                            <p className="caliber-timeline-desc" style={{ fontFamily: "'Merriweather', serif" }}>Define core business logic separate from all code layers.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="caliber-timeline-item">
                            <div className="caliber-timeline-circle">2</div>
                            <h3 className="caliber-timeline-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Zero-Code Assembly</h3>
                            <p className="caliber-timeline-desc" style={{ fontFamily: "'Merriweather', serif" }}>Assemble full applications through configuration, not traditional dev.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="caliber-timeline-item">
                            <div className="caliber-timeline-circle">3</div>
                            <h3 className="caliber-timeline-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>GenAI Orchestration</h3>
                            <p className="caliber-timeline-desc" style={{ fontFamily: "'Merriweather', serif" }}>Agents interpret autonomously generate coherent system workflows.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="caliber-timeline-item">
                            <div className="caliber-timeline-circle">4</div>
                            <h3 className="caliber-timeline-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Continuous Regeneration</h3>
                            <p className="caliber-timeline-desc" style={{ fontFamily: "'Merriweather', serif" }}>Any logic update instantly regenerates UI and operations automatically.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InfoTop;
