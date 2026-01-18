import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import caseStudyImage from "../../../assets/images/gaming-img.png"; // Placeholder
import footerlandVideo from "../../../assets/videos/footerland.mp4";

const industries = [
    {
        title: "MEDIA & ENTERTAINMENT",
        description: "Explore a purposeful career journey within a collaborative setting.",
        image: caseStudyImage,
    },
    {
        title: "FINANCE",
        description: "Explore a purposeful career journey within a collaborative setting.",
        image: caseStudyImage,
    },
    {
        title: "TRAVEL & HOSPITALITY",
        description: "Explore a purposeful career journey within a collaborative setting.",
        image: caseStudyImage,
    },
];

const RelatedIndustries = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                height: { xs: "auto", md: "850px" },
                display: "grid",
                // Ensure 3 equal columns + 1 narrower column
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr) 300px", md: "repeat(3, 1fr) 300px" },
                gridTemplateRows: { xs: "auto", sm: "1fr" },
            }}
        >
            {industries.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: "500px", sm: "100%" },
                        bgcolor: "#2b2b2b",
                        overflow: "hidden",
                        isolation: "isolate",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,0,0,0.5)", // Dark overlay for text readability
                            zIndex: 1,
                        }
                    }}
                >
                    {/* Video Background */}
                    <Box
                        component="video"
                        src={footerlandVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 0,
                            filter: "grayscale(90%) blur(1px)" // Applied grayscale and blur
                        }}
                    />

                    {/* Content */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: 4,
                            zIndex: 2,
                            color: "#ffffff",
                            textAlign: "left"
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h3"
                            sx={{
                                fontWeight: 800,
                                mb: 1,
                                textTransform: "uppercase",
                                fontSize: { xs: "1.5rem", lg: "2rem" },
                                lineHeight: 1.1,
                                color: "#ffffff"
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 3,
                                fontSize: "1rem",
                                opacity: 0.9,
                                maxWidth: "90%",
                                color: "#ffffff"
                            }}
                        >
                            {item.description}
                        </Typography>
                        <Button
                            variant="contained"
                            endIcon={<KeyboardArrowRightIcon />}
                            sx={{
                                bgcolor: "#158aff",
                                color: "#ffffff",
                                textTransform: "none",
                                borderRadius: "4px",
                                px: 3,
                                py: 1,
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                width: "fit-content",
                                "&:hover": { bgcolor: "#158aff" },
                            }}
                        >
                            View
                        </Button>
                    </Box>
                </Box>
            ))}

            {/* Explore Industries Panel */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "200px", sm: "100%" },
                    bgcolor: "#158aff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    "&:hover": { bgcolor: "#137ce6" },
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", color: "#ffffff", gap: 1 }}>
                    <Typography variant="h6" component="span" sx={{ fontWeight: 700, fontSize: "1.2rem", color: "#ffffff" }}>
                        Explore Industries
                    </Typography>
                    <KeyboardArrowRightIcon />
                </Box>
            </Box>
        </Box>
    );
};

export default RelatedIndustries;
