// import external packages
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const Image = ({ img, centerImg, title }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [centerImageSrc, setCenterImageSrc] = useState(null);

    const isColor = img?.startsWith("#");

    useEffect(() => {
        if (!img || isColor) {
            setImageSrc(null);
            return;
        }
        // Dynamic import for background image
        import(`../../../assets/images/others/${img}.png`)
            .then((m) => setImageSrc(m.default))
            .catch((e) => {
                console.warn(`Failed to load image: ${img}`, e);
                setImageSrc(null);
            });
    }, [img, isColor]);

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
        <Box sx={{ position: "relative", display: "inline-block", width: "100%", height: "100%" }}>
            {isColor ? (
                <Box
                    sx={{
                        bgcolor: img,
                        height: { xs: 400, md: "100%" },
                        width: "100%",
                        borderRadius: 0,
                        display: "block"
                    }}
                />
            ) : (imageSrc && (
                <Box
                    component="img"
                    src={imageSrc}
                    alt={title + "-image"}
                    loading="lazy"
                    height={{ xs: 400, md: "100%" }}
                    width="100%"
                    sx={{ borderRadius: 0, display: "block", objectFit: 'cover' }}
                />
            ))}
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
