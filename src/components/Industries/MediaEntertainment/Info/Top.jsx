import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
    { value: '35%', label: 'increase in content recommendation accuracy, enhancing user engagement and satisfaction' },
    { value: '30%', label: 'improvement in understanding audience preferences and behavior, enabling targeted content creation and distribution.' },
    { value: '45%', label: 'accelerate content delivery speeds, reducing buffering times and improving overall user experience.' },
    { value: '45%', label: 'accelerate content delivery speeds, reducing buffering times and improving overall user experience.' },
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
