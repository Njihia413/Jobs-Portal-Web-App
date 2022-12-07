import React, {useEffect, useState} from "react";
import { Routes, Route }  from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import CreateJobForm from "./CreateJobForm";
import Footer from "./Footer";
import MainPage from "./MainPage";
import JobDetails from "./JobDetails";
import MyJobsList from "./MyJobsList";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/create-a-job" element={<CreateJobForm/>} />
          <Route path="/view-details/:jobId" element={<JobDetails/>} />
          <Route path="/my-jobs-list" element={<MyJobsList/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
