import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MobileMenu = () => {
    return (
        <div className="container d-flex justify-content-between d-block d-md-none tab-NAV" style={{ paddingTop: '10px' }}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {/* Expertise */}
                        <li className="nav-item dropdown expertise">
                            <a
                                className="nav-link dropdown-toggle text-dark"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Expertise
                            </a>
                            <div
                                className="dropdown-menu navlinksdropdown"
                                aria-labelledby="navbarDropdownMenuLink"
                                style={{ transform: "translateX(-20%)" }}
                            >
                                {/* ... Mobile Dropdown Content for Expertise ... 
                     Simplifying to standard links for robustness or copying exact content? 
                     Copying exact content for safety per "Do not change existing content" 
                 */}
                                <div className="d-flex navcard ml-3">
                                    <div className="navcard2 pt-4 pl-2">
                                        <a className="dropdown-item linksclass" href="/cloud">Cloud Transformation</a>
                                        <a className="dropdown-item linksclass" href="/databi">Data Analytics & BI</a>
                                        <a className="dropdown-item linksclass" href="/devops">DevOps-as-a-service</a>
                                        <a className="dropdown-item linksclass" href="/talent">Talent-as-a-service</a>
                                        <a className="dropdown-item linksclass" href="/dataeng">Data Engineering</a>
                                        <a className="dropdown-item linksclass" href="/aiml">AI & Machine Learning</a>
                                        <a className="dropdown-item linksclass" href="/genai">Gen AI as a Service</a>
                                        <a className="dropdown-item linksclass" href="/application">Application Modernization</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Products */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-expanded="false">Products</a>
                            <div className="dropdown-menu navlinksdropdown">
                                <div className="navcard2 pl-2">
                                    <a className="dropdown-item linksclass" href="/caliber">DO Caliber</a>
                                    <a className="dropdown-item linksclass" href="/base">DO Base</a>
                                    <a className="dropdown-item linksclass" href="/observability">DO 360</a>
                                    <a className="dropdown-item linksclass" href="/metrics">DO Metrics</a>
                                </div>
                            </div>
                        </li>

                        {/* Industries */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-expanded="false">Industries</a>
                            <div className="dropdown-menu navlinksdropdown" style={{ left: "-35%" }}>
                                <div className="navcard2 pl-2">
                                    <a className="dropdown-item linksclass" href="/life-science">Life Science</a>
                                    <a className="dropdown-item linksclass" href="/media-entertainment">Media & Entertainment</a>
                                    <a className="dropdown-item linksclass" href="/gaming">Gaming</a>
                                    <a className="dropdown-item linksclass" href="/financial-services">Financial Services</a>
                                    <a className="dropdown-item linksclass" href="/travel-hospitality">Travel & Hospitality</a>
                                    <a className="dropdown-item linksclass" href="/cpg">CPG</a>
                                    <a className="dropdown-item linksclass" href="/industrials">Industrials</a>
                                </div>
                            </div>
                        </li>

                        {/* Insights */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-expanded="false">Insights</a>
                            <div className="dropdown-menu navlinksdropdown" style={{ width: "auto", left: "-100%" }}>
                                <div className="navcard2 pl-2">
                                    <a className="dropdown-item linksclass" href="/allinsights">All Insights</a>
                                    <HashLink to="/allinsights#casestudies" className="dropdown-item linksclass">Case Studies</HashLink>
                                    <HashLink to="/allinsights#blogs" className="dropdown-item linksclass">Blogs</HashLink>
                                    <HashLink to="/allinsights#ebooks" className="dropdown-item linksclass">Ebooks</HashLink>
                                    <HashLink to="/allinsights#whitepapers" className="dropdown-item linksclass">Whitepapers</HashLink>
                                    <HashLink to="/allinsights#top10insights" className="dropdown-item linksclass">Events</HashLink>
                                </div>
                            </div>
                        </li>

                        {/* Company */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" data-toggle="dropdown" aria-expanded="false">Company</a>
                            <div className="dropdown-menu navlinksdropdown" style={{ left: "-60%" }}>
                                <div className="navcard2 pl-2">
                                    <a className="dropdown-item linksclass" href="/company">About Us</a>
                                    <a className="dropdown-item linksclass" href="/people">Careers</a>
                                </div>
                            </div>
                        </li>

                        <li><button className="acceleratorsclass">Accelerators & Tools</button></li>
                        <li><Link to="/contact"><button className="contact">contact</button></Link></li>

                    </ul>
                </div>
            </nav>
            <div className="logo d-flex">
                <Link className="d-flex homenavigateclass" to="/">
                    <img className="logo-main" src="/images/landing-logo.png" alt="logo" width={100} />
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;
