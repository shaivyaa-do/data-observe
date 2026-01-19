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
        title: "Multilingual Text Translation",
        desc: "Convert text from any language into a common language for consistent analysis. Streamline global data processing without external translation tools."
    },
    {
        img: ImgTerminalBlue,
        title: "Aggregate Insights",
        desc: "Condense large volumes of text into clear, actionable summaries. Quickly extract key insights without reading every detail."
    },
    {
        img: ImgDataBlue,
        title: "Automated Categorization",
        desc: "Categorize text based on predefined business rules or intent. Transform unstructured data into structured, actionable metrics."
    },
    {
        img: ImgScience,
        title: "AI-Powered Question Answering",
        desc: "Ask specific questions and generate accurate answers from unstructured text. Extract key insights without manual review."
    },
    {
        img: ImgTimeline,
        title: "Transcribe & Image Analysis",
        desc: "Transform audio reviews into text and generate descriptive captions for images. Integrate all media into your analytics workflow."
    },
    {
        img: ImgVerified,
        title: "Sentiment",
        desc: "Quantify sentiment in textual data to measure opinions and attitudes. Understand customer or user reactions at scale."
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
