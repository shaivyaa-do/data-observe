import React, { lazy, Suspense, useEffect } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../../components/Layout/Footer";
import "./LifeSciences.css";

// Lazy load components
const HeroTop = lazy(() => import("../../../components/Industries/LifeSciences/Hero/Top"));
const InfoTop = lazy(() => import("../../../components/Industries/LifeSciences/Info/Top"));
const Platform = lazy(() => import("../../../components/Industries/LifeSciences/Platform"));
const Expertise = lazy(() => import("../../../components/Industries/LifeSciences/Expertise"));
const EnhancingStandards = lazy(() => import("../../../components/Industries/LifeSciences/EnhancingStandards"));
const StandardsText = lazy(() => import("../../../components/Industries/LifeSciences/StandardsText"));
const FairPrinciples = lazy(() => import("../../../components/Industries/LifeSciences/FairPrinciples"));
const CaseStudies = lazy(() => import("../../../components/Industries/LifeSciences/CaseStudies"));
const RelatedIndustries = lazy(() => import("../../../components/Industries/LifeSciences/RelatedIndustries"));

const InfoBottom = lazy(() => import("../../../components/Industries/LifeSciences/Info/Bottom"));
// Add other sections if needed

const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: "easeOut" }
};

const LifeSciences = () => {

    useEffect(() => {
        document.title = "DO | Life Sciences";
    }, []);

    return (
        <div>
            {/* Navbar removed as it is integrated into HeroTop for this specific page design */}
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

export default LifeSciences;
