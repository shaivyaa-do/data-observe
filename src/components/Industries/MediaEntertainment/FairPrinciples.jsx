import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const items = [
    {
        title: "METADATA-RICH DATA",
        description: "Media and entertainment data is distinguished by its comprehensive metadata and carries a unique and enduring identifier.",

    },
    {
        title: "ACCESSIBLE",
        description: "In media, data and metadata are intelligible to both humans and machines, accessible through clear protocols.",

    },
    {
        title: "KNOWLEDGE REPRESENTATION",
        description: "In media, data and metadata employ formal knowledge methods for reusability.",

    },
    {
        title: "DETAILED",
        description: "In the context of media and entertainment, metadata precisely outlines the origin and terms of data usage.",

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
