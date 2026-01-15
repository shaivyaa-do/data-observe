import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

const Expertise = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'white' }}>
            <Container maxWidth={false} sx={{ maxWidth: '750px' }}>
                {/* Intro Text */}
                <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center', mb: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase', mb: 3 }}>
                        Developing data solutions in the life<br />science sector to stimulate innovation.
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Georgia, serif', color: '#444' }}>
                        Our emphasis lies in assisting you in charting the correct course of action, eliminating uncertainty, and progressing confidently by integrating the strengths of AI & analytics.
                    </Typography>
                </Box>

                {/* Industry Blocks */}
                <IndustryBlock
                    title="PHARMA"
                    description="Our life sciences solutions are designed to assist organizations in producing improved medications and enhancing operational efficiency, all while minimizing downtime."
                    points={[
                        "DRUG DISCOVERY.",
                        "DRUG COMMERCIALIZATION.",
                        "OPERATIONS AND SUPPLY-CHAIN.",
                        "PHARMACOVIGILANCE."
                    ]}
                />

                <IndustryBlock
                    title="CLINICAL DEVICES"
                    description="From pilot studies to prevention trials, discover how our cloud partners and data analysis are revolutionizing traditional clinical trial approaches."
                    points={[
                        "CLINICAL TRIAL MANAGEMENT",
                        "PATIENT ENGAGEMENT.",
                        "REAL-WORLD EVIDENCE.",
                        "DIGITAL THERAPEUTICS."
                    ]}
                />

                <IndustryBlock
                    title="MEDICAL DEVICES"
                    description="The convergence of medical devices with the vast capabilities of cloud technology and data analytics in the field of life sciences has democratized diagnostics, making them more accessible to patients around the world. Explore the diverse impacts it has across various sectors within the domain."
                    points={[
                        "DIGITAL HEALTH MANAGEMENT",
                        "ADVANCED ANALYTICS FORMED.",
                        "WEB APPS FOR MEDICAL DEVICE IMAGING.",
                        "WEARABLE IOT'S."
                    ]}
                />

                <IndustryBlock
                    title="GENOMICS"
                    description="In broad terms, Genomics is a field that focuses on the examination of DNA genomes' structure, evolution, and functionality. DO, in collaboration with its partners, has been at the forefront of driving innovation in genomics through the following approaches."
                    points={[
                        "PHARMACOGENOMICS",
                        "TERTIARY ANALYSIS",
                        "CLINICAL GENOMICS",
                        "MULTI-MODAL & MULTI-OMICS"
                    ]}
                />
            </Container>
        </Box>
    );
};

const IndustryBlock = ({ title, description, points }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                bgcolor: isHovered ? '#2196f3' : '#f5f5f5', // Using a standard material blue #2196f3 or similar, previously #1E90FF
                color: isHovered ? 'white' : 'inherit',
                p: { xs: 4, md: 8 },
                mb: 4,
                width: '100%',
                minHeight: '400px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                textAlign: 'left',
                cursor: 'pointer'
            }}
        >
            <Typography variant="h5" sx={{
                fontWeight: 900,
                textTransform: 'uppercase',
                mb: isHovered ? 2 : 4,
                color: isHovered ? 'white' : 'black',
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: isHovered ? "1rem" : "2rem", // Smaller title on hover
                transition: "all 0.3s ease"
            }}>
                {title}
            </Typography>

            {isHovered && (
                <Box sx={{ mb: 3, flexGrow: 1 }}>
                    {points.map((point, index) => (
                        <Typography key={index} variant="h4" sx={{
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            mb: 1,
                            fontSize: '2rem', // Large points
                            lineHeight: 1.1,
                            fontFamily: "'Roboto Condensed', sans-serif",
                            color: "#222" // Dark text for points
                        }}>
                            {point}
                        </Typography>
                    ))}
                </Box>
            )}

            <Typography variant="body1" sx={{
                fontFamily: "'Merriweather', serif",
                color: isHovered ? '#222' : '#444', // Dark text for description on hover too
                lineHeight: 1.8,
                maxWidth: '900px',
                fontSize: '1.25rem'
            }}>
                {description}
            </Typography>
        </Box>
    );
};

export default Expertise;
