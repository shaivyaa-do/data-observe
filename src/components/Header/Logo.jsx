import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Logo = () => {
    return (
        <div className="logo d-flex">
            <Link className="d-flex homenavigateclass" to="/">
                <img
                    className="logo-main"
                    src="/images/landing-logo.png"
                    alt="logo"
                    style={{ width: "160px", height: "auto" }}
                />
            </Link>
        </div>
    );
};

export default Logo;
