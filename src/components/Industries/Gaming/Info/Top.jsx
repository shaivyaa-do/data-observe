import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
    { value: '40%', label: 'through personalized gaming experiences and targeted content delivery.' },
    { value: '30%', label: 'improvement in game performance by optimizing server infrastructure, reducing latency, and minimizing downtime.' },
    { value: '25%', label: 'increase in revenue through more effective monetization strategies, such as in-game purchases, advertising, and subscription models.' },
    { value: '45%', label: 'accelerate content delivery speeds, enabling faster updates, patches, and downloadable content (DLC) releases.' },
];

const InfoTop = () => {
    return (
        <Box sx={{ py: 8, bgcolor: '#EEEEEE' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
                        gap: 4
                    }}
                >
                    {stats.map((stat, index) => (
                        <Box key={index}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#158aff', fontSize: '36px' }}>
                                {stat.value}
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.6, fontFamily: 'Georgia, serif', color: '#2b2b2b' }}>
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default InfoTop;
