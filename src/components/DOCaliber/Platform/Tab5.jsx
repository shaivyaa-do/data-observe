import { lazy, Suspense } from "react";
import { Skeleton } from "@mui/material";

// import images
import { ImgDataBlue, ImgTerminalBlue, ImgVerifiedCertif } from "@assets/images";

// import components lazily
const Cards = lazy(() => import("./Cards"));

// data
const cardData = [
    {
        img: ImgVerifiedCertif,
        title: "Unified Natural-Language Insights",
        desc: "Ask questions, summarize feedback, and classify customer reviews using advanced language models. Instantly convert raw text into actionable business intelligence."
    },
    {
        img: ImgTerminalBlue,
        title: "Multi-Modal Data Understanding",
        desc: "Extract insights from text, images, and audio. LLMs analyze diverse feedback formats, providing a single, consistent view of customer experience."
    },
    {
        img: ImgDataBlue,
        title: "Context-Aware Reasoning",
        desc: "Leverage semantic models and verified queries to guide AI reasoning. Ensure accurate, trustworthy answers that scale across complex datasets."
    }
];

// component
const Tab5 = () => {
    return (
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
            <Cards cardData={cardData} />
        </Suspense>
    );
};

export default Tab5;
