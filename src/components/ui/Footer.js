import React from 'react'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const url_LinkedIn = {
        href: "https://www.linkedin.com/in/christian-poma-machicado-b01714159",
        target: "_blank",
    };
    const url_Github = {
        href: "https://github.com/ChrisRogerpm",
        target: "_blank",
    };

    return (
        <>
            <footer className="site-footer clearfix">
                <div className="footer-social">
                    <ul className="footer-social-links">
                        <li>
                            <a {...url_LinkedIn} rel="noreferrer">LinkedIn</a>
                        </li>
                        <li>
                            <a {...url_Github} rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyrights">
                    <p>© {currentYear} All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}
