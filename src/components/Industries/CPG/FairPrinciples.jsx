import React from "react";
import { Box, Container, Typography } from "@mui/material";

const items = [
    {
        title: "DATA CONSOLIDATION CHALLENGES IN VALUE CHAIN",
        description: "Due to the fragmentation of CPG data across disjointed business functions, generating substantial impact becomes costly and unscalable."
    },
    {
        title: "A DELUGE OF DATA FROM HETEROGENEOUS MARKETS",
        description: "This complexity arises when processing numerous localizations to implement insight-driven strategies at more granular levels."
    },
    {
        title: "LIMITED ACTIONABLE INSIGHTS FOR FUTURE GROWTH",
        description: "This complexity hinders the upgrade and sustainability of core commercial capabilities and the measurement of impact."
    }
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
