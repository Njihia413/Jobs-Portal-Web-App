import React, { useState } from "react";

function Register ({ setUser }) {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            username,
            password,
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => setUser(user));
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
                    <h3>Register</h3>
                </div>
            </div>
        </section>
        <section className="auth">
            <div className="p-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="auth-card mt-4 mb-5">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="first_name" className="required">First Name</label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                autoComplete="off"
                                                value={first_name} 
                                                className="form-control" 
                                                name="first_name" 
                                                placeholder="First Name"
                                                onChange={(e) => setFirstName(e.target.value)} 
                                                required>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="last_name" className="required">Last Name</label>
                                            <input
                                                type="text"
                                                id="last_name" 
                                                autoComplete="off"
                                                value={last_name}
                                                className="form-control" 
                                                name="last_name" 
                                                placeholder="Last Name"
                                                onChange={(e) => setLastName(e.target.value)} 
                                                required>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="required">Email</label>
                                            <input 
                                                type="email" 
                                                id="email"
                                                autoComplete="off"
                                                value={email}
                                                className="form-control" 
                                                name="email" 
                                                placeholder="Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="username" className="required">Username</label>
                                            <input 
                                                type="text" 
                                                id="username"
                                                autoComplete="off"
                                                value={username}
                                                className="form-control" 
                                                name="username" 
                                                placeholder="Username" 
                                                onChange={(e) => setUsername(e.target.value)}
                                                required>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="password" className="required">Password</label>
                                            <input 
                                                type="password" 
                                                id="password"
                                                autoComplete="current-password"
                                                value={password}
                                                className="form-control" 
                                                name="password" 
                                                placeholder="Password"
                                                onChange={(e) => setPassword(e.target.value)} 
                                                required>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn login">{isLoading ? "Loading..." : "Create Account"}</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="form-group">
                                            <p>Have an account? <strong><a className="main-color" href="/login">Login</a></strong></p>
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
                </div>
            </div>
        </section>
        </>
    )
}

export default Register;