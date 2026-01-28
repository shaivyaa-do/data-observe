// import external packages
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Fixed import
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
import MultiAgent1 from "../../../assets/images/others/MultiAgent-1.png";
import Guardrail2 from "../../../assets/images/others/Guardrail-2.png";
import AgenticRAG3 from "../../../assets/images/others/AgenticRAG-3.png";
import Context4 from "../../../assets/images/others/context-4.png";
import Code from "../../../assets/images/others/code.svg";

// data
const data = [
    {
        title: "Multi-Agent Orchestration",
        content:
            "Deploy and manage a coordinated workforce of specialized agents that collaborate to execute complex, multi-step business logic from a single intent.",
        img: CarouselBg,
        centerImg: MultiAgent1
    },
    {
        title: "Visual Guardrail Enforcement",
        content:
            "Protect your enterprise with real-time interceptors that redact PII, enforce compliance, and maintain safety across all autonomous interactions.",
        img: CarouselBg,
        centerImg: Guardrail2
    },
    {
        title: "Agentic RAG Architecture",
        content:
            "Connect your agents to dynamic knowledge bases through high-performance Retrieval-Augmented Generation, ensuring every action is grounded in your specific data.",
        img: CarouselBg,
        centerImg: AgenticRAG3
    },
    {
        title: "Recursive Memory & Context",
        content:
            "Enable agents to maintain persistent context and learn from previous executions, optimizing their performance for long-term operational tasks.",
        img: CarouselBg,
        centerImg: Context4
    },
    {
        title: "Cross-System Action Triggers",
        content:
            "Empower agents to move beyond replies by triggering API calls, generating tickets, and building application components directly within your business infrastructure.",
        img: CarouselBg,
        centerImg: Code
    }
];

// import components
import Image from "./Image";
import AnimatedButton from "../../Common/AnimatedButton";

const Carousel = () => {
    const navigate = useNavigate(); // Fixed typo naviagate
    const { mode } = useSelector((state) => state.themeReducer || { mode: 'light' }); // Fallback
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
                                Ship high-quality <br />
                                GenAI, fast
                            </Typography>
                            <Typography
                                gutterBottom
                                sx={{ fontFamily: "'Merriweather', serif", color: '#666', fontSize: "15px", mb: 4, lineHeight: 1.6 }}
                            >
                                Enhance your GenAI application with end-to-end tracking, observability, evaluations, all in one integrated platform.
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
                                                "&:before": { display: "none" },
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
                                                        color: isActive ? "#0d6efd" : "#6c757d",
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
                                                        color: "#6c757d",
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

                            <Typography variant="body2" my={3} sx={{ fontFamily: "'Merriweather', serif", color: '#999' }}>
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
        </Box>
    );
};

export default Carousel;
