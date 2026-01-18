import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const stats = [
    { value: '80%', label: 'accelerate data processing speeds, enabling financial institutions to handle large volumes of data in real-time.' },
    { value: '40%', label: 'reduce security breaches, through advanced encryption methods, access controls, and anomaly detection systems.' },
    { value: '30%', label: 'cost savings, optimizing data storage, reducing infrastructure complexity, and minimizing manual data processing efforts.' },
    { value: '35%', label: 'improve risk management practices and reduce the likelihood of financial losses' },
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
