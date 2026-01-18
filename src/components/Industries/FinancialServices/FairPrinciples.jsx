import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { TrendingUp, Handshake, AccountBalance, Engineering } from "@mui/icons-material";

const items = [
    {
        title: "ACCELERATE SPEED TO VALUE",
        description: "Through harnessing our arsenal of 30+ customer tools and accelerators tailored for the financial services industry, we deliver value 50% faster than off-the-shelf solutions.",
        icon: <TrendingUp sx={{ fontSize: 60, color: "#333" }} />
    },
    {
        title: "WINNING PARTNERSHIP ECOSYSTEM",
        description: "Revamp your analytics operations by tapping into our vast partner ecosystem, comprising a proprietary suite of accelerators and hyperscaler platforms.",
        icon: <Handshake sx={{ fontSize: 60, color: "#333" }} />
    },
    {
        title: "BANK ON A PROVEN PARTNER IN CUSTOMER ANALYTICS",
        description: "Our customers acknowledge us as trusted providers and partners in Customer Analytics Services.",
        icon: <AccountBalance sx={{ fontSize: 60, color: "#333" }} />
    },
    {
        title: "BUILD RESILIENCE IN THE FACE OF COMPETITION",
        description: "With our proficiency and readiness to deliver large-scale analytics solutions for both B2B and B2C businesses, coupled with our track record of supporting top-tier retail and CPG enterprises.",
        icon: <Engineering sx={{ fontSize: 60, color: "#333" }} />
    },
];

const FairPrinciples = () => {
    return (
        <Box sx={{ py: 10, bgcolor: "#fff" }}>
            <Container maxWidth={false} sx={{ maxWidth: "1000px" }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                        gap: { xs: 6, md: 10 },
                        width: "100%"
                    }}
                >
                    {items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                textAlign: "left",
                                width: "100%"
                            }}
                        >
                            <Box sx={{ mb: 2 }}>{item.icon}</Box>
                            <Typography
                                variant="h4"
                                component="h3"
                                sx={{
                                    fontWeight: 800,
                                    mb: 2,
                                    textTransform: "uppercase",
                                    color: "#222",
                                    fontFamily: "'Roboto Condensed', sans-serif"
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#444",
                                    fontSize: "18px",
                                    lineHeight: 1.8
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container >
        </Box >
    );
};

export default FairPrinciples;
