import React from 'react';
import { Container, Paper, Box } from "@mui/material";
import { useSelector } from "react-redux";

const featuresData = [
    { icon: "fa-line-chart", title: "Growth, not maintenance", desc: "Reduce technical debt and redeploy resources to innovation and growth." },
    { icon: "fa-rocket", title: "Get to market faster", desc: "Build, test, and run apps in an AI-enhanced IDE." },
    { icon: "fa-lock", title: "Grow more secure every day", desc: "Run on a unified security foundation proven in high-regulation sectors." },
    { icon: "fa-code", title: "Modernized development at scale", desc: "Unified architecture removes legacy complexity and eliminates long-term technical debt." },
    { icon: "fa-bolt", title: "Accelerated delivery cycles", desc: "AI-driven automation speeds build-to-release and enables rapid tech adoption." },
    { icon: "fa-shield", title: "Integrated security and compliance", desc: "Security and governance operate natively across all systems with no manual effort." },
];

const InfoBottom = () => {
    const themeMode = useSelector((state) => state.themeReducer?.mode) || 'light';

    return (
        <Box sx={{ py: 5, width: "100%", bgcolor: themeMode === "light" ? "#f5f5f5" : "background.paper" }}>
            <Container maxWidth="lg">
                <Paper sx={{ bgcolor: "transparent", p: 8, borderRadius: 0 }} elevation={0}>
                    <h2 className="caliber-section-title text-center" style={{ fontFamily: "'Roboto Condensed', sans-serif", fontSize: '2.2rem', marginBottom: '16px' }}>Gen AI Transforms IT</h2>
                    <p className="text-center mb-5" style={{ fontFamily: "'Roboto', sans-serif", fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto 48px auto' }}>
                        Unified, secure, and scalable foundations for modern enterprises.
                    </p>
                    <div className="row justify-content-center" style={{ alignItems: 'stretch' }}>
                        {featuresData.map((feature, index) => (
                            <div className="col-md-4 mb-4" key={index} style={{ display: 'flex' }}>
                                <div className="caliber-feature-card w-100" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', padding: '0px' }}> {/* Removed padding 32px as Paper has p-8(64px) now, or keep card style? The previous one had card padding. Let's keep card minimal inside the grid */}
                                    <div className="caliber-feature-icon" style={{ marginBottom: '24px' }}><i className={`fa ${feature.icon}`} style={{ fontSize: '36px', color: '#000' }}></i></div>
                                    <h3 className="caliber-feature-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', minHeight: 'auto' }}>{feature.title.toUpperCase()}</h3>
                                    <p className="caliber-feature-desc" style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Paper>
            </Container>
        </Box>
    );
};
export default InfoBottom;
