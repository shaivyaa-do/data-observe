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
        title: "Regenerative Engine",
        desc: "Run enterprise applications on a single, standardized platform instead of hundreds of coding languages and run-time engines."
    },
    {
        img: ImgTerminalBlue,
        title: "Data-Driven Architecture",
        desc: "Entirely separate logic from code to enable the creation of sophisticated, mission-critical solutions with zero code."
    },
    {
        img: ImgDataBlue,
        title: "Centralized Management",
        desc: "Let Unqork to take on the burden of maintenance, upgrades, and security—with zero changes to your applications."
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
