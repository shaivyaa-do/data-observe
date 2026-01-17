// import external packages
import React, { lazy, Suspense, useEffect } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import "./DOCaliber.css";

// import components lazily
const HeroTop = lazy(() => import("../../components/DOCaliber/Hero/Top"));
const IntroText = lazy(() => import("../../components/DOCaliber/IntroText"));
// const HeroBottom = lazy(() => import("../../components/DOCaliber/Hero/Bottom")); // Explore Products
// const Platform = lazy(() => import("../../components/DOCaliber/Platform")); 
// Actually Platform index is inside Platform folder.
const VideoSection = lazy(() => import("../../components/Common/VideoSection")); // Added lazy import
import DO360Video from "../../assets/videos/DO360.mp4"; // Import video directly as it's not a component
const Platform = lazy(() => import("../../components/DOCaliber/Platform"));
const InfoTop = lazy(() => import("../../components/DOCaliber/Info/Top")); // Timeline
const Carousel = lazy(() => import("../../components/DOCaliber/Carousel"));
const InfoBottom = lazy(() => import("../../components/DOCaliber/Info/Bottom")); // Features
const HeroBottom = lazy(() => import("../../components/DOCaliber/Hero/Bottom")); // Explore Products
const Challenges = lazy(() => import("../../components/DOCaliber/Challenges")); // IT Challenges
const PlatformFeatures = lazy(() => import("../../components/DOCaliber/PlatformFeatures")); // Platform Features

const animationProps = {

    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: "easeOut" }
};

// component
const DOCaliber = () => {

    useEffect(() => {
        document.title = "DO Caliber | Platform";
    }, []);

    return (
        <div>
            <Navbar />
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps} id="hero-section" data-header-theme="dark">
                    <HeroTop />
                </motion.div>
            </Suspense>
            {/* <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <VideoSection videoSrc={DO360Video} />
                </motion.div>
            </Suspense> */}
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <IntroText />
                </motion.div>
            </Suspense>
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <Challenges />
                </motion.div>
            </Suspense>
            <Box sx={{ bgcolor: "transparent", width: "100%", p: 0 }}>
                <Paper sx={{ bgcolor: "transparent" }} elevation={0}>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                        <motion.div {...animationProps}>
                            <Platform />
                        </motion.div>
                    </Suspense>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                        <motion.div {...animationProps}>
                            <InfoTop />
                        </motion.div>
                    </Suspense>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                        <motion.div {...animationProps}>
                            <Carousel />
                        </motion.div>
                    </Suspense>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                        <motion.div {...animationProps}>
                            <InfoBottom />
                        </motion.div>
                    </Suspense>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                        <motion.div {...animationProps}>
                            <PlatformFeatures />
                        </motion.div>
                    </Suspense>
                </Paper>
            </Box>
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps} style={{ marginTop: "-100px", paddingTop: "100px" }}>
                    {/* Added paddingTop to clear the negative margin overlap if needed, or keeping it as user pattern */}
                    <HeroBottom />
                </motion.div>
            </Suspense>
            <Footer />
        </div>
    );
};

export default DOCaliber;
