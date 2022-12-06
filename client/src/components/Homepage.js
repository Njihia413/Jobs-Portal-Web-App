import React from "react";

function Homepage () {
    return (
        <section className="homepage">
            <div className="row">
                <div className="col-md-7">
                    <div className="intro">
                        <h1>Find A <span className="main-color">Job</span> That <br></br>
                        <span className="main-color">Matches</span><br></br>Your Passion</h1>
                        <p className="mt-4">
                            Hand-picked opportunities to work from home, remotely, freelance, 
                            <br></br>full-time, part-time, contract and internships.
                        </p>
                        <div className="search-form">
                            <form className="search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search by job title......" name="query" required></input>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary btn-search" type="submit">
                                            <small>Search</small>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homepage;