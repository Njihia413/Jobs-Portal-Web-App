import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JobsList () {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("https://jobs-portal-json-server-vercel.vercel.app/jobs")
        .then((response) => response.json())
        .then((data) => setJobs(data));
    }, []);

    return(
        <section className="jobs-list">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 mb-4 mt-4">
                        <h3>All Popular Listed Jobs</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {jobs.map((job) => (
                            <div className="job-card" key={job.id}>
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-4 logo">
                                                <h4 className="h4-logo">{job.company_logo}</h4>
                                            </div>
                                            <div className="col-md-8 pt-3">
                                                <p className="text-muted">
                                                    {job.company_name}
                                                </p>
                                                <h4 className="h4">{job.title} ({job.experience} Year Exp.)</h4>
                                                <div className="row desc">
                                                    <div className="col-md-4">
                                                        <p><span className="icon"><i className="fa fa-location-arrow"></i></span> {job.location} </p>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p><span className="icon"><i className="fa fa-expand"></i></span> {job.job_type} </p>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <p><span className="icon"><i className="fa fa-money"></i></span> Ksh {job.salary_range} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 float-right">
                                        <Link to={`/view-details/${job.id}`} className="btn view-details">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobsList;