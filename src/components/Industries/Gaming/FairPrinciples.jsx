import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const items = [
    {
        title: "FINDABLE",
        description: "Optimized In the gaming industry, data is distinguished by comprehensive metadata and features a unique, enduring identifier for enhanced organization and efficiency.",

    },
    {
        title: "ACCESSIBLE",
        description: "In the gaming industry, data and its accompanying metadata are designed to be easily understood by both humans and machines, accessible through well-defined protocols for seamless utilization.",

    },
    {
        title: "INTEROPERABLE",
        description: "Enhanced In the gaming industry, data and their associated metadata utilize formal and accessible knowledge representation methods, ensuring optimal reusability and efficiency.",

    },
    {
        title: "REUSABLE",
        description: "Transparent In the gaming industry, metadata meticulously outlines the origin and terms of use for the data, ensuring clarity and accountability in information utilization.",

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
