import React from "react";
import { Button, Stack } from "@mui/material";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import headerMenuData from "./header.json";
import "./Header.css";

const NavBar = ({ onItemClick, isMenuOpen }) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            {headerMenuData.map((item) => {
                const isOpen = isMenuOpen?.id === item.id;
                return (
                    <Button
                        key={item.id}
                        onClick={(e) => onItemClick(item, e)}
                        endIcon={isOpen ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />}
                        className={`nav-btn ${isOpen ? "active" : ""}`}
                        disableRipple
                        sx={{
                            fontFamily: '"Roboto Condensed", sans-serif !important',
                            fontWeight: 700,
                            letterSpacing: '0.5px'
                        }}
                    >
                        {item.label}
                    </Button>
                );
            })}
        </Stack>
    );
};

export default NavBar;
