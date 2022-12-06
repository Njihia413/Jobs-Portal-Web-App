import React from "react";

function Register () {
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
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="first_name" className="required">First Name</label>
                                            <input type="text" class="form-control" name="first_name" placeholder="First Name" required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="last_name" className="required">Last Name</label>
                                            <input type="text" class="form-control" name="last_name" placeholder="Last Name" required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email" className="required">Email</label>
                                            <input type="email" className="form-control" name="email" placeholder="Email" required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="username" className="required">Username</label>
                                            <input type="text" className="form-control" name="username" placeholder="Username" required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="password" className="required">Password</label>
                                            <input type="password" className="form-control" name="password" placeholder="Password" required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn login">Create Account</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="form-group">
                                            <p>Have an account? <strong><a className="main-color" href="/login">Login</a></strong></p>
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