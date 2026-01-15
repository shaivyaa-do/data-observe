import React from 'react';

const InfoTop = () => {
    return (
        <section className="caliber-easy-apply-section">
            <div className="container">
                <h2 className="caliber-easy-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Get started with DO Base</h2>
                <p className="caliber-easy-subtitle" style={{ fontFamily: "'Merriweather', serif" }}>
                    With Four-Step Intelligent Application Lifecycle
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {/* Step 1 */}
                        <div className="caliber-timeline-item">
                            <div className="caliber-timeline-circle">1</div>
                            <h3 className="caliber-timeline-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Data Modeling and Source Integration</h3>
                            <p className="caliber-timeline-desc" style={{ fontFamily: "'Merriweather', serif" }}>Define your main database model, or connect external data sources.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="caliber-timeline-item">
                            <div className="caliber-timeline-circle">2</div>
                            <h3 className="caliber-timeline-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Visual Data Organization and Display</h3>
                            <p className="caliber-timeline-desc" style={{ fontFamily: "'Merriweather', serif" }}>Organize and present data visually with tables, forms, charts & more.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="caliber-timeline-item">
                            <div className="caliber-timeline-circle">3</div>
                            <h3 className="caliber-timeline-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Data Manipulation and Workflow Automation</h3>
                            <p className="caliber-timeline-desc" style={{ fontFamily: "'Merriweather', serif" }}>Add, edit, query, import, export, or trigger workflows to manage data.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="caliber-timeline-item">
                            <div className="caliber-timeline-circle">4</div>
                            <h3 className="caliber-timeline-title" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Transform Data into Actionable Apps</h3>
                            <p className="caliber-timeline-desc" style={{ fontFamily: "'Merriweather', serif" }}>Highlights the result (actionable apps) of the process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InfoTop;
