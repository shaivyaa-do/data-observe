import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
    { value: '30%', label: 'improvement in demand forecasting accuracy, enabling CPG companies to optimize inventory levels and reduce stockouts.' },
    { value: '35%', label: 'increase in supply chain efficiency by optimizing transportation routes, reducing lead times, and improving inventory management.' },
    { value: '15%', label: 'increase in successful product launches by providing insights into consumer preferences, market trends, and competitor analysis.' },
    { value: '20%', label: 'through optimized production processes, reduced waste, and improved resource allocation.' },
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
