import React from 'react';
import { Box, Typography, Container, Breadcrumbs, Link, Button } from '@mui/material';
import cpgVid from '../../../../assets/videos/CPG-vid.mp4';

const HeroTop = () => {
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
                            CPG
                        </Typography>
                    </Breadcrumbs>

                    <Button
                        variant="contained"
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
                        href="https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.html"
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
                        filter: 'grayscale(90%) blur(1px)',
                        transform: 'scale(1.25)'
                    }}
                >
                    <source src={cpgVid} type="video/mp4" />
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
                    <Box sx={{ pl: { xs: 5, md: 15 } }}>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: '500', fontSize: { xs: '36px', md: '36px' }, mb: 2, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '2px', fontFamily: "'Roboto Condensed', sans-serif" }}>
                            CPG
                        </Typography>
                        <Typography variant="h6" sx={{ maxWidth: '600px', fontWeight: '300', color: '#ffffff', fontSize: { xs: '18px', md: '18px' }, fontFamily: 'Georgia, serif' }}>
                            Explore a purposeful career journey within a collaborative setting.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default HeroTop;
