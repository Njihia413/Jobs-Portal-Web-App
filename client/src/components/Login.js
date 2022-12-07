import React, {  useState }from "react";

function Login ({ setUser }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => setUser(user));
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    return(
        <>
        <section className="top-header">
            <div className="row text-center">
                <div className="col-md-12">
                    <h3>Login</h3>
                </div>
            </div>
        </section>
        <section className="auth">
            <div className="p-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="auth-card mt-4 mb-5">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
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
                                            <button type="submit" className="btn login">{isLoading ? "Loading..." : "Login"}</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="form-group">
                                            <p>Not a member? <strong><a className="main-color" href="/register">Register</a></strong></p>
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

export default Login;