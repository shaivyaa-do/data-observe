import React from "react";
import { Box, Container, Typography } from "@mui/material";

const items = [
    {
        title: "DECREASED MEAN TIME TO RESOLUTION",
        description: "Through harnessing our arsenal of 30+ customer tools and accelerators tailored for the financial services industry, we deliver value 50% faster than off-the-shelf solutions.",
    },
    {
        title: "HIGHER CUSTOMER RETENTION ECOSYSTEM",
        description: "Higher customer retention signifies the success of a business in maintaining loyal clientele, fostering trust, and ensuring sustained revenue streams over time.",
    },
    {
        title: "NEWER OPPORTUNITIES FOR VARIOUS CUSTOMER TOUCHPOINTS",
        description: "Explore fresh opportunities across diverse customer touchpoints for enhanced engagement and satisfaction.",
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
