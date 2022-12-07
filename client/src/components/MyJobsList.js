import React, {useState, useEffect} from "react";
import dateFormat from "dateformat";
import {Link} from "react-router-dom";

export default function MyJobsList() {
  const [myJobs, setMyJobs] = useState([]);
  const [deleteJob, setDeleteJob] = useState(false);

  const fetchData = () => {
    fetch(`/jobs/users/2`)
      .then((response) => response.json())
      .then((data) => setMyJobs(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="top-header">
        <div className="row text-center">
          <div className="col-md-12">
            <h3>My Jobs List</h3>
          </div>
        </div>
      </section>

      {deleteJob ? 
        <div className="container mt-3" id="danger">
            <div className="alert alert-danger" role="alert">
                Job deleted😥!
            </div>
        </div>
      : ""}
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
                    <tr key={myJob.id}>
                      <td>
                        <strong>{myJob.title}</strong>
                      </td>
                      <td>{myJob.job_type}</td>
                      <td>{dateFormat(myJob.created_at)}</td>
                      <td>{myJob.application_deadline}</td>
                      <td>
                        <Link to={`/view-details/${myJob.id}`}>
                          <i className="fa fa-eye main-color"></i>
                        </Link>
                        <Link to={`/update-details/${myJob.id}`}>
                            <i className="fa fa-pencil text-primary"></i>
                        </Link>
                        <button style={{ "backgroundColor": "transparent", "border": "none" }}
                          onClick={() => {
                            fetch(`/jobs/${myJob.id}`, {
                              method: "DELETE",
                            }).then((res) => {
                              if (res.ok) {
                                console.log(res);
                                setDeleteJob(true);
                                fetchData();
                              } else {
                                res.json().then(console.log);
                              }
                            });
                          }}
                        >
                          <i className="fa fa-trash text-danger"></i>
                        </button>
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
  );
}
