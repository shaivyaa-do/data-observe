import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
    {
        value: "25%",
        label: "increase in operational efficiency by automating processes, optimizing resource allocation, and streamlining workflows"
    },
    {
        value: "30%",
        label: "reduction in fraudulent activities by implementing robust fraud detection algorithms and real-time monitoring systems"
    },
    {
        value: "35%",
        label: "improvement in revenue through targeted marketing, dynamic pricing strategies, and cross-selling opportunities"
    },
    {
        value: "45%",
        label: "improvement in demand forecasting accuracy, enabling better capacity planning and resource management"
    }
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
