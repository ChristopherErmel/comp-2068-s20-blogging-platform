import React from 'react';
//this is to help with not makeing a request to dom.
import {Link} from 'react-router-dom';

function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">JSFBlog</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-targe="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">                        
                        <ul className="navbar-nav">
                        {/* <% if (authorized){ %>              */}
                            <li className="nav-item">
                                <a href="/logout" className="nav-link">
                                    <i className="fa fa-sign-out"> Logout</i>
                                </a>
                            </li>
                        {/* <% } else { %> */}
                            <li className="nav-item">
                                <a href="/register" className="nav-link">
                                    <i className="fa fa-user-plus"> Register</i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        {/* <% } %> */}
                    </ul>



                    </li>
                </ul>               
            </div>
        </nav>
    );
};

export default Nav;
