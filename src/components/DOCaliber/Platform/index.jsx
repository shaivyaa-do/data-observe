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
const Tab5 = lazy(() => import("./Tab5"));

// component
const Platform = () => {
    const [value, setValue] = useState("rapid-builds");
    // Using optional chaining or default in case reducer isn't fully set up yet, but we expect it to be.
    const themeMode = useSelector((state) => state.themeReducer?.mode) || 'light';

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ py: 10, width: "100%", bgcolor: themeMode === "light" ? "#f6f9ff" : "background.paper" }}>
            <Container maxWidth="lg">
                {/* Changed background color to transparent as parent has it now */}
                <Paper sx={{ bgcolor: "transparent", p: 8, borderRadius: 0 }} elevation={0}>
                    <Typography variant="h4" textAlign="center" pb={3} sx={{ fontWeight: 'bold', fontFamily: "'Roboto Condensed', sans-serif" }}>
                        Regenerative Platform Components
                    </Typography>
                    <Typography textAlign="center" pb={8} variant="h6" color="text.secondary" sx={{ fontFamily: "'Merriweather', serif" }}>
                        Agile methods, AI-driven assurance, and data-led delivery at scale - we engineer differently, from discovery to
                        delivery.
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
                                    "& .MuiTabs-indicator": { backgroundColor: "#1976d2", height: "3px" }, // Blue indicator
                                    "& .MuiTab-root": {
                                        textTransform: "uppercase",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        margin: "0 20px",
                                        color: "#6c757d",
                                        border: "none", // Ensure no border
                                        outline: "none", // Ensure no outline
                                        "&.Mui-focusVisible": { outline: "none" }, // Remove focus ring
                                        "&.Mui-selected": {
                                            color: "#0d6efd", // Using DO Blue for active text to match indicator
                                            outline: "none",
                                            border: "none",
                                            fontFamily: "'Roboto Condensed', sans-serif"
                                        }
                                    }
                                }}
                            >
                                <Tab label="Rapid Builds" value="rapid-builds" />
                                <Tab label="Evaluate" value="evaluate" />
                                <Tab label="Observe" value="observe" />
                                <Tab label="Security at Scale" value="security-at-scale" />
                                <Tab label="Reduced Tech-Debt" value="reduced-tech-debt" />
                            </TabList>
                        </Box>
                        <TabPanel value="rapid-builds">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab1 />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value="evaluate">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab2 />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value="observe">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab3 />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value="security-at-scale">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab4 />
                            </Suspense>
                        </TabPanel>
                        <TabPanel value="reduced-tech-debt">
                            <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                <Tab5 />
                            </Suspense>
                        </TabPanel>
                    </TabContext>
                </Paper>
            </Container>
        </Box>
    );
};

export default Platform;
