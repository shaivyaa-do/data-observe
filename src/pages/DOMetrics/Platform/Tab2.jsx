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
        title: "Pre-built LLM judges",
        desc: "Empower cross-functional teams to rapidly co-create, launch, and manage enterprise applications with Unqork’s intuitive IDE."
    },
    {
        img: ImgTerminalBlue,
        title: "Customized LLM judges",
        desc: "Build complex workflows with a visual drag-and-drop tool that separates complex logic into steps, from orchestration to dynamic flows."
    },
    {
        img: ImgDataBlue,
        title: "Test new app / variants",
        desc: "Seamlessly create and configure API endpoints, store submission data in distinct collections, and establish relationships between models."
    },
    {
        img: ImgScience,
        title: "Customize with code-based metrics",
        desc: "Leverage ready-to-use use cases (e.g. dashboards, portals, & workflows) with customizable pre-built components."
    },
    {
        img: ImgTimeline,
        title: "Identify root causes with evaluation review UIs",
        desc: "Integrate with 700+ systems across on-prem and cloud apps &databases—all in a drag-and-drop environment."
    },
    {
        img: ImgVerified,
        title: "Compare versions side-by-side",
        desc: "Build in parallel by simplifying editing, testing, deployment.and rollback—and enable seamless merging of changes across versions."
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
