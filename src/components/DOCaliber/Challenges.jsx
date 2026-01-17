import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import './Challenges.css';

import { MoneyOff, Speed, Security } from '@mui/icons-material';

const challengesData = [
    {
        icon: <MoneyOff sx={{ fontSize: 40, color: '#1E90FF' }} />,
        title: "Unsustainable technical debt",
        description: "Spiraling costs to maintain legacy systems, COBOL-based infrastructure, and low-code apps stitched together with code"
    },
    {
        icon: <Speed sx={{ fontSize: 40, color: '#1E90FF' }} />,
        title: "Relentless pace of change",
        description: "Constant pressure to innovate while managing existing systems and keeping up with technological evolution"
    },
    {
        icon: <Security sx={{ fontSize: 40, color: '#1E90FF' }} />,
        title: "Escalating security risks",
        description: "Growing cybersecurity threats requiring constant vigilance and updates across fragmented technology stacks"
    }
];

const Challenges = () => {
    return (
        <Box sx={{ bgcolor: '#EDEDED', py: 8, width: '100%' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#2B2B2B',
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        textAlign: 'center'
                    }}
                >
                    Challenges Confronting IT Leaders
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#666',
                        mb: 6,
                        fontSize: '1rem',
                        maxWidth: '800px',
                        margin: '0 auto 48px',
                        textAlign: 'center'
                    }}
                >
                    The relentless pace of business and tech evolution is overwhelming legacy development methods—from traditional to low/no-code.
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {challengesData.map((challenge, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper
                                className="challenge-card-static"
                                elevation={1}
                                sx={{
                                    p: 2.5,
                                    height: '100%',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Box className="challenge-icon-static" sx={{ mb: 1.5 }}>
                                    {challenge.icon}
                                </Box>
                                <Typography
                                    variant="h6"
                                    className="challenge-title-static"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1.5,
                                        fontSize: '1rem',
                                        color: '#0d6efd',
                                        lineHeight: 1.3
                                    }}
                                >
                                    {challenge.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className="challenge-description-static"
                                    sx={{
                                        color: '#666',
                                        lineHeight: 1.5,
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    {challenge.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Challenges;
