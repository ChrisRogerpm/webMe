import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header id="site_header" className="header">
                <div className="header-content clearfix">
                    {/* Text Logo */}
                    <div className="text-logo">
                        <Link className="navbar-brand" to="/">
                            <div className="logo-symbol">C</div>
                            <div className="logo-text">Christian <span>Poma Machicado</span></div>
                        </Link>
                    </div>
                    <Link className="menu-toggle mobile-visible" to="">
                        <i className="fa fa-bars" />
                    </Link>
                </div>
            </header>
        </>
    )
}
