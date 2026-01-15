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
        title: "Platform Security",
        desc: "With FedRAMP, ISO, and SOC2 certifications, Unqork’s multitiered defense is trusted across the world’s most regulated industries."
    },
    {
        img: ImgTerminalBlue,
        title: "RBAC",
        desc: "Centrally manage access across the organization by role, group, environment, workspace, app, and component."
    },
    {
        img: ImgDataBlue,
        title: "Shared Security Model",
        desc: "Create solutions that stay up-to-date and secure by leveraging capabilities from leaders in highly regulated industries."
    },
    {
        img: ImgScience,
        title: "Application Performance Monitoring",
        desc: "Continuously detect and resolve issues. Gain near real-time trace and span telemetry across modules, workflows, & components."
    }
];

// component
const Tab4 = () => {
    return (
        <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={400} />}>
            <Cards cardData={cardData} />
        </Suspense>
    );
};

export default Tab4;
