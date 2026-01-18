import React, { lazy, Suspense, useEffect } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../../components/Layout/Footer";
import "./Gaming.css";

// Lazy load components
const HeroTop = lazy(() => import("../../../components/Industries/Gaming/Hero/Top"));
const InfoTop = lazy(() => import("../../../components/Industries/Gaming/Info/Top"));
const Platform = lazy(() => import("../../../components/Industries/Gaming/Platform"));
const EnhancingStandards = lazy(() => import("../../../components/Industries/Gaming/EnhancingStandards"));
const StandardsText = lazy(() => import("../../../components/Industries/Gaming/StandardsText"));
const FairPrinciples = lazy(() => import("../../../components/Industries/Gaming/FairPrinciples"));
const CaseStudies = lazy(() => import("../../../components/Industries/Gaming/CaseStudies"));
const RelatedIndustries = lazy(() => import("../../../components/Industries/Gaming/RelatedIndustries"));

const InfoBottom = lazy(() => import("../../../components/Industries/Gaming/Info/Bottom"));
// Add other sections if needed

const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: "easeOut" }
};

const Gaming = () => {

    useEffect(() => {
        document.title = "DO | Gaming";
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

export default Gaming;
