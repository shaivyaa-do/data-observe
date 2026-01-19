import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Paper } from "@mui/material";
import { HashLink } from 'react-router-hash-link';
import ListItems from "./ListItems";
import "./Header.css";

const NavMenu = ({ items, image, content, onClose }) => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        if (onClose) onClose();
        if (path.startsWith("#") || path.includes("#")) {
            // Let HashLink handle or manual scroll? usage of HashLink implies react-router-hash-link
        } else {
            navigate(path);
            window.scrollTo(0, 0);
        }
    };

    return (
        <Box className="nav-menu-container" sx={{ maxWidth: '1600px', margin: '0 auto' }}>
            <Grid container spacing={0} sx={{ height: '100%' }}>

                <Grid item xs={12} md={1} sx={{ borderRight: '1px solid rgba(0,0,0,0.05)', width: { md: '40%' }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box className="menu-image-container">
                        <img src={image} alt="Menu Visual" className="menu-image" />
                    </Box>

                    {content && (
                        <Box sx={{
                            padding: '24px 24px 48px 24px',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Box>
                                <Box component="h3" sx={{
                                    fontFamily: '"Roboto Condensed", sans-serif !important',
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    color: '#1a1a1a',
                                    marginBottom: '12px',
                                    marginTop: 0
                                }}>
                                    {content.heading}
                                </Box>
                                <Box component="p" sx={{
                                    fontFamily: '"Roboto", sans-serif',
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    color: '#555',
                                    margin: 0
                                }}>
                                    {content.description}
                                </Box>
                            </Box>


                        </Box>
                    )}
                </Grid>

                {/* Right Col: Links */}
                <Grid item xs={12} md={11} sx={{ height: '100%', overflowY: 'auto', width: { md: '60%' }, height: '100%' }}>
                    <Box className="nav-menu-paper">
                        <Grid container spacing={0} direction="column" justifyContent="flex-start" wrap="nowrap">
                            {items.map((item) => (
                                <Grid item xs={12} md={12} key={item.title}>
                                    {item.path.includes("#") ? (
                                        <HashLink smooth to={item.path} className="menu-list-item" onClick={onClose}>
                                            <ListItems
                                                title={item.title}
                                                // Assuming icon/desc might be available for these too eventually
                                                icon={item.icon}
                                                description={item.description}
                                                path={item.path}
                                                onClick={onClose} // HashLink handles navigation
                                            />
                                        </HashLink>
                                    ) : (
                                        <ListItems
                                            title={item.title}
                                            icon={item.icon}
                                            description={item.description}
                                            path={item.path}
                                            onClick={() => handleLinkClick(item.path)}
                                        />
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default NavMenu;
