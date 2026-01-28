// import external packages
import { lazy, Suspense, useState } from "react";
import { Box, Container, Paper, Skeleton, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// import components lazily
import CaliberStr from "../../../assets/images/others/caliber-str.png";
const Tab1 = lazy(() => import("./Tab1"));
const Tab2 = lazy(() => import("./Tab2"));
const Tab3 = lazy(() => import("./Tab3"));
const Tab4 = lazy(() => import("./Tab4"));
const Tab5 = lazy(() => import("./Tab5"));

// component
const Platform = () => {
    const [value, setValue] = useState("do-intelligence");
    // Using optional chaining or default in case reducer isn't fully set up yet, but we expect it to be.
    const themeMode = useSelector((state) => state.themeReducer?.mode) || 'light';

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ pt: 10, pb: 0, width: "100%", bgcolor: themeMode === "light" ? "#EDEDED" : "background.paper" }}>
                <Container maxWidth="lg">
                    {/* Changed background color to transparent as parent has it now */}
                    <Paper sx={{ bgcolor: "transparent", p: 8, pb: 8, borderRadius: 0 }} elevation={0}>
                        <Typography variant="h4" textAlign="center" pb={3} sx={{ fontWeight: 'bold', fontFamily: "'Roboto Condensed', sans-serif" }}>
                            DO Caliber Platform Components
                        </Typography>
                        <Typography textAlign="center" pb={8} variant="h6" color="text.secondary" sx={{ fontFamily: "'Merriweather', serif", maxWidth: "1000px", mx: "auto" }}>
                            We embrace an innovative development strategy from inception to rollout, harnessing adaptive practices, machine learning-enhanced validation, and expansive information-guided execution.
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
                                    <Tab label="DO Intelligence" value="do-intelligence" />
                                    <Tab label="DO Caliber Agents" value="do-Caliber-agents" />
                                    <Tab label="AI Functions" value="ai-functions" />
                                    <Tab label="DO Analyst & Search" value="do-analyst-search" />
                                    <Tab label="Large Language Models (LLM)" value="large-language-models" />
                                </TabList>
                            </Box>
                            <TabPanel value="do-intelligence">
                                <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                    <Tab1 />
                                </Suspense>
                            </TabPanel>
                            <TabPanel value="do-Caliber-agents">
                                <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                    <Tab2 />
                                </Suspense>
                            </TabPanel>
                            <TabPanel value="ai-functions">
                                <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                    <Tab3 />
                                </Suspense>
                            </TabPanel>
                            <TabPanel value="do-analyst-search">
                                <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                    <Tab4 />
                                </Suspense>
                            </TabPanel>
                            <TabPanel value="large-language-models">
                                <Suspense fallback={<Skeleton variant="rectangular" width="100%" height={300} />}>
                                    <Tab5 />
                                </Suspense>
                            </TabPanel>
                        </TabContext>
                    </Paper>
                </Container>
            </Box>

            <Box sx={{ width: "100%", bgcolor: "#ffffff", pt: 10, pb: 10 }}>
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Box sx={{ mx: 'auto', maxWidth: '1100px', display: 'flex', justifyContent: 'center' }}>
                            <Box
                                component="img"
                                src={CaliberStr}
                                alt="DO Caliber Structure"
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain"
                                }}
                            />
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </>
    );
};

export default Platform;
