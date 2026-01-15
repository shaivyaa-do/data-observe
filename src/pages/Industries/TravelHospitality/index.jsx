// import external packages
import React, { lazy, Suspense, useEffect } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import "./TravelHospitality.css";

// import components lazily
const HeroTop = lazy(() => import("../../../components/Industries/TravelHospitality/Hero/Top"));
const IntroText = lazy(() => import("../../../components/Industries/TravelHospitality/IntroText"));
const Platform = lazy(() => import("../../../components/Industries/TravelHospitality/Platform"));
const InfoTop = lazy(() => import("../../../components/Industries/TravelHospitality/Info/Top"));
const Carousel = lazy(() => import("../../../components/Industries/TravelHospitality/Carousel"));
const InfoBottom = lazy(() => import("../../../components/Industries/TravelHospitality/Info/Bottom"));
const HeroBottom = lazy(() => import("../../../components/Industries/TravelHospitality/Hero/Bottom"));

const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: "easeOut" }
};

// component
const TravelHospitality = () => {

    useEffect(() => {
        document.title = "DO | TravelHospitality";
    }, []);

    return (
        <div>
            <Navbar />
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <HeroTop />
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

export default TravelHospitality;
