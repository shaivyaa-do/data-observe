import React, { lazy, Suspense, useEffect } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../../components/Layout/Footer";
import "./Industrials.css";

// Lazy load components
const HeroTop = lazy(() => import("../../../components/Industries/Industrials/Hero/Top"));
const InfoTop = lazy(() => import("../../../components/Industries/Industrials/Info/Top"));
const Platform = lazy(() => import("../../../components/Industries/Industrials/Platform"));
const EnhancingStandards = lazy(() => import("../../../components/Industries/Industrials/EnhancingStandards"));
const StandardsText = lazy(() => import("../../../components/Industries/Industrials/StandardsText"));
const FairPrinciples = lazy(() => import("../../../components/Industries/Industrials/FairPrinciples"));
const CaseStudies = lazy(() => import("../../../components/Industries/Industrials/CaseStudies"));
const RelatedIndustries = lazy(() => import("../../../components/Industries/Industrials/RelatedIndustries"));
const InfoBottom = lazy(() => import("../../../components/Industries/Industrials/Info/Bottom"));
const Services = lazy(() => import("../../../components/Industries/Industrials/Services"));
const Expertise = lazy(() => import("../../../components/Industries/Industrials/Expertise"));

const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: "easeOut" }
};

const Industrials = () => {

    useEffect(() => {
        document.title = "DO | Industrials";
    }, []);

    return (
        <div>
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={600} />}>
                <motion.div {...animationProps}>
                    <HeroTop />
                </motion.div>
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <InfoTop />
                </motion.div>
            </Suspense>

            <Box sx={{ bgcolor: "transparent", width: "100%", p: 0 }}>
                <Paper sx={{ bgcolor: "transparent" }} elevation={0}>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                        <motion.div {...animationProps}>
                            <Platform />
                        </motion.div>
                    </Suspense>

                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                        <motion.div {...animationProps}>
                            <InfoBottom />
                        </motion.div>
                    </Suspense>

                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                        <motion.div {...animationProps}>
                            <Services />
                        </motion.div>
                    </Suspense>

                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={600} />}>
                        <motion.div {...animationProps}>
                            <Expertise />
                        </motion.div>
                    </Suspense>

                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={600} />}>
                        <motion.div {...animationProps}>
                            <EnhancingStandards />
                        </motion.div>
                    </Suspense>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                        <motion.div {...animationProps}>
                            <StandardsText />
                        </motion.div>
                    </Suspense>

                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                        <motion.div {...animationProps}>
                            <FairPrinciples />
                        </motion.div>
                    </Suspense>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={500} />}>
                        <motion.div {...animationProps}>
                            <CaseStudies />
                        </motion.div>
                    </Suspense>
                    <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={600} />}>
                        <motion.div {...animationProps}>
                            <RelatedIndustries />
                        </motion.div>
                    </Suspense>
                </Paper>
            </Box>
            <Footer />
        </div>
    );
};

export default Industrials;
