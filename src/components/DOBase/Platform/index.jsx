// import external packages
import { Container, Paper, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";

// import images
import { ImgScience, ImgTerminalBlue, ImgTimeline, ImgVerified, ImgVerifiedCertif } from "@assets/images";

// data
const cardData = [
    {
        img: ImgScience,
        title: "Scale AI employees at your side",
        desc: "From discovery to launch, we manage the entire product journey seamlessly."
    },
    {
        img: ImgTimeline,
        title: "Orchestrate complex logic with workflows",
        desc: "24/7 support keeps your products healthy, optimized, and always available."
    },
    {
        img: ImgVerified,
        title: "Fine-grained permissions for menus, data, and actions",
        desc: "AI accelerates delivery by up to 40% while ensuring consistent quality."
    },
    {
        img: ImgVerifiedCertif,
        title: "Develop General-purpose plugins",
        desc: "Build reusable plugins to extend core functionality and some logic."
    },
    {
        img: ImgTimeline, // Replaced missing ImgTime with ImgTimeline
        title: "Write scripts on pages with Agents",
        desc: "Write custom scripts directly on pages for advanced logic and user interface."
    },
    {
        img: ImgTerminalBlue,
        title: "Integrate with other Applications",
        desc: "Integrate seamlessly with external applications and services."
    }
];

// component
const Platform = () => {
    const themeMode = useSelector((state) => state.themeReducer?.mode) || 'light';

    return (
        <Box sx={{
            py: 10,
            width: "100%",
            bgcolor: themeMode === "light" ? "#EDEDED" : "background.paper"
        }}>
            <Container maxWidth="lg"> {/* Aligned to 1200px */}
                <Paper sx={{ bgcolor: "transparent", p: 5, borderRadius: "0px" }} elevation={0}>
                    <Typography variant="h4" textAlign="center" pb={3} sx={{ fontWeight: 'bold' }}>
                        DO Base Platform Essentials
                    </Typography>
                    <Typography textAlign="center" pb={3} variant="h6" color="text.secondary" sx={{ maxWidth: "800px", mx: "auto" }}>
                        Adaptive strategies, AI-boosted validation, and analytics-fueled rollout across enterprises—we innovate uniquely, spanning ideation to implementation.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0, justifyContent: 'center' }}>
                        {cardData.map(({ img, title, desc }) => (
                            <Box
                                key={title}
                                sx={{
                                    width: { xs: '100%', md: '33.333%' }, // Force 3 columns on md+, stack on xs
                                    display: 'flex'
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: "left",
                                        bgcolor: "#fff",
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "0px", // Keeping rounded corners as per previous user verification
                                        borderRadius: "0px", // Keeping rounded corners as per previous user verification
                                        border: "1px solid #f2f2f2"
                                    }}
                                >
                                    <div style={{ height: '40px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                                        <img src={img} alt={title} loading="lazy" style={{ maxHeight: '32px', width: 'auto' }} />
                                    </div>
                                    <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.4, mb: 2 }}>
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" textAlign="left" sx={{ fontFamily: "'Merriweather', serif", color: "#2B2B2B", lineHeight: 1.6 }}>
                                        {desc}
                                    </Typography>
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Platform;
