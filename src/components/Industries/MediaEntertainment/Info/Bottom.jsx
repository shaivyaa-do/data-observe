import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Waves, OnlinePrediction, ManageAccounts, PermMedia, ModelTraining, Dns } from '@mui/icons-material';

const InfoBottom = () => {
    const items = [
        {
            title: "ADVANCED DATA LAKEHOUSES FOR M&E",
            icon: <Waves sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Streamlined Workload Management",
                    text: "Tailored M&E data lakehouses efficiently handle massive streaming workloads and unstructured customer data."
                },
                {
                    title: "Cloud-Big Data Synergy",
                    text: "Integration of cloud solutions and big data empowers AI to scale data pipelines, boosting system performance."
                },
                {
                    title: "Cost-Effective Technology",
                    text: "Advanced data lakehouses and cloud-driven big data solutions reduce costs, optimizing resource utilization in media and entertainment."
                }
            ]
        },
        {
            title: "D2C STREAMING BIGDATA ANALYTICS",
            icon: <OnlinePrediction sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Optimized D2C Streaming",
                    text: "Leverage cloud capabilities for seamless D2C streaming with integrated Big Data Analytics."
                },
                {
                    title: "Cloud-Powered Analytics Integration",
                    text: "Explore synergy as our cloud solutions and advanced analytics deliver industry-leading, seamless entertainment experiences."
                },
                {
                    title: "Empowering Content Delivery",
                    text: "Our cloud solutions and advanced analytics set new standards for immersive, effortless top-tier entertainment."
                }
            ]
        },
        {
            title: "UNIFIED AUDIENCE PROFILING",
            icon: <ManageAccounts sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Unified Audience Profiling",
                    text: "Easily analyze extensive data with our unified system."
                },
                {
                    title: "Comprehensive Data Management",
                    text: "Capture, store, and manage customer data seamlessly with our Cloud partner."
                },
                {
                    title: "Precision in Targeted Marketing",
                    text: "Utilize interpreted data for precise and effective marketing."
                }
            ]
        },
        {
            title: "UNLOCK THE VALUE OF MEDIA ASSETS",
            icon: <PermMedia sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Optimized Content Utilization",
                    text: "Utilize advanced analytics to create custom audience segments and optimize results from your content catalog."
                },
                {
                    title: "Effortless Repurposing",
                    text: "Unlock the full potential of media assets through seamless content repurposing with just a few clicks."
                },
                {
                    title: "Unlocking Media Asset Potential",
                    text: "Empower your content strategy with advanced analytics, efficiently segmenting audiences and effortlessly repurposing content for enhanced results."
                }
            ]
        },
        {
            title: "AI/ML MODELS FOR PRODUCTION",
            icon: <ModelTraining sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Integrated AI in Production",
                    text: "Seamlessly integrate AI models using AWS or Azure for enhanced media production efficiency."
                },
                {
                    title: "Big Data Analytics Fusion",
                    text: "Combine big data analytics with production to ensure personalized user experiences and enforce data quality standards."
                },
                {
                    title: "Enhanced User Experiences",
                    text: "Integrate AI and analytics for personalized user experiences and maintain data quality throughout media production."
                }
            ]
        },
        {
            title: "DO FOR M&E",
            icon: <Dns sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Content Production",
                    text: "Streamline content creation with innovative production processes and technologies."
                },
                {
                    title: "Media Supply Chain Management",
                    text: "Optimize content distribution and delivery through efficient supply chain management."
                },
                {
                    title: "Direct-to-Consumer Streaming",
                    text: "Deliver seamless entertainment experiences directly to consumers with advanced streaming solutions."
                },
                {
                    title: "Advanced Data Analytics",
                    text: "Harness the power of data analytics for insightful and informed decision-making in various domains."
                }
            ]
        }
    ];

    return (
        <Box sx={{ py: 8, bgcolor: '#EEEEEE' }}>
            <Container maxWidth={false} sx={{ maxWidth: "1000px" }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 18, color: '#2b2b2b' }}>
                    DATAOBSERVE FOR MEDIA AND ENTERTAINMENT
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
                            ml: { xs: 0, md: 'calc(20% - 40px)' }, // item margin matches 30%
                            minHeight: '450px'
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
                                    color: '#158aff',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    mb: 3,
                                    mt: 0, // Remove default margin for alignment
                                    fontSize: '36px'
                                }}>
                                    {item.title}
                                </Typography>
                                <Box component="ul" sx={{ pl: 4, m: 0 }}>
                                    {item.points.map((point, idx) => (
                                        <Box component="li" key={idx} sx={{ mb: 5, fontFamily: 'Georgia, serif', color: '#2b2b2b', fontSize: '18px' }}>
                                            <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                                                {point.title}:
                                            </Typography>
                                            {' '}
                                            <Typography component="span" sx={{ fontFamily: 'Georgia, serif', fontSize: '18px' }}>
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
