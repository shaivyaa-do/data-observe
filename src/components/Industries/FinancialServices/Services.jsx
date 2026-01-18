import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Schema, Hub, Groups, Security } from "@mui/icons-material";

const services = [
    {
        title: "DATA ENGINEERING",
        description: "DataObserve empowers the financial services sector through extensive data engineering and modernization services, fostering insights creation and adoption across all decision-making levels. Our solutions emphasize cost reduction, avoidance of technical debt, and long-term sustainability.",
        icon: <Schema sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "CUSTOMER EXPERIENCE MANAGEMENT & DIGITAL",
        description: "As a pioneer in customer analytics, DataObserve offers comprehensive solutions for end-to-end customer experience analytics, strategy, and governance. Our services aim to elevate personalization, foster a well-regulated analytics culture, and deliver real-time customer intelligence to diminish churn, enrich experiences, and amplify revenue streams.",
        icon: <Hub sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "ML-OPS",
        description: "MLOps offers a robust framework for scaling the AI lifecycle effectively. Recognizing the significance of scalability, DataObserve introduces MLWorks, a comprehensive solution that automates workflows, integrates pre-built accelerators, monitors model degradation, manages code workflows, and streamlines model monitoring across the enterprise.",
        icon: <Groups sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "FRAUD INTELLIGENCE",
        description: "In the face of persistent financial fraud and online scams affecting organizations and customers worldwide, banks confront the challenge of countering increasing levels of sophistication in intentional fraud, third-party account takeover, and money laundering. These malicious activities constantly evolve, prompting banks to innovate while maintaining a seamless customer experience.",
        icon: <Security sx={{ fontSize: 60, color: "#fff" }} />
    }
];

const Services = () => {
    return (
        <Box sx={{ py: 10, bgcolor: "#2b2b2b", color: "#fff" }}>
            <Container maxWidth={false} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        mb: 2,
                        fontSize: "36px",
                        fontFamily: "'Roboto Condensed', sans-serif"
                    }}
                >
                    SERVICES
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        maxWidth: "800px",
                        mb: 8,
                        fontSize: "18px",
                        fontFamily: "Georgia, serif",
                        color: "#CCCCCC", // Explicit Light Grey
                        lineHeight: 1.6
                    }}
                >
                    Enabling financial services and retail banking enterprises with AI and analytics throughout the entirety of the customer lifecycle journey.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 4, width: "100%", alignItems: "center" }}>
                    {services.map((service, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: "100%",
                                maxWidth: "1100px",
                                minHeight: "380px",
                                bgcolor: "#383838",
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                                p: { xs: 4, md: 8 },
                                gap: 6,
                                borderRadius: "4px"
                            }}
                        >
                            <Box sx={{ minWidth: "100px", display: "flex", justifyContent: "center" }}>
                                {service.icon}
                            </Box>
                            <Box sx={{ textAlign: "left" }}>
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{
                                        fontWeight: "bold",
                                        textTransform: "uppercase",
                                        mb: 3,
                                        fontSize: "36px",
                                        fontFamily: "'Roboto Condensed', sans-serif"
                                    }}
                                >
                                    {service.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "18px",
                                        fontFamily: "Georgia, serif",
                                        lineHeight: 1.8,
                                        color: "#B0B0B0" // Explicit Medium Grey
                                    }}
                                >
                                    {service.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
