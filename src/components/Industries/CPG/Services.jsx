import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { BlurCircular, Storage, Terminal, PendingActions } from "@mui/icons-material";

const services = [
    {
        title: "DATA ENGINEERING",
        description: "DataObserve empowers the CPG sector with extensive data engineering and modernization services, enabling insights creation and adoption across all decision-making levels. Our solutions prioritize cost reduction, avoidance of technical debt, and long-term sustainability.",
        icon: <BlurCircular sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "DATA MIGRATION",
        description: "Our data migration accelerators assist enterprises in unleashing the potential of their data and facilitate migration to a modern, cloud-native architecture. DataObserve boasts a proven track record of supporting global CPG businesses in large-scale data migration initiatives, accelerating modernization ROI through partnerships with leading hyperscalers, data, and AI companies.",
        icon: <Storage sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "HUMANIZING AI",
        description: "We curate specific datasets for out-of-the-box solutions to swiftly gain insights and a deeper understanding of our clients' customers beyond what traditional platform reporting offers.",
        icon: <Terminal sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "CLOSING THE LAST MILE IN CPG ANALYTICS",
        description: "Our platform modernization and implementation services aid in migrating your data from legacy platforms to a modern technology stack, reducing costs and significantly streamlining processes. This enables the development of self-service capabilities and facilitates data-driven decision-making consistently.",
        icon: <PendingActions sx={{ fontSize: 60, color: "#fff" }} />
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
                        fontFamily: "'Roboto Condensed', sans-serif",
                        color: "#ffffff"
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
                        color: "#ffffff",
                        lineHeight: 1.6
                    }}
                >
                    Enabling CPG enterprises with AI and analytics throughout the entirety of the customer lifecycle journey.
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
                                        fontFamily: "'Roboto Condensed', sans-serif",
                                        color: "#ffffff"
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
                                        color: "#ffffff"
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
