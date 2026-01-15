import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const items = [
    {
        title: "FINDABLE",
        description: "Data is characterized by comprehensive metadata & possesses a distinct and enduring identifier.",
        icon: <FileCopyOutlinedIcon sx={{ fontSize: 60, color: "#333" }} />,
    },
    {
        title: "ACCESSIBLE",
        description: "Data, along with its associated metadata, is comprehensible to both humans and machines and can be accessed through clearly defined protocols.",
        icon: <FileCopyOutlinedIcon sx={{ fontSize: 60, color: "#333" }} />,
    },
    {
        title: "INTEROPERABLE",
        description: "Data and their accompanying metadata employ formal and accessible knowledge representation methods to ensure their reusability.",
        icon: <HandshakeOutlinedIcon sx={{ fontSize: 60, color: "#333" }} />,
    },
    {
        title: "REUSABLE",
        description: "With our proficiency and readiness to deliver large-scale analytics solutions for both B2B and B2C businesses, coupled with our track record of supporting top-tier retail and CPG enterprises.",
        icon: <CachedOutlinedIcon sx={{ fontSize: 60, color: "#333" }} />,
    },
];

const FairPrinciples = () => {
    return (
        <Box sx={{ py: 10, bgcolor: "#fff" }}>
            <Container maxWidth="lg">
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
                                // Removed fixed width/height to let Grid handle sizing
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
                                    fontFamily: "'Roboto Condensed', sans-serif" // Explicitly ensure font
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#444",
                                    fontSize: "1.05rem",
                                    lineHeight: 1.8
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FairPrinciples;
