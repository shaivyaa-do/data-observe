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
        title: "Visual comparison",
        desc: "Compare results across multiple experiments with MLflow's powerful visualization tools. Quickly identify best-performing models and retrieve their corresponding code and parameters based on different metrics of interest across various projects."
    },
    {
        img: ImgTerminalBlue,
        title: "Native ML library integrations with mlflow.autolog",
        desc: "mlflow.autolog() integrates with popular ML libraries to automatically log hyperparameters, metrics, and artifacts—enabling efficient tracking and comparison of tuning experiments with no manual effort."
    },
    {
        img: ImgDataBlue,
        title: "Reliable Reproducibility",
        desc: "Reliably logs parameters, weights, artifacts, code, metrics, and dependencies to ensure experiments can be restored accurately, enabling confident governance for enterprise deployments."
    },
    {
        img: ImgScience,
        title: "Track hyperparameter tuning runs",
        desc: "Leverage the native integration between MLflow and Optuna to run distributed hyperparameter optimization at scale using Spark UDFs. The MLflow tracking server provides robust trial data storage that persists through node failures, ensuring your optimization jobs complete successfully even in complex scalable distributed environments."
    },
    {
        img: ImgTimeline,
        title: "Identify the best model for production",
        desc: "By visualizing metrics across runs directly in the MLflow UI, users can quickly evaluate tradeoffs and identify the best model for production."
    },
    {
        img: ImgVerified,
        title: "Complete experiment lifecycle",
        desc: "MLflow Tracking automatically captures parameters, code versions, metrics, and model weights for each training iteration. Log trained models, visualizations, interface signatures, and data samples to ensure complete reproducibility across your entire ML workflow."
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
