import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

const Expertise = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'white' }}>
            <Container maxWidth={false} sx={{ maxWidth: '1000px' }}>

                <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center', mb: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase', mb: 3 }}>
                        Developing data solutions in the media<br />& entertainment sector to drive innovation.
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Georgia, serif', color: '#2b2b2b' }}>
                        Our emphasis lies in assisting you in charting the correct course of action, eliminating uncertainty, and progressing confidently by integrating the strengths of AI & analytics.
                    </Typography>
                </Box>

                {/* Industry Blocks */}
                <IndustryBlock
                    title="CONTENT CREATION"
                    description="Our media solutions are designed to assist organizations in producing engaging content and enhancing creative workflows, all while maximizing efficiency and audience reach."
                    points={[
                        "AI-POWERED CONTENT GENERATION.",
                        "AUTOMATED VIDEO EDITING.",
                        "CONTENT OPTIMIZATION.",
                        "CREATIVE ANALYTICS."
                    ]}
                />

                <IndustryBlock
                    title="STREAMING & DISTRIBUTION"
                    description="From content delivery to audience engagement, discover how our cloud partners and data analysis are revolutionizing traditional media distribution approaches."
                    points={[
                        "STREAMING OPTIMIZATION",
                        "AUDIENCE ANALYTICS.",
                        "CONTENT RECOMMENDATION.",
                        "MULTI-PLATFORM DELIVERY."
                    ]}
                />

                <IndustryBlock
                    title="AUDIENCE ENGAGEMENT"
                    description="The convergence of media platforms with the vast capabilities of cloud technology and data analytics has democratized content consumption, making it more personalized and accessible to audiences around the world."
                    points={[
                        "PERSONALIZATION ENGINES",
                        "ENGAGEMENT METRICS.",
                        "SOCIAL MEDIA INTEGRATION.",
                        "INTERACTIVE EXPERIENCES."
                    ]}
                />

                <IndustryBlock
                    title="MONETIZATION"
                    description="In broad terms, monetization focuses on maximizing revenue streams across diverse media platforms. DO, in collaboration with its partners, has been at the forefront of driving innovation in media monetization through the following approaches."
                    points={[
                        "AD OPTIMIZATION",
                        "SUBSCRIPTION ANALYTICS",
                        "REVENUE FORECASTING",
                        "DYNAMIC PRICING"
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
                bgcolor: isHovered ? '#158aff' : '#f5f5f5',
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
                fontSize: isHovered ? "1rem" : "24px",
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
                            fontSize: '24px',
                            lineHeight: 1.1,
                            fontFamily: "'Roboto Condensed', sans-serif",
                            color: "#2b2b2b"
                        }}>
                            {point}
                        </Typography>
                    ))}
                </Box>
            )}

            <Typography variant="body1" sx={{
                fontFamily: "'Merriweather', serif",
                color: isHovered ? '#2b2b2b' : '#2b2b2b',
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
