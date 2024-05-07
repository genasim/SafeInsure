import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../shared/components/Logo';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-xxl">
                    <Logo />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#main-nav"
                            aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="main-nav" className="collapse navbar-collapse justify-content-end align-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#policies" className="nav-link">Policies</a>
                            </li>
                            <li className="nav-item">
                                <a href="#claims" className="nav-link">Claims</a>
                            </li>
                            <li className="nav-item">
                                <a href="#backoffice" className="nav-link">BackOffice</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;