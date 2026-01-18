import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Waves, PieChart, CellTower, VolunteerActivism, Psychology, Cloud } from '@mui/icons-material';

const InfoBottom = () => {
    const items = [
        {
            title: "GAMING ANALYTICS",
            icon: <PieChart sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Personalization & Engagement",
                    text: "Enhance player experiences with personalized, cloud-based gaming analytics."
                },
                {
                    title: "Fraud Detection",
                    text: "Utilize analytics to effectively detect and mitigate gaming fraud, ensuring a fair and secure gaming environment."
                },
                {
                    title: "Performance Monitoring",
                    text: "Monitor game performance continuously with analytics to maintain optimal gameplay and player satisfaction."
                }
            ]
        },
        {
            title: "DATA LAKEHOUSES FOR GAMING",
            icon: <Waves sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Data Lakehouse Integration",
                    text: "Merge all gaming analytics and big data into a single, efficient data lakehouse."
                },
                {
                    title: "Unified Data Structure",
                    text: "Seamlessly blend structured and unstructured gaming data for deeper insights."
                },
                {
                    title: "Real-Time Gaming Insights",
                    text: "Gain instant, valuable insights to elevate the gaming experience."
                }
            ]
        },
        {
            title: "BIG DATA WITH AUGMENTED ANALYTICS",
            icon: <CellTower sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Big Data",
                    text: "revolutionizes the Gaming & Gambling industry, offering advanced analytics for strategic insights."
                },
                {
                    title: "Cloud partner",
                    text: "-driven Big Data solutions amplify online gaming and gambling experiences."
                },
                {
                    title: "Implement Augmented Analytics",
                    text: "for automated insights in gaming, elevating business intelligence and outcomes."
                }
            ]
        },
        {
            title: "CUSTOMER RETENTION ON ADVANCED BI",
            icon: <VolunteerActivism sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Insightful Player Analysis",
                    text: "Leverage Business Intelligence and Analytics for quick insights into player behaviors and loyalty."
                },
                {
                    title: "Personalized Retention Strategies",
                    text: "Boost customer retention with BI-driven personalization for online players and gamblers."
                },
                {
                    title: "Data-Driven Player Engagement",
                    text: "Enhance online gaming and gambling experiences through tailored, data-informed strategies."
                }
            ]
        },
        {
            title: "AI/ML PREDICTIVE MODELS",
            icon: <Psychology sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Cloud-Enhanced Gaming",
                    text: "Boost online gaming with AI and ML models on our Cloud platform."
                },
                {
                    title: "AI Integration",
                    text: "Elevate gaming experiences with integrated AI and ML."
                },
                {
                    title: "Predictive Gambling Analytics",
                    text: "Enhance gambling platforms using predictive analytics."
                }
            ]
        },
        {
            title: "AWS FOR GAMING",
            icon: <Cloud sx={{ fontSize: 40, color: '#158aff' }} />,
            points: [
                {
                    title: "Rapid Development",
                    text: "Speed up cross-platform game development with cloud technology."
                },
                {
                    title: "Secure Hosting",
                    text: "Utilize partners' cloud infrastructure for secure, efficient gaming."
                },
                {
                    title: "Global Scalability",
                    text: "Improve global gaming experiences with the cloud's scalable resources."
                }
            ]
        }
    ];

    return (
        <Box sx={{ py: 8, bgcolor: '#EEEEEE' }}>
            <Container maxWidth={false} sx={{ maxWidth: "1000px" }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 18, color: '#2b2b2b' }}>
                    DATAOBSERVE FOR GAMING
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
