import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const StandardsText = () => {
    return (
        <Box sx={{ py: 20, my: 15, bgcolor: "#fff" }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: { xs: 8, md: 40 },
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
                                fontSize: { xs: "2.5rem", md: "3rem" },
                                lineHeight: 1.1,
                                color: "#222",
                                fontFamily: "'Roboto Condensed', sans-serif"
                            }}
                        >
                            LIFE SCIENCE<br />EXPERTISE
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "1.25rem",
                                lineHeight: 1.6,
                                color: "#444",
                                mb: 4,
                                fontFamily: "Georgia, serif"
                            }}
                        >
                            DataObserve provides a wide range of solutions tailored to the unique needs of the life science and pharmaceutical industry.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#1E90FF",
                                color: "#fff",
                                textTransform: "none",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                px: 4,
                                py: 1.5,
                                borderRadius: "4px",
                                boxShadow: "none",
                                "&:hover": {
                                    bgcolor: "#1C86EE",
                                    boxShadow: "none"
                                }
                            }}
                        >
                            Request a demo {'>'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default StandardsText;
