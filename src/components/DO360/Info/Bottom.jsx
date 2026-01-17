import React from 'react';
import { Container, Paper, Box } from "@mui/material";
import { useSelector } from "react-redux";

const featuresData = [
    { icon: "fa-eye", title: "End-to-End Data Visibility", desc: "Gain complete visibility across your data lifecycle — ingestion, transformation, and consumption — all in one unified view." },
    { icon: "fa-wrench", title: "Beyond Traditional Monitoring", desc: "DO 360 doesn’t just alert when something breaks. It helps you understand why it happened and how to prevent it." },
    { icon: "fa-search", title: "Detect Known & Unknown Issues", desc: "Identify both expected anomalies and hidden data issues — even when you don’t know what to look for in advance." },
    { icon: "fa-clock-o", title: "Real-Time Issue Resolution", desc: "Detect and resolve data issues as they happen, minimizing downtime and preventing downstream impact." },
    { icon: "fa-sitemap", title: "Built for Complex Data Ecosystems", desc: "Designed to scale across modern, distributed, and evolving data environments without manual overhead." },
    { icon: "fa-check-circle", title: "Trustworthy Data for Confident Decisions", desc: "Ensure data accuracy, reliability, and freshness — so business and analytics teams can rely on data with confidence." },
];

const InfoBottom = () => {
    const themeMode = useSelector((state) => state.themeReducer?.mode) || 'light';

    return (
        <Box sx={{ py: 10, width: "100%", bgcolor: themeMode === "light" ? "#ffffff" : "background.paper" }}>
            <Container maxWidth="lg">
                <Paper sx={{ bgcolor: "transparent", p: 8, borderRadius: 0 }} elevation={0}>
                    <h2 className="caliber-section-title text-center" style={{ fontFamily: "'Roboto Condensed', sans-serif", fontSize: '2.2rem', marginBottom: '48px', color: '#2B2B2B' }}>Why DataObserve 360</h2>

                    <div className="row justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', justifyContent: 'center', margin: '0 auto', maxWidth: '1000px', paddingLeft: '150px' }}>
                        {featuresData.map((feature, index) => (
                            <div key={index} style={{ display: 'flex', width: 'calc(50% - 40px)' }}>
                                <div className="caliber-feature-card w-100" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', padding: '0px' }}>
                                    <div className="caliber-feature-icon" style={{ marginBottom: '24px' }}><i className={`fa ${feature.icon}`} style={{ fontSize: '60px', color: '#2B2B2B' }}></i></div>
                                    <h3 className="caliber-feature-title" style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px', minHeight: 'auto', fontFamily: "'Roboto Condensed', sans-serif", color: '#2B2B2B' }}>{feature.title.toUpperCase()}</h3>
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
