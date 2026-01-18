import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const InfoBottom = () => {
    const items = [
        {
            title: "BUILD RESILIENCE AND DRIVE ACCURATE DEMAND FORECAST",
            icon: <CheckCircleOutline sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "",
                    text: "Leverage the DataObserve advantage in Industrials to foster resilience and enhance demand forecast accuracy."
                }
            ]
        },
        {
            title: "ENHANCE PREDICTABILITYAND INCREASE ROI",
            icon: <CheckCircleOutline sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "",
                    text: "Leverage the DataObserve advantage in Industrials to enhance predictability and maximize ROI."
                }
            ]
        },
        {
            title: "MAXIMIZE EFFICIENCY AND PRODUCTIVITY",
            icon: <CheckCircleOutline sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "",
                    text: "Leverage the DataObserve advantage in Industrials to maximize efficiency and productivity."
                }
            ]
        }
    ];

    return (
        <Box sx={{ py: 8, bgcolor: '#EEEEEE' }}>
            <Container maxWidth={false} sx={{ maxWidth: "1000px" }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 10, color: '#2b2b2b' }}>
                    THE DATAOBSERVE ADVANTAGE IN INDUSTRIALS
                </Typography>

                <Box sx={{ position: 'relative' }}>
                    {/* Vertical Line */}
                    <Box sx={{
                        position: 'absolute',
                        left: { xs: 20, md: '20%' }, // Shifted left to 30%
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        bgcolor: '#333', // Darker line
                        transform: 'translateX(-50%)'
                    }} />

                    {items.map((item, index) => (
                        <Box key={index} sx={{
                            display: 'flex',
                            alignItems: 'flex-start', // Prevent stretching to reveal line
                            mb: 0,
                            position: 'relative',
                            ml: { xs: 0, md: 'calc(20% - 40px)' }, // item margin matches 30%
                            minHeight: '200px'
                        }}>
                            {/* Icon Wrapper */}
                            <Box sx={{
                                minWidth: { xs: 60, md: 80 },
                                display: 'flex',
                                justifyContent: 'center',
                                pt: 1,
                                zIndex: 1,
                                bgcolor: '#EEEEEE' // Mask line behind icon if needed, or just let icon sit on top
                            }}>
                                {item.icon}
                            </Box>

                            {/* Content */}
                            <Box sx={{ pl: { xs: 2, md: 4 }, maxWidth: '700px' }}>
                                <Typography variant="h5" sx={{
                                    color: '#158aff',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    mb: 2,
                                    mt: 0, // Remove default margin for alignment
                                    fontSize: '36px'
                                }}>
                                    {item.title}
                                </Typography>
                                <Box component="ul" sx={{ pl: 4, m: 0 }}>
                                    {item.points.map((point, idx) => (
                                        <Box component="li" key={idx} sx={{ mb: 2, fontFamily: 'Georgia, serif', color: '#2b2b2b', fontSize: '18px' }}>
                                            <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                                                {point.title}{point.title ? ':' : ''}
                                            </Typography>
                                            {' '}
                                            <Typography component="span" sx={{ fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                                                {point.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default InfoBottom;
