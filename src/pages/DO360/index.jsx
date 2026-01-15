// import external packages
import React, { lazy, Suspense, useEffect } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import "./DO360.css"; // Ensure using DO360 CSS if exists, or DOBase if shared. User created DO360.css in Step 2489.

// import components lazily from DO360 directory
const HeroTop = lazy(() => import("../../components/DO360/Hero/Top"));
const VideoSection = lazy(() => import("../../components/Common/VideoSection")); // Added lazy import
import DO360Video from "../../assets/videos/DO360.mp4"; // Import video
const IntroText = lazy(() => import("../../components/DO360/IntroText"));
const Platform = lazy(() => import("../../components/DO360/Platform"));
const InfoTop = lazy(() => import("../../components/DO360/Info/Top"));
const Carousel = lazy(() => import("../../components/DO360/Carousel"));
const InfoBottom = lazy(() => import("../../components/DO360/Info/Bottom"));
const HeroBottom = lazy(() => import("../../components/DO360/Hero/Bottom"));

const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: "easeOut" }
};

// component
const DO360 = () => {

    useEffect(() => {
        document.title = "DO 360 | Platform";
    }, []);

    return (
        <div>
            <Navbar />
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps} id="hero-section" data-header-theme="dark">
                    <HeroTop />
                </motion.div>
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <VideoSection videoSrc={DO360Video} />
                </motion.div>
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <IntroText />
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
                </Paper>
            </Box>
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <HeroBottom />
                </motion.div>
            </Suspense>
            <Footer />
        </div>
    );
};

export default DO360;
