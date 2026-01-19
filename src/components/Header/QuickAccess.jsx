import React from "react";
import { Button, Stack } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const QuickAccess = () => {
    const navigate = useNavigate();

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <button
                className="btn-accelerators"
                onClick={() => window.location.href = "http://tools-and-accelerators.dataobserve.io/"}
            >
                Accelerators & Tools <KeyboardArrowRight sx={{ fontSize: 16, ml: 0.5 }} />
            </button>
            <button
                className="btn-contact"
                onClick={() => window.location.href = "https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.html"}
            >
                Contact Us <KeyboardArrowRight sx={{ fontSize: 16, ml: 0.5 }} />
            </button>
        </Stack>
    );
};

export default QuickAccess;
