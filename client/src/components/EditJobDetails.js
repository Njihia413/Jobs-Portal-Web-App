import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function EditJobDetails() {
  const [jobdetails, setJobDetails] = useState([]);
  const [categories, setCategories] = useState([]);

  let {jobId} = useParams();
  console.log(jobId);

  useEffect(() => {

    fetch(`/jobs/${jobId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setJobDetails(data));

    fetch("/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, [jobId]);

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyLinkedIn, setCompanyLinkedIn] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  function handlePatchSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/jobs/${jobId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_name: companyName,
        company_phone: companyPhone,
        company_website: companyWebsite,
        company_linkedin: companyLinkedIn,
        company_logo: companyLogo,
        company_location: companyLocation,
        title: title,
        category_id: category,
        salary_range: salaryRange,
        job_type: jobType,
        job_description: jobDescription,
        location: jobLocation,
        application_deadline: applicationDeadline,
        experience: experience,
        qualification: qualification,
        link_to_job: jobLink,
        user_id: 2,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => console.log(data));
        //e.target.reset();
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <section className="top-header">
        <div className="row text-center">
          <div className="col-md-12">
            <h3>Update Job</h3>
          </div>
        </div>
      </section>
      
      <section className="create-job">
        <div className="p-3">
          <div className="create-job-card">
            <form onSubmit={handlePatchSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <a
                    href="/my-jobs-list"
                    className="btn btn-post-job float-right"
                  >
                    My Jobs
                  </a>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="company_name">Company Name</label>
                    <input
                      type="text"
                      id="company_name"
                      autoComplete="off"
                      value={companyName}
                      className="form-control"
                      name="company_name"
                      placeholder="Name"
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="company_phone">Company Phone</label>
                    <input
                      type="number"
                      id="company_phone"
                      autoComplete="off"
                      value={companyPhone}
                      className="form-control"
                      name="company_phone"
                      placeholder="Phone"
                      onChange={(e) => setCompanyPhone(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="company_website">Company Website</label>
                    <input
                      type="url"
                      id="company_website"
                      autoComplete="off"
                      value={companyWebsite}
                      className="form-control"
                      name="company_website"
                      placeholder="Website Link"
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="company_linkedin">Company LinkedIn</label>
                    <input
                      type="url"
                      id="company_linkedin"
                      autoComplete="off"
                      value={companyLinkedIn}
                      className="form-control"
                      name="company_likedin"
                      placeholder="LinkedIn Url"
                      onChange={(e) => setCompanyLinkedIn(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="title">Job Title</label>
                    <input
                      type="text"
                      id="title"
                      autoComplete="off"
                      value={title}
                      className="form-control"
                      name="title"
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="company_logo">Company Logo</label>
                    <input
                      type="text"
                      id="company_logo"
                      autoComplete="off"
                      value={companyLogo}
                      className="form-control"
                      name="company_logo"
                      placeholder="Logo"
                      onChange={(e) => setCompanyLogo(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="company_location">Company Location</label>
                    <input
                      type="text"
                      id="company_location"
                      autoComplete="off"
                      value={companyLocation}
                      className="form-control"
                      name="company_location"
                      placeholder="Company Location"
                      onChange={(e) => setCompanyLocation(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="category">Job Category</label>
                    <select
                      name="category"
                      id="category"
                      className="form-select"
                      aria-label="Default select example"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      <option defaultValue disabled>
                        --Select Category--
                      </option>
                      {categories.map((category) => (
                        <option value={category.id} key={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="job_type">Job Type</label>
                    <select
                      name="job_type"
                      id="job_type"
                      className="form-select"
                      aria-label="Default select example"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
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
                    <input
                      type="text"
                      id="job_location"
                      autoComplete="off"
                      value={jobLocation}
                      className="form-control"
                      name="job_location"
                      placeholder="Location"
                      onChange={(e) => setJobLocation(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="salary_range">Salary Range</label>
                    <input
                      type="text"
                      id="salary_range"
                      autoComplete="off"
                      value={salaryRange}
                      className="form-control"
                      name="salary_range"
                      placeholder="Salary Range"
                      onChange={(e) => setSalaryRange(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="experience">Experience</label>
                    <input
                      type="number"
                      id="experience"
                      autoComplete="off"
                      value={experience}
                      className="form-control"
                      name="experience"
                      placeholder="Experience"
                      onChange={(e) => setExperience(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <input
                      type="text"
                      id="qualification"
                      autoComplete="off"
                      value={qualification}
                      className="form-control"
                      name="qualification"
                      placeholder="Qualification"
                      onChange={(e) => setQualification(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="application_deadline">
                      Application Deadline
                    </label>
                    <input
                      type="date"
                      id="application_deadline"
                      autoComplete="off"
                      value={applicationDeadline}
                      className="form-control"
                      name="application_deadline"
                      placeholder="Job application deadline"
                      onChange={(e) => setApplicationDeadline(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="link_to_job">Job Application Link</label>
                    <input
                      type="url"
                      id="link_to_job"
                      autoComplete="off"
                      value={jobLink}
                      className="form-control"
                      name="link_to_job"
                      placeholder="Job application link url"
                      onChange={(e) => setJobLink(e.target.value)}
                      required
                    ></input>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="job_description">Job Description</label>
                    <textarea
                      name="job_description"
                      id="job_description"
                      autoComplete="off"
                      value={jobDescription}
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Job Description"
                      onChange={(e) => setJobDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-post-job">
                      {isLoading ? "Loading..." : "Update Job"}
                    </button>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <div className="form-group">
                    {errors.map((err) => (
                      <p key={err}>{err}</p>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
