import React from "react";
import styles from '../App.css';

export class Candidate extends React.Component{
	state = {
		userName : "",
		mobNo : "",
		list :""
	}

	handleChange =(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		console.log(this.state);
		this.setState({
			userName : "",
			mobNo : "",
			list :""
		});
	}

	render() {
		return(
			<div>
				<form>
					<div  className="form-group">						
						<p>
							Candidate belongs to:
						</p>	
						<div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label class="form-check-label" for="exampleRadios1">
                A List
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label class="form-check-label" for="exampleRadios2">
                B List
              </label>
            </div>
            <div class="form-check disabled">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
              <label class="form-check-label" for="exampleRadios3">
                C List
              </label>
            </div>					  	
							Name:
							<input type = "text" name="userName" placeholder="Enter your name" 
							value={this.state.userName} 
							onChange={this.handleChange}
							className="form-control" required 
							/>
							Mobile Number:
							<input type = "text" pattern="[0-9]{10}" name="mobNo" placeholder="Enter your mobile number"
							value={this.state.mobNo}
							onChange={this.handleChange}
							 className="form-control" required 
							 />
						</div>
					</form>
				<div>
					<p>
						Use the FORM technique
					</p>
					<ul>
						<li>F – Family</li>
						<li>O – Occupation</li>
						<li>R – Recreation</li>
						<li>M – Money</li>
					</ul>
				</div>
				<div>
					<p>
						Check the HASH
					</p>
					<ul>
						<li>H – Humble</li>
						<li>A – Appreciable</li>
						<li>S – Smart</li>
						<li>H - Hungry & Hardworking</li>
					</ul>
				</div>
				<div>
					Qualified in HASH <br />
						<div class="form-check">
						  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
						  <label class="form-check-label" for="exampleRadios1">
						    Yes
						  </label>
						</div>
						<div class="form-check">
						  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
						  <label class="form-check-label" for="exampleRadios2">
						    No
						  </label>
						</div>
				</div>			
			</div>
		)
	}
}