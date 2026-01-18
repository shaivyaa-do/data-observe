import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const StandardsText = () => {
    return (
        <Box sx={{ py: 20, my: 15, bgcolor: "#fff" }}>
            <Container maxWidth={false} sx={{ maxWidth: "1000px" }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Increase heading width
                        gap: { xs: 8, md: 15 },
                        alignItems: "flex-start",
                        textAlign: "left"
                    }}
                >
                    <Box>
                        <Typography
                            variant="h3"
                            component="h2"
                            sx={{
                                fontWeight: 800,
                                textTransform: "uppercase",
                                fontSize: "36px",
                                lineHeight: 1.1,
                                color: "#2b2b2b",
                                fontFamily: "'Roboto Condensed', sans-serif"
                            }}
                        >
                            PROACTIVELY SPOT GROWTH OPPORTUNITIES AND MONETIZE THEM THROUGH CPG DATA ANALYTICS
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "18px",
                                lineHeight: 1.6,
                                color: "#2b2b2b",
                                mb: 4,
                                fontFamily: "Georgia, serif"
                            }}
                        >
                            With our top-tier CPG practice, we prioritize agility and offer comprehensive visibility across your value chain. Harness our profound domain knowledge and AI engineering expertise in demand forecasting, revenue optimization, trade promotions, supply chain planning, and digital customer journey to drive impactful results.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default StandardsText;
