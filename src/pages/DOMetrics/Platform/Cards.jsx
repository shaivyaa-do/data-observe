import { Grid, Paper, Typography, Box } from "@mui/material";

// component
const Cards = ({ cardData }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            {cardData.map(({ img, title, desc }) => (
                <Box
                    key={title}
                    sx={{
                        width: { xs: '100%', md: 'calc(33.333% - 16px)' }, // Force 3 columns on md+, stack on xs
                        display: 'flex'
                    }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            textAlign: "left",
                            bgcolor: "background.paper",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: 0,
                            border: "1px solid #e0e0e0"
                        }}
                    >
                        <img src={img} alt={title} loading="lazy" width={24} height={24} />
                        <Typography variant="h6" gutterBottom mt={2} sx={{ fontFamily: 'Merriweather, serif', fontWeight: 700 }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" textAlign="left" sx={{ fontFamily: 'Roboto, sans-serif', color: 'text.secondary', lineHeight: 1.6 }}>
                            {desc}
                        </Typography>
                    </Paper>
                </Box>
            ))}
        </Box>
    );
};

export default Cards;
