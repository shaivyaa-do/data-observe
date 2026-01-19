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
        title: "Unified Data Intelligence",
        desc: "Manage both structured metrics and unstructured text like conversations, emails, and documents. Gain insights across all data types to drive smarter business decisions."
    },
    {
        img: ImgTerminalBlue,
        title: "DO Analyst",
        desc: "Convert natural language queries into SQL using semantic models. Handle complex metrics, KPIs, and analytics without writing code manually."
    },
    {
        img: ImgDataBlue,
        title: "Search",
        desc: "Search documents, transcripts, and other text with hybrid semantic + keyword search. Index and query large datasets in real time for precise results."
    },
    {
        img: ImgScience,
        title: "Agents",
        desc: "Agents combine search, analysis, and LLM orchestration. Retrieve data, manage context, and synthesize insights across multiple sources seamlessly."
    },
    {
        img: ImgTimeline,
        title: "Integration",
        desc: "Integrate agents via REST APIs or applications. Stream responses, automate workflows, and embed insights into dashboards or chat interfaces."
    },
    {
        img: ImgVerified,
        title: "Learning & Testing",
        desc: "Validate agent performance with example questions. Monitor results, refine responses, and ensure accurate insights across structured and unstructured data."
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
