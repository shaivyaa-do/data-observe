import { lazy, Suspense } from "react";
import { Skeleton } from "@mui/material";

// import images
import { ImgDataBlue, ImgScience, ImgTerminalBlue, ImgTimeline, ImgVerified, ImgVerifiedCertif } from "@assets/images";

// import components lazily
const Cards = lazy(() => import("./Cards"));

// data
const cardData = [
    {
        img: ImgVerifiedCertif,
        title: "Unified model format",
        desc: "MLflow's MLModel file provides a standardized structure for packaging models from any framework, capturing essential dependencies and input/output specifications. This consistent packaging approach eliminates integration friction while ensuring models can be reliably deployed across any environment."
    },
    {
        img: ImgTerminalBlue,
        title: "Comprehensive model metadata",
        desc: "Track crucial model requirements and artifacts including data schemas, preprocessing steps, and environment dependencies automatically with MLflow's metadata system. Create fully reproducible model packages that document the complete model context for simplified governance and troubleshooting."
    }
];
// component
const Tab2 = () => {
    return (
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
            <Cards cardData={cardData} />
        </Suspense>
    );
};

export default Tab2;
