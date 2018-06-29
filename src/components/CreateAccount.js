import React from "react";
import "./CreateAccount.css";


const CreateAccount = () => {
	return(
    <div className="login-form">
      <form>
        <h2 class="text-center">Create an Account</h2>
        <div className="form-group">          
          <input type="text" className="form-control" placeholder="Email" required="required" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" required="required" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" required="required" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">Create an Account</button>
        </div>        
      </form>
      <p className="text-center">Already have an account? <a href="#">Login here</a></p>
    </div>
	);
}

export default CreateAccount;