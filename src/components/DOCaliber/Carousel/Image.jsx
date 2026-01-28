import { Box } from "@mui/material";

const Image = ({ img, centerImg, title }) => {
    return (
        <Box sx={{ position: "relative", display: "block", width: "100%", height: { xs: "400px", md: "100%" } }}>
            {img && (
                <Box
                    component="img"
                    src={img}
                    alt={title + "-image"}
                    loading="lazy"
                    sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 0, display: "block", objectFit: 'cover' }}
                />
            )}
            {centerImg && (
                <Box
                    component="img"
                    src={centerImg}
                    alt={title + "-center-image"}
                    loading="lazy"
                    height="85%"
                    width="85%"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: 0,
                        zIndex: 1,
                        objectFit: 'contain'
                    }}
                />
            )}
        </Box>
    );
};


export default Image;
