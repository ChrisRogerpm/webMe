import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PublicRoute } from "../../routers/PublicRoute";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="lm-animated-bg" />
            <div className="preloader">
                <div className="preloader-animation">
                    <div className="preloader-spinner"></div>
                </div>
            </div>
            <div className="lmpixels-scroll-to-top">
                <i className="lnr lnr-chevron-up" />
            </div>
            <div className="page-scroll">
                <div
                    id="page_container"
                    className="page-container bg-move-effect"
                    data-animation="transition-flip-in-right"
                >
                    <Header />
                    <div id="main" className="site-main">
                        <div id="main-content" className="single-page-content">
                            <div id="primary" className="content-area">
                                <div id="content" className="page-content site-content single-post" role="main">
                                    <PublicRoute />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
};
