import React, { useState, useEffect } from "react";
import dateFormat from 'dateformat';
import { Link } from "react-router-dom";

function MyJobsList () {
    const [myJobs, setMyJobs] = useState([]);

    useEffect(() => {
        fetch(`/jobs/users/2`)
        .then(response => response.json())
        .then(data => setMyJobs(data))
    },[])


    return (
        <>
        <section className="top-header">
            <div className="row text-center">
                <div className="col-md-12">
                    <h3>My Jobs List</h3>
                </div>
            </div>
        </section>

        <section className="jobs-list-table">
            <div className="p-5">
                <div className="table-card">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Job Type</th>
                                    <th scope="col">Posted Date</th>
                                    <th scope="col">Application Deadline</th>
                                    <th scope="col">Action</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {myJobs.map((myJob) => (
                                    <tr>
                                    <td><strong>{myJob.title}</strong></td>
                                    <td>{myJob.job_type}</td>
                                    <td>{dateFormat(myJob.created_at)}</td>
                                    <td>{myJob.application_deadline}</td>
                                    <td>
                                        <Link to={`/view-details/${myJob.id}`}>
                                            <i className="fa fa-eye main-color"></i>
                                        </Link>
                                       
                                        <i className="fa fa-pencil text-primary"></i>
                                        <i className="fa fa-trash text-danger"></i>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default MyJobsList