import { Button } from "@mui/material";
import { EastRounded } from "@mui/icons-material";

const AnimatedButton = ({
    children,
    onClick,
    mode = "light", // 'light' or 'dark'
    className = "",
    buttonColor = "#0d6efd", // Default to site blue
    hoverColor = "#0b5ed7", // Darker blue for hover
    circleColor = "#FFFFFF",
    textColor = "#FFFFFF", // White text on blue
    sx = {},
    ...props
}) => {
    return (
        <Button
            variant="outlined"
            size="large"
            className={`${mode === "dark" ? "animatedBtnDark" : ""} ${className}`}
            startIcon={<EastRounded />}
            sx={mode === "light" ? {
                backgroundColor: buttonColor,
                color: textColor,
                textTransform: "none",
                borderRadius: "0px",
                padding: "8px 24px 8px 12px", // Adjusted padding
                fontFamily: "'Roboto', sans-serif", // Match site font
                fontWeight: 500,
                border: "none",
                boxShadow: "0 4px 6px rgba(13, 110, 253, 0.2)",
                gap: 1,
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                    backgroundColor: hoverColor,
                    boxShadow: "0 6px 8px rgba(13, 110, 253, 0.3)",
                },
                "& .MuiButton-startIcon": {
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 0,
                    color: textColor,
                    zIndex: 1,
                    position: "relative"
                },
                ...sx
            } : { ...sx }}
            onClick={onClick}
            {...props}
        >
            <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
        </Button>
    );
};

export default AnimatedButton;
