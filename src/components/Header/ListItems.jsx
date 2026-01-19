import React, { useState } from "react";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box
} from "@mui/material";
import {
    Cloud, Storage, Analytics, Psychology, Speed, AutoAwesome, People, Devices,
    KeyboardArrowRight
} from "@mui/icons-material";
import "./Header.css";

const iconMap = {
    "Cloud": Cloud,
    "Storage": Storage,
    "Analytics": Analytics,
    "Psychology": Psychology,
    "Speed": Speed,
    "AutoAwesome": AutoAwesome,
    "People": People,
    "Devices": Devices
};

const ListItems = ({ title, path, icon, description, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = icon && iconMap[icon];

    return (
        <ListItem
            disablePadding
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...(isHovered && {
                secondaryAction: (
                    <KeyboardArrowRight
                        fontSize="small"
                        sx={{ color: '#0056b3' }}
                    />
                )
            })}
        >
            <ListItemButton
                onClick={onClick}
                sx={{
                    borderRadius: '8px',
                    padding: '12px 16px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 86, 179, 0.04)'
                    }
                }}
            >
                {IconComponent && (
                    <ListItemIcon sx={{ minWidth: 48 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(0, 86, 179, 0.1)',
                                color: '#0056b3'
                            }}
                        >
                            <IconComponent sx={{ fontSize: 20 }} />
                        </Box>
                    </ListItemIcon>
                )}

                <ListItemText
                    primary={title}
                    secondary={
                        description && Array.isArray(description) && description.length > 0 && (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                flexWrap: 'wrap'
                            }}>
                                {description.map((desc, index) => (
                                    <React.Fragment key={index}>
                                        <Box component="span" sx={{
                                            fontSize: '13px',
                                            color: '#555',
                                            lineHeight: 1.6
                                        }}>
                                            {desc}
                                        </Box>
                                        {index < description.length - 1 && (
                                            <Box component="span" sx={{
                                                fontSize: '13px',
                                                color: '#555',
                                                fontWeight: 700
                                            }}>
                                                •
                                            </Box>
                                        )}
                                    </React.Fragment>
                                ))}
                            </Box>
                        )
                    }
                    slotProps={{
                        primary: {
                            sx: {
                                fontFamily: '"Roboto Condensed", sans-serif !important',
                                fontWeight: 700,
                                fontSize: '16px',
                                textTransform: 'uppercase',
                                lineHeight: 1.2,
                                letterSpacing: '0.5px',
                                marginBottom: '6px',
                                color: isHovered ? '#0056b3' : '#1a1a1a',
                                transition: 'color 0.2s ease'
                            }
                        }
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
};

export default ListItems;
