import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg  bg-light navbar-light sticky-top shadow-sm'  >
            <div className="container ">
                <a href="/" className="navbar-brand">Movie App</a>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Popular TV Series</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Popular Movies </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
