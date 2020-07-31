import React, { Fragment } from 'react';
//this is to help with not makeing a request to dom.
import {Link} from 'react-router-dom';

function Nav ({user}) {
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
                    <li className="nav-item dropdown">
                        <a href="" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle" id="blogsDropDown">
                        Blogs
                        </a>                        
                        <div className="dropdown-menu" aria-labelledby="blogsDropdown">
                            <Link to="/blogs" className="dropdown-item">Archive</Link>
                            {user ? (
                                <Fragment>
                                <div className="dropdown-divider"></div>
                                <Link to="/blogs/new" className="dropdown-item">New Post</Link>
                                </Fragment>
                            ) : null}
                        </div>
                        
                    </li>
                    <li className="nav-item">                        
                        <ul className="navbar-nav">
                            {user ? (
                                <li className="nav-item">
                                <Link to="/logout" className="nav-link">
                                    <i className="fa fa-sign-out"> Logout</i>
                                </Link>
                                </li>
                            ) : (
                                <Fragment>
                                <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    <i className="fa fa-user-plus"> Register</i>
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                </Fragment>
                            )}
                        
                    </ul>
                    </li>
                </ul>               
            </div>
        </nav>
    );
};

export default Nav;
