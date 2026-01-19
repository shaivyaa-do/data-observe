import React, { useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../../components/Layout/Footer";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./IndustriesHub.css";

// Import industry videos
import lifeScienceVid from "../../../assets/videos/life-science.mp4";
import mediaEntertainmentVid from "../../../assets/videos/media-entertainment-vid.mp4";
import gamingVid from "../../../assets/videos/gaming-vid.mp4";
import financialServicesVid from "../../../assets/videos/Finance-vid.mp4";
import travelHospitalityVid from "../../../assets/videos/travel-vid.mp4";
import cpgVid from "../../../assets/videos/CPG-vid.mp4";
import industrialVid from "../../../assets/videos/industrial-vid.mp4";

const industries = [
    {
        title: "LIFE SCIENCE",
        description: "Drive innovation in the Life Sciences sector through the development of cutting-edge data solutions. Elevate research and development by implementing advanced data-driven approaches, fostering breakthroughs in the field. Propel the Life Sciences industry forward with tailored data solutions designed to stimulate creativity and progress.",
        video: lifeScienceVid,
        link: "/industries"
    },
    {
        title: "MEDIA & ENTERTAINMENT",
        description: "Pioneer in digital revolution to deliver an unmatched media and entertainment experience. Take the lead in shaping the future of the industry by spearheading transformative digital initiatives. Elevate consumer engagement and satisfaction by driving the forefront of innovation in media and entertainment.",
        video: mediaEntertainmentVid,
        link: "/media-entertainment"
    },
    {
        title: "GAMING",
        description: "Unlock the full potential of gaming analytics to elevate player experiences and drive revenue growth. Harness the power of data-driven insights to understand player behavior, optimize game mechanics, and create personalized gaming journeys that keep players engaged and coming back for more.",
        video: gamingVid,
        link: "/gaming"
    },
    {
        title: "FINANCIAL SERVICES",
        description: "Transform financial services through advanced analytics and AI-driven insights. Enable data-driven decision-making, enhance customer experiences, and drive operational excellence across banking, insurance, and wealth management sectors.",
        video: financialServicesVid,
        link: "/financial-services"
    },
    {
        title: "TRAVEL & HOSPITALITY",
        description: "Revolutionize travel and hospitality experiences through intelligent data solutions. Optimize operations, personalize guest experiences, and drive revenue growth with advanced analytics and AI-powered insights.",
        video: travelHospitalityVid,
        link: "/travel-hospitality"
    },
    {
        title: "CPG",
        description: "Empower consumer packaged goods companies with data-driven insights to optimize revenue growth, enhance supply chain efficiency, and drive successful product launches through advanced analytics and AI.",
        video: cpgVid,
        link: "/cpg"
    },
    {
        title: "INDUSTRIALS",
        description: "Transition from static to intelligent manufacturing with AI-driven industrial analytics. Optimize production quality and efficiency through data-driven decision-making, controlling costs, improving productivity, and enhancing margins.",
        video: industrialVid,
        link: "/industrials"
    }
];

const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
};

const IndustriesHub = () => {
    useEffect(() => {
        document.title = "DO | Industries";
    }, []);

    return (
        <div>
            {/* Header Section */}
            <Box sx={{ bgcolor: '#2b2b2b', py: 2 }}>
                <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <img
                                src="/images/header-logo-new.png"
                                alt="logo"
                                height={28}
                                style={{ display: 'block' }}
                            />
                        </a>
                        <Typography sx={{ color: '#888', fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>
                            &gt;
                        </Typography>
                        <Typography sx={{ color: 'white', fontFamily: 'Georgia, serif', fontSize: '1.1rem' }}>
                            Industries
                        </Typography>
                    </Box>
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

            {/* Industry Hero Sections */}
            {industries.map((industry, index) => (
                <motion.div key={index} {...animationProps}>
                    <Box
                        sx={{
                            position: 'relative',
                            height: { xs: '500px', md: '600px' },
                            width: '100%',
                            overflow: 'hidden',
                            color: 'white'
                        }}
                    >
                        {/* Video Background */}
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
                            <source src={industry.video} type="video/mp4" />
                        </video>

                        {/* Dark Overlay */}
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

                        {/* Content */}
                        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <Box>
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    sx={{
                                        fontWeight: '500',
                                        fontSize: { xs: '36px', md: '48px' },
                                        mb: 3,
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                        letterSpacing: '2px',
                                        fontFamily: "'Roboto Condensed', sans-serif"
                                    }}
                                >
                                    {industry.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        maxWidth: '800px',
                                        mx: 'auto',
                                        fontWeight: '300',
                                        color: '#ffffff',
                                        fontSize: { xs: '16px', md: '18px' },
                                        fontFamily: 'Georgia, serif',
                                        mb: 4,
                                        lineHeight: 1.6
                                    }}
                                >
                                    {industry.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    endIcon={<KeyboardArrowRightIcon />}
                                    href={industry.link}
                                    sx={{
                                        bgcolor: '#158aff',
                                        color: '#fff',
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        borderRadius: '4px',
                                        fontWeight: 600,
                                        boxShadow: '0 4px 15px rgba(21,138,255,0.4)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            bgcolor: '#1270cc',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 20px rgba(21,138,255,0.6)',
                                        },
                                    }}
                                >
                                    View
                                </Button>
                            </Box>
                        </Container>
                    </Box>
                </motion.div>
            ))}

            <Footer />
        </div>
    );
};

export default IndustriesHub;
