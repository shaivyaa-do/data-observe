import { lazy, Suspense } from "react";
import { Skeleton } from "@mui/material";

// import images
import { ImgDataBlue, ImgScience, ImgTerminalBlue, ImgVerifiedCertif } from "@assets/images";

// import components lazily
const Cards = lazy(() => import("./Cards"));

// data
const cardData = [
    {
        img: ImgVerifiedCertif,
        title: "Conversational Analytics",
        desc: "Ask natural-language questions and get precise answers from your structured data."
    },
    {
        img: ImgTerminalBlue,
        title: "Data Modeling Intelligence",
        desc: "Define tables, relationships, and metrics to guide the AI. Ensure queries respect data structure and deliver meaningful, actionable insights."
    },
    {
        img: ImgDataBlue,
        title: "Trusted Decision Engine",
        desc: "CLeverage pre-approved queries and past examples to generate consistent results."
    },

    {
        img: ImgDataBlue,
        title: "RBAC",
        desc: "Role-based access control (RBAC) ensures that users have the right permissions to access the data they need."
    },
    {
        img: ImgScience,
        title: "Unified Multi-Modal Search",
        desc: "Continuously dSearch and analyze text, documents, images, and audio in one place. Combine semantic and keyword search for faster, context-rich insights."
    }
];

// component
const Tab4 = () => {
    return (
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
            <Cards cardData={cardData} justifyContent="flex-start" />
        </Suspense>
    );
};

export default Tab4;
