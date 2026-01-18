import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import bgImage from "../../../assets/images/media-entertainment-img.png";

const EnhancingStandards = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh", // Adjusted height for hero background
                backgroundImage: `linear-gradient(to bottom, rgba(20,30,40,0.4), rgba(15,25,35,0.6)), url(${bgImage})`, // Lighter overlay since no text
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex", // Restore centering
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <Container maxWidth="lg" sx={{ zIndex: 2, textAlign: "center", position: "relative" }}>
                <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 500,
                            textTransform: "uppercase",
                            fontSize: "32px", // Increased size as requested
                            lineHeight: 1.2,
                            letterSpacing: "0.02em",
                            color: "#fff",
                            mb: 4,
                            textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
                            fontFamily: "'Roboto Condensed', sans-serif"
                        }}
                    >
                        ELEVATING BENCHMARKS WITHIN THE MEDIA AND ENTERTAINMENT SECTOR BY SEAMLESSLY INTEGRATING ARTIFICIAL INTELLIGENCE AND ANALYTICS.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            color: "#fff",
                            mb: 5,
                            maxWidth: "1200px",
                            mx: "auto",
                            textShadow: "0px 1px 2px rgba(0,0,0,0.5)",
                            fontFamily: "Georgia, serif"
                        }}
                    >
                        In the realm of media and entertainment, every sector poses distinctive challenges, often lacking predefined strategies for numerous pressing issues. Resolving these challenges demands a nuanced approach, striking a balance between following best practices and fostering innovative, ground-up thinking.
                    </Typography>
                    <Button
                        variant="contained"
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{
                            bgcolor: "#158aff", // Bright blue
                            color: "#fff",
                            px: 5,
                            py: 2,
                            fontSize: "1rem",
                            textTransform: "none",
                            borderRadius: "4px",
                            fontWeight: 600,
                            boxShadow: "0 4px 15px rgba(14,165,233,0.4)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: "#158aff", // Darker blue
                                transform: "translateY(-2px)",
                                boxShadow: "0 6px 20px rgba(14,165,233,0.6)",
                            },
                        }}
                    >
                        Contact
                    </Button>
                </Box>
            </Container>

            {/* Bottom Gradient Fade */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "250px", // Increased height for smoother fade
                    background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
                    zIndex: 1,
                }}
            />
        </Box>
    );
};

export default EnhancingStandards;
