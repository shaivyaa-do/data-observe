import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const stats = [
    {
        title: 'Reduce Cost',
        value: '3x',
        description: ['Reduction in Data', 'infrastructure task']
    },
    {
        title: 'Minimize Risk',
        value: '80%',
        description: ['Reduction in', 'Data downtime']
    },
    {
        title: 'Save Time',
        value: '30%',
        description: ['Data Engineering Hours', 'Saved per Quarter']
    }
];

const InfoTop = () => {
    return (
        <Box sx={{ py: 8, bgcolor: '#EDEDED' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 4
                    }}
                >
                    {stats.map((stat, index) => (
                        <Box
                            key={index}
                            sx={{
                                textAlign: 'center',
                                p: 4,
                                borderRadius: 2,
                                bgcolor: '#f5f5f5'
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 600,
                                    mb: 2,
                                    color: '#212121'
                                }}
                            >
                                {stat.title}
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    color: '#1976d2'
                                }}
                            >
                                {stat.value}
                            </Typography>
                            {stat.description.map((line, idx) => (
                                <Typography
                                    key={idx}
                                    variant="body2"
                                    sx={{ color: '#666' }}
                                >
                                    {line}
                                </Typography>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default InfoTop;
