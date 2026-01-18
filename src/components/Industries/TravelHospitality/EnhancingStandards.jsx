import React from "react";
import { Box, Container, Typography } from "@mui/material";

const EnhancingStandards = () => {
    return (
        <Box sx={{ py: 12, bgcolor: "#fff" }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 8,
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    }}
                >
                    <Box sx={{ flex: 1, maxWidth: { md: "45%" } }}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 900,
                                textTransform: "uppercase",
                                fontFamily: "'Roboto Condensed', sans-serif",
                                color: "#222",
                                lineHeight: 1.2
                            }}
                        >
                            HERE’S HOW WE’VE HELPED OUR CUSTOMERS WIN AT THE LAST MILE
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, maxWidth: { md: "45%" } }}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "#444",
                                fontFamily: "Georgia, serif"
                            }}
                        >
                            Utilizing customer care feedback data to aid a prominent travel and hospitality company in gaining a deeper understanding of their customers.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default EnhancingStandards;
