import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { AccountTree, Storage, Science, Inventory, Widgets, Hub, DeviceHub } from "@mui/icons-material";

const services = [
    {
        title: "SMART MANUFACTURING AND SUPPLY CHAIN SERVICES",
        description: "Enhance the long-term efficiency of your machines and processes with actionable intelligence through smart manufacturing and supply chain services. Utilize intelligent demand forecasting and planning for labor, warehouse, logistics, and dynamic production to reduce risks and make informed decisions. Increase production capacity and equipment lifespan while reducing operational costs through predictive maintenance and quality optimization.",
        icon: <AccountTree sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "DATA ENGINEERING OFFERINGS",
        description: "Our data engineering solutions address gaps in your production process by integrating end-to-end analytics for a seamless user experience. Tailored to your needs, we guide you from data ingestion to actionable insights and impactful outcomes using the appropriate ML models. Easily operationalize insights throughout your industrial value chain with our AI/ML-based digital accelerators and strategic partnerships, scaling them rapidly across your business.",
        icon: <Storage sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "DATA MIGRATION",
        description: "Our Data migration accelerators assist enterprises in unleashing the potential of their data and transitioning to a modern, cloud-native architecture. With a proven track record, DataObserve supports global manufacturers in large-scale data migration initiatives, accelerating modernization ROI through partnerships with leading hyperscalers, data, and AI companies. Our services and accelerators facilitate 50% faster migration, aiding in achieving modernization goals such as enhanced insights, increased productivity, and self-service capabilities.",
        icon: <Science sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "CUSTOMER ANALYTICS AND EXPERIENCE SERVICES",
        description: "Customer analytics and experience services provide crucial insights necessary for establishing customer-centricity as a core practice in your business. By eliminating data inconsistencies, you gain a comprehensive view of the customer, enabling tailored strategies and fostering better customer relationships. Understand and fulfill customer expectations through behavior modeling, journey mapping, and visualizations to enhance engagement strategies.",
        icon: <Inventory sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "OPTIMIZATION AND PRODUCTIVITY SERVICES",
        description: "Our optimization and productivity services enable you to achieve optimal outcomes for your business and customers while fostering sustainable growth for the future. From providing customer incentives through rebate management to assessing the cost to serve, we support you in nurturing partnerships while boosting sales with a unified source of truth.",
        icon: <Widgets sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "SUSTAINABILITY AND CSR SERVICES",
        description: "Our Sustainability and CSR Services facilitate value tracking and energy analytics, providing valuable insights into consumption to proactively reduce energy costs and implement efficient processes. Collaborating closely with your manufacturing analytics and business teams, we help build your sustainability strategy across various domains, including recyclability, waste reduction, and energy consumption. DataObserve empowers you with a comprehensive view of your enterprise footprint, monitoring your ESG scorecard, identifying high-impact opportunities, and recommending strategic actions.",
        icon: <Hub sx={{ fontSize: 60, color: "#fff" }} />
    },
    {
        title: "QUALITY AND ASSET MANAGEMENT",
        description: "Quality and asset management enable you to gather contextual insights for improving ROI and swiftly adapting to market demands with minimal risks. Identify wastage, predict system downtimes, and ensure products are defect-free and fit for purpose. Ensure optimal production quality with manufacturing data analytics for in-line quality prediction, root cause detection, and waste control to maximize revenue.",
        icon: <DeviceHub sx={{ fontSize: 60, color: "#fff" }} />
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
                    Enhance production quality and efficiency through AI-driven decision-making, controlling costs, improving productivity, and enhancing margins.
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
