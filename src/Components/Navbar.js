import React from 'react';
const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg  bg-white navbar-light sticky-top shadow-sm'  >
            <div className="container " >
                <a href="/" className="navbar-brand h1">Movie App</a>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <a className="nav-link "  href="#tvseries"  >Popular TV Series</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#movies">Popular Movies </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
