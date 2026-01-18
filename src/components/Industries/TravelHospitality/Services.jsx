import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Hub, Storage, Layers, AccountTree } from "@mui/icons-material";

const services = [
    {
        title: "MACHINE LEARNING AND AI-ENABLED ADVANCED ANALYTICS IN HOSPITALITY",
        description: "Utilize machine learning and AI-driven analytics for hospitality and travel management to generate insights throughout the customer journey. Employ our solutions to enhance hyper-personalization, customer acquisition, pricing strategies, promotions, and churn reduction, ultimately fostering increased customer satisfaction.",
        icon: <Hub sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "DATA MIGRATION",
        description: "Our data migration accelerators facilitate enterprises in harnessing the potential of their data and transitioning to a modern, cloud-native architecture. DataObserve boasts a successful history of supporting large-scale data migration endeavors for global travel and hospitality businesses, expediting modernization ROI through partnerships with prominent hyperscalers, data, and AI companies.",
        icon: <Storage sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "PLATFORM MODERNIZATION AND IMPLEMENTATION SERVICES",
        description: "Our platform modernization and implementation services assist in migrating data from legacy platforms to modern technology stacks, reducing costs and streamlining processes significantly. This enables the development of self-service capabilities and facilitates data-driven decision-making on a consistent basis.",
        icon: <Layers sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "DATA MANAGEMENT AND MANAGED SERVICES",
        description: "Utilize our accelerators for data management and managed services, which cleanse your data and continually refine your environment to minimize costs. Harness our prescriptive analytics solutions for hospitality and travel management to obtain real-time insights that enhance customer experiences.",
        icon: <AccountTree sx={{ fontSize: 60, color: "#fff" }} />
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
                        fontWeight: "900", // Increased weight to match other headers
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
                        color: "#fff",
                        lineHeight: 1.6
                    }}
                >
                    Empowering financial services and retail banking enterprises with AI and analytics throughout the entirety of the customer lifecycle journey.
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
                                        color: "#ccc"
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
