import React from "react";
import { Link } from 'react-router-dom';
import "./LoginPage.css";


const LoginPage = () => {
	return(
    <div className="login-form">
      <form>
        <h2 className="text-center">Log in</h2>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Email" required="required" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" required="required" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </div>
        <div className="clearfix">
          <label className="float-left checkbox-inline">
          <input type="checkbox" /> Remember me</label>
          <a href="#" className="float-right">Forgot Password?</a>
        </div>
      </form>
      <p className="text-center"><Link to='/createaccount'>Create an Account</Link></p>
    </div>
	);
}

export default LoginPage;