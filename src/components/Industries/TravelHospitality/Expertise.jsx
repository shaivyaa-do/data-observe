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
                        We prioritize guiding you towards the right course of action, eliminating uncertainties, and fostering confident progress through the integration of AI and analytics capabilities.
                    </Typography>
                </Box>

                <IndustryBlock
                    title="DO Insights"
                    description="With DO Insights, we assist in crafting a customer analytics data model that combines a wide array of guest attributes to enhance your engagement endeavors, whether you're focused on cultivating new traveler relationships or nurturing existing guests."
                    points={[
                        "Data Harmonization 360.",
                        "Guest Behaviour Intelligence.",
                        "Application Insights & Reporting.",
                        "Next best experience engine."
                    ]}
                />

                <IndustryBlock
                    title="DO ML WORKS"
                    description="Leveraging predictive analytics and modern tools such as geospatial clustering and rule-based AI, fraud prevention aids financial services entities in seamlessly detecting and preventing fraud across various domains including credit cards, checking accounts, insurance, and beyond."
                    points={[
                        "Data Harmonization 360.",
                        "Guest Behaviour Intelligence.",
                        "Application Insights & Reporting.",
                        "Next best experience engine."
                    ]}
                />

                <IndustryBlock
                    title="DO TLAP"
                    description="DO TLAP serves as a comprehensive facilitator for planning, designing, and executing travel marketing campaigns. The Test and Learn Platform (TALP) offers metrics that you can harness to improve your campaign performance."
                    points={[
                        "Data Quality Management.",
                        "Hierarchy Management.",
                        "Data Governance .",
                        "Feedback Loop."
                    ]}
                />

                <IndustryBlock
                    title="DO CX"
                    description="DO CX offers a comprehensive solution, providing a complete view of your customers and deep insights into their needs, concerns, and areas for action."
                    points={[
                        "Data harmonization 360.",
                        "Customer behavior intelligence.",
                        "Application insights & reporting.",
                        "Next best experience engine."
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
