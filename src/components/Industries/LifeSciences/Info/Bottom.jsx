import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Timeline, Storage, PrecisionManufacturing, DonutLarge, Inventory2 } from '@mui/icons-material';

const InfoBottom = () => {
    const items = [
        {
            title: "ADVANCED BUSINESS INTELLIGENCE.",
            icon: <Timeline sx={{ fontSize: 40, color: '#1E90FF' }} />,
            points: [
                {
                    title: "Integration of Advanced BI in Life Science",
                    text: "Apply analytics for drug discovery, real-time trial monitoring, and optimize resources with BI."
                },
                {
                    title: "Precision Medicine",
                    text: "Utilize BI for patient data analysis, personalized treatment plans, accelerated drug discovery, and integration into clinical decision support systems."
                },
                {
                    title: "Regulatory Compliance & Risk Management",
                    text: "Ensure compliance through BI for efficient reporting, use predictive analytics to mitigate trial risks, and establish metrics for continuous improvement."
                }
            ]
        },
        {
            title: "DATA-DRIVEN R&D.",
            icon: <Storage sx={{ fontSize: 40, color: '#1E90FF' }} />,
            points: [
                {
                    title: "Cloud-Driven Lab Informatics",
                    text: "Leverage cloud-driven lab informatics for intricate life science insights and human-centered research and development by harnessing data capabilities."
                },
                {
                    title: "Enhanced Governance of Business Processes",
                    text: "Utilize cloud-driven lab informatics for enhanced business process governance, leveraging insights from cloud data to optimize operations."
                },
                {
                    title: "Driving Human-Centered R&D",
                    text: "Harness cloud-driven lab informatics capabilities to propel human-centered research and development, gaining intricate life science insights for innovative and impactful outcomes."
                }
            ]
        },
        {
            title: "MANUFACTURING AND SUPPLY CHAIN.",
            icon: <PrecisionManufacturing sx={{ fontSize: 40, color: '#1E90FF' }} />,
            points: [
                {
                    title: "Cutting-Edge Big Data Analytics Solutions",
                    text: "Implement advanced analytics in manufacturing and supply chain, leveraging cutting-edge technology to process raw data and derive actionable insights."
                },
                {
                    title: "Comprehensive Data Conversion",
                    text: "Utilize advanced analytics tools to provide comprehensive capabilities for converting raw data into actionable roadmaps and strategic insights."
                },
                {
                    title: "Enhanced Manufacturing Operations",
                    text: "Implement big data analytics for improved efficiency and strategic planning, enabling data-driven decision-making in manufacturing."
                }
            ]
        },
        {
            title: "DECENTRALIZED CLINICAL TRIALS",
            icon: <DonutLarge sx={{ fontSize: 40, color: '#1E90FF' }} />,
            points: [
                {
                    title: "Future-Focused Clinical Trials",
                    text: "Explore innovative trial methodologies and step into the future with DataObserve's life sciences cloud."
                },
                {
                    title: "Human-Centric Decentralized Solutions",
                    text: "Utilize DataObserve's decentralized solutions for pharmaceutical tasks, enhancing clinical trial efficiency and participant experience."
                },
                {
                    title: "Transformation in Life Sciences Cloud",
                    text: "Experience a life sciences transformation with DataObserve's cloud solutions, embracing cutting-edge tech for elevated clinical trial standards."
                }
            ]
        },
        {
            title: "MEDICAL DEVICES",
            icon: <Inventory2 sx={{ fontSize: 40, color: '#1E90FF' }} />,
            points: [
                {
                    title: "Empowering Life Science Organizations",
                    text: "DataObserve empowers life science organizations for enhanced outcomes, utilizing cloud-enabled medical devices for streamlined processes."
                },
                {
                    title: "Digitizing Pharmaceutical Labs",
                    text: "Facilitate lab digitization with DataObserve, implementing cloud-enabled medical devices for modernized and improved operations."
                },
                {
                    title: "Enhanced Outcomes Through Technology",
                    text: "Achieve enhanced outcomes using DataObserve's technology, leveraging cloud-enabled medical devices for efficiency and innovation in life science and pharmaceutical settings."
                }
            ]
        }
    ];

    return (
        <Box sx={{ py: 8, bgcolor: '#EEEEEE' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 18, color: '#212121' }}>
                    WHY DATAOBSERVE’S LIFE SCIENCE?
                </Typography>

                <Box sx={{ position: 'relative' }}>
                    {/* Vertical Line */}
                    <Box sx={{
                        position: 'absolute',
                        left: { xs: 20, md: '20%' }, // Shifted left to 30%
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        bgcolor: '#333', // Darker line
                        transform: 'translateX(-50%)'
                    }} />

                    {items.map((item, index) => (
                        <Box key={index} sx={{
                            display: 'flex',
                            alignItems: 'flex-start', // Prevent stretching to reveal line
                            mb: 8,
                            position: 'relative',
                            ml: { xs: 0, md: 'calc(20% - 40px)' } // item margin matches 30%
                        }}>
                            {/* Icon Wrapper */}
                            <Box sx={{
                                minWidth: { xs: 60, md: 80 },
                                display: 'flex',
                                justifyContent: 'center',
                                pt: 1,
                                zIndex: 1,
                                bgcolor: '#EEEEEE' // Mask line behind icon if needed, or just let icon sit on top
                            }}>
                                {item.icon}
                            </Box>

                            {/* Content */}
                            <Box sx={{ pl: { xs: 2, md: 4 }, maxWidth: '700px' }}>
                                <Typography variant="h5" sx={{
                                    color: '#1E90FF',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    mb: 3,
                                    mt: 0 // Remove default margin for alignment
                                }}>
                                    {item.title}
                                </Typography>
                                <Box component="ul" sx={{ pl: 4, m: 0 }}>
                                    {item.points.map((point, idx) => (
                                        <Box component="li" key={idx} sx={{ mb: 2, fontFamily: 'Georgia, serif', color: '#444' }}>
                                            <Typography component="span" sx={{ fontWeight: 'bold' }}>
                                                {point.title}:
                                            </Typography>
                                            {' '}
                                            <Typography component="span" sx={{ fontFamily: 'Georgia, serif' }}>
                                                {point.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default InfoBottom;
