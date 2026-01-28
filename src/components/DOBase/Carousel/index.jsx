// import external packages
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Paper,
    Typography
} from "@mui/material";

// import routes paths
import { PATHS } from "../../../routes/paths";

// import images
import CarouselBg from "../../../assets/images/others/carousel-bg.png";
import Base1 from "../../../assets/images/others/base-1.png";
import Base2 from "../../../assets/images/others/base-2.png";
import Base3 from "../../../assets/images/others/base-3.png";
import Base4 from "../../../assets/images/others/base-4.png";

// data
const data = [
    {
        title: "Data model-driven, not form/table–driven",
        content:
            "DO Base separates data models from the UI, enabling flexible structures, unlimited blocks or actions, and support for internal, external, or API-based data sources.",
        img: CarouselBg,
        centerImg: Base1
    },
    {
        title: "Effortless Frontend Control",
        content:
            "It handles complex systems with a simple workflow: one-click mode switching and page canvases that let anyone arrange blocks and actions without technical overhead.",
        img: CarouselBg,
        centerImg: Base2
    },
    {
        title: "Integrated AI Workforce",
        content:
            "AI embeds directly into interfaces and processes, allowing defined AI employees for tasks like analysis or research while keeping usage controlled, transparent, and customizable.",
        img: CarouselBg,
        centerImg: Base3
    },
    {
        title: "Fully Extensible Plugin Architecture.",
        content:
            "A plugin-based microkernel provides full extensibility, where every feature—pages, blocks, actions, APIs, data sources—expands through installable custom plugins.",
        img: CarouselBg,
        centerImg: Base4
    }
];

// import components
import Image from "./Image";
import AnimatedButton from "../../Common/AnimatedButton";

const Carousel = () => {
    const navigate = useNavigate();
    const { mode } = useSelector((state) => state.themeReducer || { mode: 'light' });
    const [expanded, setExpanded] = useState(data[0]);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center 70%"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

    const handleChange = (item) => (_event, isExpanded) => {
        if (isExpanded) {
            setExpanded(item);
        }
    };

    return (
        <Box sx={{ py: 8, width: "100%", bgcolor: mode === "light" ? "#EDEDED" : "background.paper" }}>
            <Container style={{ position: "relative" }} ref={containerRef} maxWidth="lg">
                <motion.div style={{ y }}>
                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: "#ffffff", // Changed to white as per user feedback
                            display: "flex",
                            alignItems: "stretch", // Stretch to equal height
                            justifyContent: "space-between",
                            p: { xs: 3, md: 6 },
                            gap: 4,
                            borderRadius: "0px",
                            overflow: 'hidden'
                        }}
                    >
                        <Box width={{ xs: "100%", md: "40%" }} display="flex" flexDirection="column" alignItems="flex-start">
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: "300", mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}
                            >
                                How DO Base gets it done
                            </Typography>
                            <Typography
                                gutterBottom
                                sx={{ fontFamily: "'Merriweather', serif", color: '#2B2B2B', fontSize: "15px", mb: 4, lineHeight: 1.6 }}
                            >
                                Practical AI for Real Business Needs
                            </Typography>

                            <Box sx={{ flex: 1 }}>
                                {data.map((item, index) => {
                                    const isActive = expanded.title === item.title;
                                    return (
                                        <Accordion
                                            key={index}
                                            expanded={isActive}
                                            onChange={handleChange(item)}
                                            elevation={0}
                                            disableGutters
                                            sx={{
                                                backgroundColor: "transparent",
                                                boxShadow: "none",
                                                "&:before": { display: "none" },
                                                borderBottom: "1px solid #e0e0e0",
                                                position: "relative",
                                                "&.Mui-expanded": { margin: 0 },

                                                outline: "none !important"
                                            }}
                                        >
                                            <AccordionSummary
                                                sx={{
                                                    padding: "12px 0",
                                                    minHeight: 0,
                                                    "& .MuiAccordionSummary-content": { margin: 0 },
                                                    "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
                                                    "&.Mui-expanded": { minHeight: 0, padding: "12px 0", margin: 0 },
                                                    "&.Mui-focusVisible": { backgroundColor: "transparent" },
                                                    outline: "none !important",
                                                    border: "none !important",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: isActive ? "#0d6efd" : "#2B2B2B",
                                                        fontWeight: isActive ? 700 : 500,
                                                        fontFamily: "'Roboto Condensed', sans-serif",
                                                        fontSize: "16px",
                                                        transition: 'color 0.2s'
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ px: 0, pb: "16px", pt: "0px" }}>
                                                <Typography
                                                    sx={{
                                                        color: "#2B2B2B",
                                                        fontFamily: "'Merriweather', serif",
                                                        fontSize: "14px",
                                                        fontWeight: 400,
                                                        lineHeight: 1.6,
                                                        mb: 2
                                                    }}
                                                >
                                                    {item.content}
                                                </Typography>

                                                {/* Progress Bar Animation */}
                                                <Box
                                                    sx={{
                                                        height: "2px",
                                                        width: "0%",
                                                        backgroundColor: "#0d6efd",
                                                        position: "absolute",
                                                        bottom: "-1px",
                                                        left: 0,
                                                        zIndex: 1,
                                                        "@keyframes grow": { to: { width: "100%" } },
                                                        animation: isActive ? "grow 5s linear forwards" : "none"
                                                    }}
                                                    onAnimationEnd={() => {
                                                        if (isActive) {
                                                            const currentIndex = data.findIndex((i) => i.title === item.title);
                                                            const nextIndex = (currentIndex + 1) % data.length;
                                                            setExpanded(data[nextIndex]);
                                                        }
                                                    }}
                                                />

                                                {/* Mobile Image */}
                                                <Box display={{ xs: "block", md: "none" }} mt={2} borderRadius="0px" overflow="hidden">
                                                    <Image {...item} />
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                })}
                            </Box>

                            <Typography variant="body2" my={3} sx={{ fontFamily: "'Merriweather', serif", color: '#2B2B2B' }}>
                                Create valuable AI agents and agentic workflows with confidence and ongoing control.
                            </Typography>

                            <AnimatedButton
                                mode={mode}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    navigate(PATHS.CONTACT);
                                }}
                            >
                                Talk to Expert
                            </AnimatedButton>
                        </Box>

                        {/* Desktop Image Section */}
                        <Box
                            width={{ xs: "0%", md: "55%" }}
                            display={{ xs: "none", md: "block" }}
                            position="relative"
                        >
                            <Box
                                borderRadius="0px"
                                overflow="hidden"
                                height="100%"
                                sx={{
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Image {...expanded} />
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>
            </Container>
        </Box >
    );
};

export default Carousel;
