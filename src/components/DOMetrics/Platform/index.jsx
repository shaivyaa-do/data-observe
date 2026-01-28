// import external packages
import { lazy, Suspense, useState } from "react";
import { Box, Container, Paper, Skeleton, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useSelector } from "react-redux";

// import components lazily
const Tab1 = lazy(() => import("./Tab1"));
const Tab2 = lazy(() => import("./Tab2"));
const Tab3 = lazy(() => import("./Tab3"));
const Tab4 = lazy(() => import("./Tab4"));


// component
const Platform = () => {
    const [value, setValue] = useState("exp-tracking");
    // Using optional chaining or default in case reducer isn't fully set up yet, but we expect it to be.
    const themeMode = useSelector((state) => state.themeReducer?.mode) || 'light';

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ py: 10, width: "100%", bgcolor: themeMode === "light" ? "#EDEDED" : "background.paper" }}>
            <Container maxWidth="lg">
                {/* Changed background color to transparent */}
                <Paper sx={{ bgcolor: "transparent", p: 8, borderRadius: 0 }} elevation={0}>
                    <Typography variant="h4" textAlign="center" pb={3} sx={{ fontWeight: 'bold', fontFamily: "'Roboto Condensed', sans-serif" }}>
                        MLflow Platform Features
                    </Typography>
                    <Typography textAlign="center" pb={8} variant="h6" sx={{ fontFamily: "'Merriweather', serif", color: "#2B2B2B" }}>
                        Open-source integration, AI-powered evaluations, and scalable model management - we innovate ML workflows uniquely, from experimentation to production.
                    </Typography>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
                            <TabList
                                onChange={handleChange}
                                centered
                                textColor="inherit"
                                indicatorColor="primary"
                                sx={{
                                    borderBottom: '1px solid #e0e0e0',
                                    "& .MuiTabs-indicator": { backgroundColor: "#1E90FF", height: "3px" }, // Blue indicator
                                    "& .MuiTab-root": {
                                        textTransform: "uppercase",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        margin: "0 20px",
                                        color: "#2B2B2B",
                                        border: "none", // Ensure no border
                                        outline: "none", // Ensure no outline
                                        "&.Mui-focusVisible": { outline: "none" }, // Remove focus ring
                                        "&.Mui-selected": {
                                            color: "#1E90FF", // Using DO Blue for active text to match indicator
                                            outline: "none",
                                            border: "none",
                                            fontFamily: "'Roboto Condensed', sans-serif"
                                        }
                                    }
                                }}
                            >
                                <Tab label="Experiment Tracking" value="exp-tracking" />
                                <Tab label="ML Flow Models" value="ml-flow" />
                                <Tab label="Model Evaluation" value="model-evaluation" />
                                <Tab label="Model Registry & deployment" value="model-r&d" />
                            </TabList>
                        </Box>
                        <TabPanel value="exp-tracking">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab1 />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value="ml-flow">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab2 />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value="model-evaluation">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab3 />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value="model-r&d">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab4 />
                            </Suspense>
                        </TabPanel>
                    </TabContext>
                </Paper>
            </Container>
        </Box>
    );
};

export default Platform;
