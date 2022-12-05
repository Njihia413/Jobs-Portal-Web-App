import React from "react";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">JobsPortal</a>
                <div className="d-flex">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link main-color" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-primary" href="create-a-job">Post a job</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;