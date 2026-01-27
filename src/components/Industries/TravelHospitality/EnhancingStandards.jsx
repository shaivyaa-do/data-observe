import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const EnhancingStandards = () => {
    const navigate = useNavigate();
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
                        <Box sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                onClick={() => navigate("/contact")}
                                endIcon={<KeyboardArrowRightIcon />}
                                sx={{
                                    bgcolor: "#158aff",
                                    color: "#fff",
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    borderRadius: "4px",
                                    fontWeight: 600,
                                    boxShadow: "0 4px 15px rgba(14,165,233,0.4)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "#158aff",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 6px 20px rgba(14,165,233,0.6)",
                                    },
                                }}
                            >
                                Contact us
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default EnhancingStandards;
