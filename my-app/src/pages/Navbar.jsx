import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div style={{ backgroundColor: "cyan" }} className="container-fluid">
                    <Link className="navbar-brand" to="/">Linnseed</Link>
                    <div style={{ backgroundColor: "yellow" }} className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/buyers">Buyers</Link>
                            <Link className="nav-link" to="/sellers">Sellers</Link>
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                    <div>
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                    <div>
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
