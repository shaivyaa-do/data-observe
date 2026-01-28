import React from "react";
import { Link } from "react-router-dom";
import LogoBlack from "../../assets/images/others/DO Black.svg";
import "./Header.css";

const Logo = () => {
    return (
        <div className="logo d-flex">
            <Link className="d-flex homenavigateclass" to="/">
                <img
                    className="logo-main"
                    src={LogoBlack}
                    alt="logo"
                    style={{ width: "160px", height: "auto" }}
                />
            </Link>
        </div>
    );
};

export default Logo;
