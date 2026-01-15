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
        title: "Built-in metrics and visualizations",
        desc: "Run enterprise applications on a single, standardized platform—instead of maintaining hundreds of coding languages and run-time engines."
    },
    {
        img: ImgTerminalBlue,
        title: "Custom evaluators",
        desc: "Entirely separate logic from code to enable the creation of sophisticated, mission-critical solutions with zero code."
    }
];

// component
const Tab3 = () => {
    return (
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
            <Cards cardData={cardData} />
        </Suspense>
    );
};

export default Tab3;
