import React from 'react';
import { Container, Paper, Box } from "@mui/material";
import { useSelector } from "react-redux";

const featuresData = [
    { icon: "fa-server", title: "Balance No-Code With Extensibility", desc: "Exera AI helps enterprises go beyond proofs of concept and deploy AI at scale" },
    { icon: "fa-cogs", title: "Avoid Full AI Replacement Thinking", desc: "We put experience at the heart of everything we build, with engineering as our core strength" },
    { icon: "fa-code-fork", title: "Structured Human–AI Collaboration", desc: "That’s our approach to building future-ready solutions that matter to your business" },
    { icon: "fa-cubes", title: "AI that Delivers, Not Just Demos", desc: "Exera AI helps enterprises go beyond proofs of concept and deploy AI at scale" },
    { icon: "fa-rocket", title: "Engineered for Experience, Built for Impact", desc: "We put experience at the heart of everything we build, with engineering as our core strength" },
    { icon: "fa-lock", title: "Where Industry Leads, Technology Enables", desc: "That’s our approach to building future-ready solutions that matter to your business" },
];

const InfoBottom = () => {
    const themeMode = useSelector((state) => state.themeReducer?.mode) || 'light';

    return (
        <Box sx={{ py: 10, width: "100%", bgcolor: themeMode === "light" ? "#ffffff" : "background.paper" }}>
            <Container maxWidth="lg">
                <Paper sx={{ bgcolor: "transparent", p: 8, borderRadius: 0 }} elevation={0}>
                    <h2 className="caliber-section-title text-center" style={{ alignItems: 'center', fontFamily: "'Roboto Condensed', sans-serif", fontSize: '2.2rem', marginBottom: '16px' }}>Beyond Products. Toward Possibilities.</h2>
                    <p className="text-center mb-5" style={{ alignItems: 'center', fontFamily: "'Roboto', sans-serif", fontSize: '18px', color: '#2B2B2B', maxWidth: '800px', margin: '0 auto 48px auto' }}>
                        AI that delivers impact — not just demos.
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
