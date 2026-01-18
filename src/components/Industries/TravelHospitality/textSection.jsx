import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const StdText = () => {
    return (
        <Box sx={{ py: 20, bgcolor: "#fff" }}>
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
                            Here’s how we’ve helped our customers win at the last mile

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

                            Utilizing customer care feedback data to aid a prominent travel and hospitality company in gaining a deeper understanding of their customers.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default StdText;
