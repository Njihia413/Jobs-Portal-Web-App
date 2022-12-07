import React from "react";

function Navbar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">JobsPortal</a>
                <div className="d-flex">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {user ? (
                                 <button className="btn btn-post" onClick={handleLogoutClick}>Logout</button>
                                ) : (
                                    <>
                                    <li className="nav-item">
                                        <a className="nav-link main-color" href="/login">Login</a>
                                    </li>
                                    </>
                                )}
                            <li className="nav-item">
                                <a className="btn btn-primary" href="/create-a-job">Post a job</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;