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
        title: "UI Designer",
        desc: "Empower cross-functional teams to rapidly co-create, launch, and manage enterprise applications with Unqork’s intuitive IDE."
    },
    {
        img: ImgTerminalBlue,
        title: "Workflow Builder",
        desc: "Build complex workflows with a visual drag-and-drop tool that separates complex logic into steps, from orchestration to dynamic flows."
    },
    {
        img: ImgDataBlue,
        title: "Data-Centric Development",
        desc: "Seamlessly create and configure API endpoints, store submission data in distinct collections, and establish relationships between models."
    },
    {
        img: ImgScience,
        title: "Application Accelerators",
        desc: "Leverage ready-to-use use cases (e.g. dashboards, portals, & workflows) with customizable pre-built components."
    },
    {
        img: ImgTimeline,
        title: "Integrate & Connect",
        desc: "Integrate with 700+ systems across on-prem and cloud apps &databases—all in a drag-and-drop environment."
    },
    {
        img: ImgVerified,
        title: "Branch & Merge",
        desc: "Build in parallel by simplifying editing, testing, deployment.and rollback—and enable seamless merging of changes across versions."
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
