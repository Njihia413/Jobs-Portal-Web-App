import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

function JobDetails () {
    const [jobdetails, setJobDetails] = useState([]);
    let {jobId} = useParams();
    console.log(jobId)

    useEffect(() => {
        fetch(`/jobs/${jobId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(data => setJobDetails(data))
    },[jobId])
    

    return (
        <>
        <section className="top-header">
            <div className="row text-center">
                <div className="col-md-12">
                    <h3>{jobdetails.title}<small>({jobdetails.job_type})</small> - {jobdetails.company_name}</h3>
                </div>
            </div>
        </section>
        <section className="job-description">
            <div className="p-5">
                <div className="row text-center">
                    <div className="col-md-12 pb-4">
                        <a href={jobdetails.company_website} className="btn btn-border-outline mb-4">View Company</a>
                        <a href={jobdetails.link_to_job} className="btn btn-apply mb-4">Apply This Job</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            <strong> Minimum Qualification:</strong> {jobdetails.qualification}
                        </p>
                        <p>
                            <strong> Experience Length:</strong> {jobdetails.experience} years
                        </p>
                        <p>
                            <strong> Location:</strong> {jobdetails.location}
                        </p>
                        <p>
                            <strong> Application Deadline:</strong> {jobdetails.application_deadline}
                        </p>
                        <p>
                            <strong> Salary Range:</strong> Ksh {jobdetails.salary_range}
                        </p>
                        <h5 className="text-bold">
                            Job Description
                        </h5>
                        <p className="text-muted">
                            {parse(`${jobdetails.job_description}`)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default JobDetails;