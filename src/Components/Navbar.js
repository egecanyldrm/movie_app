import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/js/dist/collapse'
const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg  bg-white navbar-light sticky-top shadow-sm'  >
            <div className="container " >
                <Link className="navbar-brand h1" to='/' >Movie App</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="https://github.com/egecanyldrm" className='nav-link text-center my-2' target="_blank" >Github</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/egecan-yildirim/" className='nav-link text-center my-2' target="_blank" >Linkedin</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.egecanyildirim.com" className='nav-link text-center my-2' target="_blank" >Personal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
