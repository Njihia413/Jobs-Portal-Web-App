import React, {useEffect, useState} from "react";

function CreateJobForm () {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("/categories")
        .then((response) => response.json())
        .then((data) => setCategories(data));
    }, []);

    return (
        <>
        <section className="top-header">
            <div className="row text-center">
                <div className="col-md-12">
                    <h3>Create a Job</h3>
                </div>
            </div>
        </section>
        <section className="create-job">
            <div className="p-3">
                <div className="create-job-card">
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <a href="/my-jobs-list" className="btn btn-post-job float-right">My Jobs</a>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label  htmlFor="company_name">Company Name</label>
                                    <input type="text" className="form-control" name="company_name" placeholder="Name" required></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label  htmlFor="company_website">Company Website</label>
                                    <input type="url" className="form-control" name="company_website" placeholder="Website Link" required></input>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label  htmlFor="title">Job Title</label>
                                    <input type="text" className="form-control" name="title" placeholder="Title" required></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="category">Job Category</label>
                                    <select name="category" id="category" className="form-select" aria-label="Default select example" required>
                                        <option defaultValue disabled>--Select Category--</option>
                                        {categories.map((category) => (
                                            <option value={category.id} key={category.name}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="job_type">Job Type</label>
                                    <select name="job_type" id="job_type" className="form-select" aria-label="Default select example">
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Confidential">Confidential</option> 
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="job_location">Job Location</label>
                                    <input type="text" className="form-control" name="job_location" placeholder="Location" required></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="salary_range">Salary Range</label>
                                    <input type="text" className="form-control" name="salary_range" placeholder="Salary Range" required></input>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="experience">Experience</label>
                                    <input type="number" className="form-control" name="experience" placeholder="Experience" required></input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="qualification">Qualification</label>
                                    <input type="text" class="form-control" name="qualification" placeholder="Qualification" required></input>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="application_deadline">Application Deadline</label>
                                    <input type="date" className="form-control" name="application_deadline" placeholder="Job application deadline" required></input>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="link_to_job">Job Application Link</label>
                                    <input type="url" className="form-control" name="link_to_job" placeholder="Job application link url" required></input>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="job_description">Job Description</label>
                                    <textarea name="job_description" id="job_description" cols="30" rows="10" class="form-control" placeholder="Job Description" required></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button type="submit" class="btn btn-post-job">Post Job</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default CreateJobForm;