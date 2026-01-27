import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const Image = ({ img, centerImg, title }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [centerImageSrc, setCenterImageSrc] = useState(null);

    useEffect(() => {
        if (!img) setImageSrc(null);
        // Dynamic import for background image
        import(`../../../assets/images/others/${img}.png`)
            .then((m) => setImageSrc(m.default))
            .catch((e) => {
                console.warn(`Failed to load image: ${img}`, e);
                setImageSrc(null);
            });
    }, [img]);

    useEffect(() => {
        if (!centerImg) setCenterImageSrc(null);
        // Dynamic import for center image (svg/png)
        import(`../../../assets/images/others/${centerImg}.svg`)
            .then((m) => setCenterImageSrc(m.default))
            .catch((e) => {
                // Fallback to png if svg fails, or just null
                import(`../../../assets/images/others/${centerImg}.png`)
                    .then((m) => setCenterImageSrc(m.default))
                    .catch(() => setCenterImageSrc(null));
            });
    }, [centerImg]);

    return (
        <Box sx={{ position: "relative", display: "block", width: "100%", height: { xs: "400px", md: "100%" } }}>
            {imageSrc && (
                <Box
                    component="img"
                    src={imageSrc}
                    alt={title + "-image"}
                    loading="lazy"
                    sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 0, display: "block", objectFit: 'cover' }}
                />
            )}
            {centerImageSrc && (
                <Box
                    component="img"
                    src={centerImageSrc}
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
