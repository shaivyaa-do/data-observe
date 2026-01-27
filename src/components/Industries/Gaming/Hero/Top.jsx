import React from 'react';
import { Box, Typography, Container, Breadcrumbs, Link, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import mediaVid from '../../../../assets/videos/gaming-vid.mp4';

const HeroTop = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            {/* Custom Header Section */}
            <Box sx={{ bgcolor: '#2b2b2b', py: 2 }}>
                <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Breadcrumbs
                        separator={<span style={{ color: 'white', fontSize: '1.2rem', margin: '0 8px' }}>&gt;</span>}
                        aria-label="breadcrumb"
                        sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
                    >
                        {/* Logo */}
                        <Link href="/" sx={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
                            <img
                                src="/images/header-logo-new.png"
                                alt="logo"
                                height={28}
                                style={{ display: 'block', marginRight: '10px' }}
                            />
                        </Link>

                        <Link underline="always" color="inherit" href="/industries-hub" sx={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>
                            Industries
                        </Link>
                        <Typography color="inherit" sx={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>
                            Gaming
                        </Typography>
                    </Breadcrumbs>

                    <Button
                        variant="contained"
                        onClick={() => navigate('/contact')}
                        sx={{
                            bgcolor: '#158aff',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            borderRadius: 1,
                            px: 3,
                            '&:hover': {
                                bgcolor: '#158aff'
                            }
                        }}
                    >
                        Contact Us &gt;
                    </Button>
                </Container>
            </Box>

            {/* Video Hero Section */}
            <Box sx={{ position: 'relative', height: '500px', width: '100%', overflow: 'hidden', color: 'white' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                        filter: 'grayscale(90%) blur(1px)'
                    }}
                >
                    <source src={mediaVid} type="video/mp4" />
                </video>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 0
                    }}
                />
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: '500', fontSize: '36px', mb: 2, textTransform: 'uppercase', color: '#ffffff' }}>
                            Gaming
                        </Typography>
                        <Typography variant="h6" sx={{ maxWidth: '600px', fontWeight: '500', color: '#ffffff', fontSize: '16px' }}>
                            Explore a purposeful career journey within a collaborative setting.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default HeroTop;
