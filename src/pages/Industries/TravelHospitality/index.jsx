import React, { useEffect, lazy, Suspense } from "react";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import "./TravelHospitality.css";
import Footer from "../../../components/Layout/Footer";

// Lazy load components
const HeroTop = lazy(() => import("../../../components/Industries/TravelHospitality/Hero/Top"));
const InfoTop = lazy(() => import("../../../components/Industries/TravelHospitality/Info/Top"));
const Platform = lazy(() => import("../../../components/Industries/TravelHospitality/Platform"));
const Expertise = lazy(() => import("../../../components/Industries/TravelHospitality/Expertise"));
const EnhancingStandards = lazy(() => import("../../../components/Industries/TravelHospitality/EnhancingStandards"));
const StandardsText = lazy(() => import("../../../components/Industries/TravelHospitality/StandardsText"));
const FairPrinciples = lazy(() => import("../../../components/Industries/TravelHospitality/FairPrinciples"));
const RelatedIndustries = lazy(() => import("../../../components/Industries/TravelHospitality/RelatedIndustries"));
const InfoBottom = lazy(() => import("../../../components/Industries/TravelHospitality/Info/Bottom"));
const Services = lazy(() => import("../../../components/Industries/TravelHospitality/Services"));
const StdText = lazy(() => import("../../../components/Industries/TravelHospitality/textSection"));

const animationProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

const TravelHospitality = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Travel & Hospitality - DataObserve";
    }, []);

    return (
        <div className="travel-hospitality-page">
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={800} />}>
                <HeroTop />
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={200} />}>
                <motion.div {...animationProps}>
                    <InfoTop />
                </motion.div>
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                <motion.div {...animationProps}>
                    <Platform />
                </motion.div>
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                <motion.div {...animationProps}>
                    <StandardsText />
                </motion.div>
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={800} />}>
                <Services />
            </Suspense>


            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={600} />}>
                <motion.div {...animationProps}>
                    <Expertise />
                </motion.div>
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                <motion.div {...animationProps}>
                    <InfoBottom />
                </motion.div>
            </Suspense>
            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                <motion.div {...animationProps}>
                    <StdText />
                </motion.div>
            </Suspense>





            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                <motion.div {...animationProps}>
                    <FairPrinciples />
                </motion.div>
            </Suspense>

            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
                <motion.div {...animationProps}>
                    <RelatedIndustries />
                </motion.div>
            </Suspense>
        </div>
    );
};

export default TravelHospitality;
