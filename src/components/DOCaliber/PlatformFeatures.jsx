import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
    Autorenew,
    RocketLaunch,
    DesktopMac,
    Api,
    Widgets,
    AccountTree,
    Security,
    Psychology,
    Storage,
    SettingsEthernet
} from '@mui/icons-material';
import './PlatformFeatures.css';

const platformData = [
    {
        title: "Regenerative Engine",
        description: "A single, standardized platform, instead of hundreds of coding languages across a multitude of run-time engines.",
        icon: <Autorenew sx={{ fontSize: '28px' }} />
    },
    {
        title: "Application Accelerators",
        description: "Pre-built, industry-specific applications and rapid customization for even faster application development.",
        icon: <RocketLaunch sx={{ fontSize: '28px' }} />
    },
    {
        title: "Modern UX",
        description: "Modern, intuitive IDE that includes intuitive wayfinding/navigation, easily configurable module builders, and powerful search capabilities.",
        icon: <DesktopMac sx={{ fontSize: '28px' }} />
    },
    {
        title: "Headless API",
        description: "Rapid digitization and automation of workflows to accelerate business processes and power straight-through processing (STP).",
        icon: <Api sx={{ fontSize: '28px' }} />
    },
    {
        title: "Application Components",
        description: "Regenerative application components that are automatically updated as technology and security best practices evolve.",
        icon: <Widgets sx={{ fontSize: '28px' }} />
    },
    {
        title: "Orchestration",
        description: "100% visual creation of complex workflows, from orchestration and routing to rules and dynamic flows.",
        icon: <AccountTree sx={{ fontSize: '28px' }} />
    },
    {
        title: "Security",
        description: "Platform and infrastructure security and compliance out of the box, with all updates automatically applied to every component and application.",
        icon: <Security sx={{ fontSize: '28px' }} />
    },
    {
        title: "AI",
        description: "Rapid integration of AI models to enrich applications, and AI-powered generation of applications and advance formulas.",
        icon: <Psychology sx={{ fontSize: '28px' }} />
    },
    {
        title: "Data layer",
        description: "Structure and define data entities for consistency across apps, plus data model features that drive integrity, ease of maintenance, & performance.",
        icon: <Storage sx={{ fontSize: '28px' }} />
    },
    {
        title: "Integration Gateway",
        description: "Seamless integration of 800+ external systems into Unqork applications, plus pre-built templates to accelerate integration builds and eliminate code.",
        icon: <SettingsEthernet sx={{ fontSize: '28px' }} />
    }
];

const PlatformFeatures = () => {
    return (
        <Box className="platform-features-section" sx={{ pt: 20, pb: 12, bgcolor: 'white' }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: '#2B2B2B',
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

                <div className="platform-content-wrapper" style={{ justifyContent: 'center' }}>
                    {/* Centered Column: Content */}
                    <div className="platform-content-col" style={{ margin: '0 auto', maxWidth: '800px' }}>
                        <div className="platform-list">
                            {platformData.map((feature, index) => (
                                <div className="platform-item" key={index}>
                                    <div className="platform-number">
                                        {feature.icon}
                                    </div>
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
                </div>
            </Container>
        </Box>
    );
};

export default PlatformFeatures;
