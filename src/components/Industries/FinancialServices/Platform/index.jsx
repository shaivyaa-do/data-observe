import React, { useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from "framer-motion";

const Platform = () => {
    return (
        <Box sx={{ py: 4, my: 8, bgcolor: 'white' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
                        gap: { xs: 8, md: 40 },
                        alignItems: "flex-start",
                        textAlign: "left"
                    }}
                >
                    <Box>
                        <motion.h2
                            style={{
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                lineHeight: 1.2,
                                color: '#2b2b2b',
                                fontFamily: "'Roboto Condensed', sans-serif",
                                fontSize: "36px",
                                paddingLeft: '12px',
                                margin: 0
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            FINANCIAL SERVICE
                        </motion.h2>
                    </Box>
                    <Box>
                        <motion.p
                            style={{
                                fontSize: '18px',
                                color: '#444',
                                lineHeight: '1.6',
                                marginBottom: '30px',
                                fontFamily: 'serif',
                                maxWidth: '600px'
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Crafting actionable insights and yielding concrete outcomes within the financial services sector.
                        </motion.p>
                        <Button
                            variant="contained"
                            href="https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.html"
                            sx={{
                                bgcolor: '#158aff',
                                color: 'white',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                px: 4,
                                py: 1.5,
                                borderRadius: "4px",
                                boxShadow: "none",
                                '&:hover': {
                                    bgcolor: '#158aff',
                                    boxShadow: "none"
                                }
                            }}
                        >
                            Request a demo {'>'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

const IndustryBlock = ({ title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                bgcolor: '#f5f5f5',
                p: 6,
                mb: 4,
                width: '100%',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 900, textTransform: 'uppercase', mb: 2 }}>
                {title}
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Georgia, serif', color: '#444', lineHeight: 1.6, maxWidth: '800px' }}>
                {description}
            </Typography>
        </Box>
    );
};

export default Platform;
