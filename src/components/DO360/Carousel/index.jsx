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

// data
const data = [
    {
        title: "Catalog",
        content:
            "Introducing the Data Catalog at DataObserve, where we organize and catalog your valuable data assets for seamless accessibility and enhanced data management. Our Data Catalog is a powerful tool designed to streamline data discovery, improve data governance, and enhance collaboration across your organization. With this feature, you can easily search, locate, and understand your data, enabling better decision-making, data-driven insights, and efficient utilization of your data resources.",
        img: "xbase_bg",
        centerImg: "do360_catalog"
    },
    {
        title: "Freshness",
        content:
            "In DataObserve, we take data freshness seriously with our robust data monitoring solutions. Our Freshness Monitoring feature is designed to ensure that your data is up-to-date and reliable for making critical business decisions. By continuously tracking data sources, we provide real-time insights into the timeliness of your information, allowing you to identify and rectify any delays or discrepancies promptly.",
        img: "xbase_bg",
        centerImg: "do360_freshness"
    },
    {
        title: "Schema",
        content:
            "Schema monitoring is a critical component of DataObserve's data observability solutions. We understand that data schema consistency is essential for accurate analysis and reporting. Our schema monitoring tools continuously track and validate data schemas, ensuring that any changes or anomalies are immediately detected.",
        img: "xbase_bg",
        centerImg: "do360_schema"
    },
    {
        title: "Volume",
        content:
            "In DataObserve, our Volume Monitoring feature is a crucial component of our data observability solutions. We understand that data volume can fluctuate significantly, affecting the performance and efficiency of your data processes. Our Volume Monitoring ensures that you are always aware of changes in data volume, helping you manage and allocate resources effectively.",
        img: "xbase_bg",
        centerImg: "do360_volume"
    },
    {
        title: "Lineage",
        content:
            "We recognize that understanding the lineage of your data is essential for data governance, compliance, and troubleshooting. Our Lineage Monitoring feature enables you to trace the origin and transformation of data throughout its lifecycle. You can easily visualize how data flows through your systems, ensuring transparency and accountability in data processes.",
        img: "xbase_bg",
        centerImg: "do360_lineage"
    },
    {
        title: "Events",
        content:
            "Incident Management is a core component of DataObserve's data observability solutions. We understand that data incidents can disrupt operations and affect decision-making. Our Incident Management feature allows you to swiftly detect, report, and resolve data-related issues.",
        img: "xbase_bg",
        centerImg: "xbase" // Placeholder until user provides image
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
        <Box sx={{ py: 8, mt: "64px", width: "100%", bgcolor: "#f6f9ff" }}>
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
                                Pillars of DataObserve 360
                            </Typography>
                            <Typography
                                gutterBottom
                                sx={{ fontFamily: "'Merriweather', serif", color: '#666', fontSize: "15px", mb: 4, lineHeight: 1.6 }}
                            >
                                Comprehensive Data Observability
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
                                Comprehensive data observability for your entire stack.
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
