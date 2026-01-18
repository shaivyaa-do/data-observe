import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
    { value: '42%', label: 'reduction in the time required for drug discovery processes through advanced analytics, simulation, and modeling techniques.' },
    { value: '30%', label: 'improvement in research collaboration by enabling secure data sharing, interoperability, and real-time collaboration platforms.' },
    { value: '15%', label: 'increase in positive patient outcomes by enabling personalized medicine approaches, predictive diagnostics, and treatment optimization.' },
    { value: '25%', label: 'reduction in regulatory compliance costs by automating compliance processes, ensuring data integrity, and facilitating audit trails.' },
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
