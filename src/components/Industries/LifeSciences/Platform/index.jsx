import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Button } from '@mui/material';

const Platform = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ py: 4, my: 8, bgcolor: 'white' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                        gap: { xs: 8, md: 40 },
                        alignItems: "flex-start",
                        textAlign: "left"
                    }}
                >
                    <Box>
                        <Typography variant="h3" sx={{
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            lineHeight: 1.2,
                            color: '#2b2b2b',
                            fontFamily: "'Roboto Condensed', sans-serif",
                            fontSize: "36px",
                            pl: 12 // Shift to right more
                        }}>
                            Life Science<br />Expertise
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{
                            mb: 4,
                            fontFamily: 'Georgia, serif',
                            color: '#2b2b2b',
                            fontSize: '18px',
                            lineHeight: 1.6,
                            maxWidth: '600px' // Reduce width
                        }}>
                            DataObserve provides a wide range of solutions tailored to the unique needs of the life science and pharmaceutical industry.
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/contact')}
                            sx={{
                                bgcolor: '#158aff',
                                color: 'white',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                px: 4,
                                py: 1.5,
                                borderRadius: "4px",
                                boxShadow: "none",
                                '&:hover': {
                                    bgcolor: '#158aff',
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

const IndustryBlock = ({ title, description }) => {
    // Placeholder for hover content interaction
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                bgcolor: '#f5f5f5',
                p: 6,
                mb: 4,
                width: '100%',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 900, textTransform: 'uppercase', mb: 2 }}>
                {title}
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Georgia, serif', color: '#444', lineHeight: 1.6, maxWidth: '800px' }}>
                {description}
            </Typography>

            {/* Hover Content Placeholder - To be implemented when content is provided */}
            {isHovered && (
                <Box sx={{ mt: 2, display: 'none' }}>
                    {/* User will provide content here */}
                </Box>
            )}
        </Box>
    );
};

export default Platform;
