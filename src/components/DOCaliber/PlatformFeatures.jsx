import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './PlatformFeatures.css';

const platformData = [
    {
        title: "Regenerative Engine",
        description: "A single, standardized platform, instead of hundreds of coding languages across a multitude of run-time engines."
    },
    {
        title: "Application Accelerators",
        description: "Pre-built, industry-specific applications and rapid customization for even faster application development."
    },
    {
        title: "Modern UX",
        description: "Modern, intuitive IDE that includes intuitive wayfinding/navigation, easily configurable module builders, and powerful search capabilities."
    },
    {
        title: "Headless API",
        description: "Rapid digitization and automation of workflows to accelerate business processes and power straight-through processing (STP)."
    },
    {
        title: "Application Components",
        description: "Regenerative application components that are automatically updated as technology and security best practices evolve."
    },
    {
        title: "Orchestration",
        description: "100% visual creation of complex workflows, from orchestration and routing to rules and dynamic flows."
    },
    {
        title: "Security",
        description: "Platform and infrastructure security and compliance out of the box, with all updates automatically applied to every component and application."
    },
    {
        title: "AI",
        description: "Rapid integration of AI models to enrich applications, and AI-powered generation of applications and advance formulas."
    },
    {
        title: "Data layer",
        description: "Structure and define data entities for consistency across apps, plus data model features that drive integrity, ease of maintenance, & performance."
    },
    {
        title: "Integration Gateway",
        description: "Seamless integration of 800+ external systems into Unqork applications, plus pre-built templates to accelerate integration builds and eliminate code."
    }
];

const PlatformFeatures = () => {
    return (
        <Box className="platform-features-section" sx={{ py: 12, bgcolor: 'white' }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: '#050505',
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontFamily: "'Roboto', sans-serif"
                        }}
                    >
                        Regenerative Platform Architecture
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#666',
                            fontSize: '1.125rem',
                            fontWeight: 400,
                            lineHeight: 1.6,
                            fontFamily: "'Roboto', sans-serif"
                        }}
                    >
                        Comprehensive platform capabilities engineered for modern enterprise needs
                    </Typography>
                </Box>

                <div className="platform-content-wrapper">
                    {/* Left Column: Content */}
                    <div className="platform-content-col">
                        <div className="platform-list">
                            {platformData.map((feature, index) => (
                                <div className="platform-item" key={index}>
                                    <div className="platform-number">{index + 1}</div>
                                    <div className="platform-item-content">
                                        <Typography className="platform-item-title">
                                            {feature.title}
                                        </Typography>
                                        <Typography className="platform-item-description">
                                            {feature.description}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="platform-image-col">
                        <img
                            src="/images/platform-layers.png"
                            alt="Platform Architecture Layers"
                            className="platform-image"
                        />
                    </div>
                </div>
            </Container>
        </Box>
    );
};

export default PlatformFeatures;
