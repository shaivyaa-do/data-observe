import React from 'react';
import { Box, Container } from '@mui/material';

const VideoSection = ({ videoSrc }) => {
    return (
        <Container maxWidth="md" sx={{ mt: -15, mb: 8, position: 'relative', zIndex: 2 }}>
            <Box
                sx={{
                    width: '80%',
                    mx: 'auto', // Center the box
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
                    lineHeight: 0,
                }}
            >
                <video
                    width="100%"
                    height="auto"
                    controls
                    preload="metadata"
                    style={{ display: 'block' }}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Box>
        </Container>
    );
};

export default VideoSection;
