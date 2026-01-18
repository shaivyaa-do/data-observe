import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

const Expertise = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'white' }}>
            <Container maxWidth={false} sx={{ maxWidth: '1000px' }}>

                <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center', mb: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase', mb: 3 }}>
                        SOLUTIONS
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Georgia, serif', color: '#2b2b2b' }}>
                        AI services that scale and pave the way for commercial advantage in the CPG sector.
                    </Typography>
                </Box>

                {/* Industry Blocks */}
                <IndustryBlock
                    title="DO RGM"
                    description="DataObserve’s Revenue Growth Management enables sustainable revenue growth across products, consumer channels, and geographies. Gain a competitive edge with real-time CPG data insights on pricing, assortment, and distribution."
                    points={[
                        "ADAPTIVE PRICING STRATEGY",
                        "OPTIMIZED DISTRIBUTION STRATEGY",
                        "RESPONSIVE ASSORTMENT STRATEGY"
                    ]}
                />

                <IndustryBlock
                    title="DO TPE"
                    description="DataObserve’s Trade Promotion Effectiveness optimizes design and delivery at a granular level, preserving your brand equity, fostering sales growth, and maintaining channel partnerships."
                    points={[
                        "CURRENT SCENARIO ANALYSIS & BENCHMARKING",
                        "ACTIVE & PAST TRADE PROMOTION EFFECTIVENESS ANALYSIS",
                        "TRADE PROMOTION SIMULATION",
                        "EFFECTIVENESS INSIGHTS TO TRADE PROMOTION ACTION"
                    ]}
                />

                <IndustryBlock
                    title="DO MLWORKS"
                    description="Leveraging predictive analytics and modern tools such as geospatial clustering and rule-based AI, fraud prevention aids financial services entities in seamlessly detecting and preventing fraud across various domains including credit cards, checking accounts, insurance, and beyond."
                    points={[
                        "DATA HARMONIZATION 360.",
                        "CUSTOMER BEHAVIOUR INTELLIGENCE.",
                        "APPLICATION INSIGHTS & REPORTING.",
                        "NEXT BEST EXPERIENCE ENGINE."
                    ]}
                />

                <IndustryBlock
                    title="DO SCCT"
                    description="The DataObserve Supply Chain Control Tower offers real-time visibility across the supply chain and utilizes predictive, prescriptive, and cognitive models to continuously optimize your end-to-end supply chain operations."
                    points={[
                        "REAL-TIME VISUALIZATION AND DIAGNOSTICS",
                        "SCENARIO PLANNING",
                        "PRESCRIPTIVE AND PREDICTIVE ANALYTICS",
                        "REAL-TIME EVENT ALERTS"
                    ]}
                />

                <IndustryBlock
                    title="DO SUSTAINABLE ANALYTICS"
                    description="DataObserve Sustainability Analytics enables continuous monitoring, measurement, and cataloging of the cost impact and performance of your sustainability initiatives."
                    points={[
                        "ESG STRATEGY AND PERFORMANCE MANAGEMENT",
                        "ROBUST DATA MANAGEMENT",
                        "DATA MODELING AND REPORTING"
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
                bgcolor: isHovered ? '#158aff' : '#f5f5f5', // Using a standard material blue #158aff or similar
                color: isHovered ? 'white' : 'inherit',
                p: { xs: 4, md: 8 },
                mb: 4,
                width: '100%',
                minHeight: '350px',
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
                color: isHovered ? 'white' : '#2b2b2b',
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: isHovered ? "1rem" : "24px", // Smaller title on hover
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
                            fontSize: '24px', // Points font size
                            lineHeight: 1.1,
                            fontFamily: "'Roboto Condensed', sans-serif",
                            color: "#2b2b2b" // Dark text for points
                        }}>
                            {point}
                        </Typography>
                    ))}
                </Box>
            )}

            <Typography variant="body1" sx={{
                fontFamily: "'Merriweather', serif",
                color: isHovered ? '#2b2b2b' : '#2b2b2b', // Dark text for description on hover too
                lineHeight: 1.8,
                maxWidth: '900px',
                fontSize: '18px'
            }}>
                {description}
            </Typography>
        </Box>
    );
};

export default Expertise;
