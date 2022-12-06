import React from "react";

function Login () {
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
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="username" className="required">Username</label>
                                            <input type="text" className="form-control" name="username" placeholder="Username" required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="password" class="required">Password</label>
                                            <input type="password" className="form-control" name="password" placeholder="Password" required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn login"> Login </button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="form-group">
                                            <p>Not a member? <strong><a className="main-color" href="/signup">Register</a></strong></p>
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