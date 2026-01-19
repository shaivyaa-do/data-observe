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
        title: "Natural Language Intelligence",
        desc: "Get instant answers to complex business questions using natural language. DO Intelligence acts as an always-on thought partner, helping users explore data without writing SQL."
    },
    {
        img: ImgTerminalBlue,
        title: "AI Analysis",
        desc: "AI agents reason across structured, unstructured, and third-party data to uncover root causes, trends, and actionable insights—faster than traditional analytics."
    },
    {
        img: ImgDataBlue,
        title: "Trusted Insights",
        desc: "Every insight is traceable to its source data. Define and reuse “golden questions” to ensure consistent, trusted answers across teams."
    },
    {
        img: ImgScience,
        title: "Secure & Governed",
        desc: "Runs entirely within a secure enterprise environment, inheriting governance, access control, and compliance policies."
    },
    {
        img: ImgTimeline,
        title: "Unified Data",
        desc: "Query and analyze structured tables, documents, transcripts, and text embeddings in a unified workflow."
    },
    {
        img: ImgVerified,
        title: "Team Access",
        desc: "Enable teams to independently explore data, reducing reliance on data engineers and accelerating analytics-driven decisions."
    }
];

// component
const Tab1 = () => {
    return (
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
            <Cards cardData={cardData} />
        </Suspense>
    );
};

export default Tab1;
