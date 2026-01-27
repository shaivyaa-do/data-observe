import React from 'react';
import { Container, Paper, Box } from "@mui/material";
import { useSelector } from "react-redux";

const featuresData = [
    { icon: "fa-server", title: "Self-hosted Open Source", desc: "Reduce technical debt and redeploy resources to innovation and growth." },
    { icon: "fa-cogs", title: "Full control over your own infrastructure", desc: "Build, test, and run apps in an AI-enhanced IDE." },
    { icon: "fa-code-fork", title: "Full OSS compatibility", desc: "Run on a unified security foundation proven in high-regulation sectors." },
    { icon: "fa-cubes", title: "Modernized development at scale", desc: "Unified architecture removes legacy complexity and eliminates long-term technical debt." },
    { icon: "fa-rocket", title: "Accelerated delivery cycles", desc: "AI-driven automation speeds build-to-release and enables rapid tech adoption." },
    { icon: "fa-lock", title: "Integrated security and compliance", desc: "Security and governance operate natively across all systems with no manual effort." },
];

const InfoBottom = () => {
    const themeMode = useSelector((state) => state.themeReducer?.mode) || 'light';

    return (
        <Box sx={{ py: 10, width: "100%", bgcolor: themeMode === "light" ? "#ffffff" : "background.paper" }}>
            <Container maxWidth="lg">
                <Paper sx={{ bgcolor: "transparent", p: 8, borderRadius: 0 }} elevation={0}>
                    <h2 className="caliber-section-title text-center" style={{ alignItems: 'center', fontFamily: "'Roboto Condensed', sans-serif", fontSize: '2.2rem', marginBottom: '16px' }}>DO CALIBER TRANSFORMS</h2>
                    <p className="text-center mb-5" style={{ alignItems: 'center', fontFamily: "'Roboto', sans-serif", fontSize: '18px', color: '#2B2B2B', maxWidth: '800px', margin: '0 auto 48px auto' }}>
                        Revolutionizing Enterprise AI with unified, secure, and scalable foundations tailored for the modern business landscape.
                    </p>
                    <div className="row justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', justifyContent: 'center', margin: '0 auto', maxWidth: '1000px', paddingLeft: '0px' }}>
                        {featuresData.map((feature, index) => (
                            <div key={index} style={{ display: 'flex', width: 'calc(40% - 80px)' }}>
                                <div className="caliber-feature-card w-100" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '10px' }}>
                                    <div className="caliber-feature-icon" style={{ marginBottom: '24px' }}><i className={`fa ${feature.icon}`} style={{ fontSize: '60px', color: '#6a6a6aff' }}></i></div>
                                    <h3 className="caliber-feature-title" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', minHeight: 'auto', fontFamily: "'Roboto Condensed', sans-serif", color: '#0D6EFD' }}>{feature.title.toUpperCase()}</h3>
                                    <p className="caliber-feature-desc" style={{ fontSize: '16px', lineHeight: '1.6', color: '#2B2B2B', fontFamily: "'Merriweather', serif" }}>{feature.desc}</p>
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
