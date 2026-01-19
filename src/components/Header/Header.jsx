import React, { useState, useEffect, useRef } from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import QuickAccess from "./QuickAccess";
import MobileMenu from "./MobileMenu";
import "./Header.css";

const Header = () => {
    const [activeItem, setActiveItem] = useState(null);
    const containerRef = useRef(null);
    const theme = useTheme();
    // Using 'md' as breakpoint for Desktop vs Mobile
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const handleItemClick = (item) => {
        setActiveItem((prev) => (prev?.id === item.id ? null : item));
    };

    const closeMenu = () => setActiveItem(null);

    // Close menu on click outside
    useEffect(() => {
        if (!activeItem) return;
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                closeMenu();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeItem]);

    return (
        <>
            <div className="header-container d-none d-md-block"> {/* Desktop Only */}
                <div className={`header-glass`} />
                <Box
                    className={`header-content-wrapper ${activeItem ? 'menu-open' : ''}`}
                    ref={containerRef}
                >
                    <Container maxWidth="xl">
                        <div className="toolbar-custom">
                            <Logo />
                            <NavBar onItemClick={handleItemClick} isMenuOpen={activeItem} />
                            <QuickAccess />
                        </div>
                        {activeItem && (
                            <NavMenu
                                items={activeItem.items}
                                image={activeItem.image}
                                content={activeItem.content}
                                onClose={closeMenu}
                            />
                        )}
                    </Container>
                </Box>
            </div>

            {/* Mobile Only - Legacy Implementation */}
            <div className="d-block d-md-none">
                <MobileMenu />
            </div>
        </>
    );
};

export default Header;
