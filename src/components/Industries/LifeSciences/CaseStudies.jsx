import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import caseStudyImage from "../../../assets/images/others/case-study1.png";

const CaseStudies = () => {
    return (
        <Box component="section" sx={{ py: 10, bgcolor: "#2b2b2b", color: "#fff" }}>
            <Container maxWidth={false} sx={{ maxWidth: "1000px" }}>
                {/* Section Title */}
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        mb: 6,
                        textAlign: "left",
                        color: "#fff",
                        fontFamily: "'Roboto Condensed', sans-serif", // Explicitly ensure font
                        fontSize: "36px"
                    }}
                >
                    Our Case Studies
                </Typography>

                {/* Content Container - Flexbox */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }, // Stack on mobile, Row on desktop
                        alignItems: "center",
                        gap: { xs: 4, md: 8 }, // Gap between Image and Text
                    }}
                >
                    {/* Left Column: Image (~55-60%) */}
                    <Box
                        sx={{
                            flex: { xs: "1 1 100%", md: "0 0 55%" }, // Grow on mobile, fixed 55% on desktop
                            width: "100%",
                        }}
                    >
                        <Box
                            component="img"
                            src={caseStudyImage}
                            alt="Case Study Team"
                            sx={{
                                width: "100%", // Fills the 55% container
                                height: "auto",
                                borderRadius: "24px",
                                objectFit: "cover",
                                display: "block", // Removes bottom space inline-block issues
                            }}
                        />
                    </Box>

                    {/* Right Column: Content (~40-45%) */}
                    <Box
                        sx={{
                            flex: { xs: "1 1 100%", md: "1 1 auto" }, // Takes remaining space
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h3"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                textTransform: "uppercase",
                                fontSize: "30px", // Updated to 30px
                                lineHeight: 1.2,
                                color: "#fff",
                                fontFamily: "'Roboto Condensed', sans-serif" // Explicitly ensure font
                            }}
                        >
                            BUILT A UNIFIED AUGMENTED ANALYTICS DECISION INTELLIGENCE PLATFORM
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "18px", // Updated to 18px
                                lineHeight: 1.8,
                                mb: 4,
                                color: "#ccc"
                            }}
                        >
                            Learn how we created a self-service, predictive, insights platform driven by an adaptive machine learning engine which helps improve decision-making.
                        </Typography>
                        <Button
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}
                            sx={{
                                bgcolor: "#158aff",
                                color: "#fff",
                                px: 4,
                                py: 1,
                                fontSize: "1rem",
                                textTransform: "none",
                                borderRadius: "4px",
                                "&:hover": {
                                    bgcolor: "#158aff",
                                },
                            }}
                        >
                            Read
                        </Button>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
};

export default CaseStudies;
