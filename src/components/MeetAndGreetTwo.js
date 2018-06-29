import React from "react";
import cashflow from "../assets/cashflow.jpg";

const MeetAndGreetTwo = (props) => {
  return(
			<div className="meetGreetTwo">
				<h5>Meet and Greet 2 (MG2)</h5>
				<ol>
					<li>Initiate the conversation relevant to business by asking relevant questions based on Audio/Video/Book shared.</li>
					<li>
						Explain the difference between Job Security and Income Security and Explain Cash flow quadrant.
						<img className="img-cashflow" alt="meetandgreettwo" src={cashflow}/>
						<h6>ESBI Three Scenarios</h6>
						<table className="scenario">
							<tbody>
								<tr>
									<td>Scenario 1:</td>
									<td>Explain what is ESBI</td>
								</tr>
								<tr>
									<td>Scenario 2:</td>
									<td>Time and Money Variable – Who has control over what?</td>
								</tr>
								<tr>
									<td rowSpan ="5">Scenario 3:</td>
									<td>How B-quadrant business become a business of continuity?</td>
								</tr>
								<tr>
									<td>500+ People </td>
								</tr>
								<tr>
									<td>No dependency on Business owner existence</td>
								</tr>
								<tr>
									<td>Son or Daughter can lead from where the Business owner left</td>
								</tr>
								<tr>
									<td>In Employment, your kids have to start from scratch.</td>
								</tr>
							</tbody>
						</table>
					</li>
					<li>Then deepen the conversation by asking few questions like
						<ol type="A">
							<li>How would you like to rate yourself on Patience Level?<br />
								(in the scale of 1 to 5 say 5 being extremely patient and 1 being extremely impatient.)
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="patience" id="patience1" value="option1" />
										<label className="form-check-label" htmlFor="patience1">
											1
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="patience" id="patience2" value="option2" />
										<label className="form-check-label" htmlFor="patience2">
											2
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="patience" id="patience3" value="option3" />
										<label className="form-check-label" htmlFor="patience3">
											3
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="patience" id="patience4" value="option4" />
										<label className="form-check-label" htmlFor="patience4">
											4
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="patience" id="patience5" value="option5" />
										<label className="form-check-label" htmlFor="patience5">
											5
										</label>
									</div>
								</form>
							</li>
							<li>
								What would you really like to have in life?
								<div className="row">
									<div className="column">
										<b>Values</b>
										<p>What you believe in</p>
										<form>            
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="family" />
												<label className="form-check-label" htmlFor="family">
													Family
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="wellbeing" />
												<label className="form-check-label" htmlFor="wellbeing">
													Well-Being
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="faith" />
												<label className="form-check-label" htmlFor="faith">
													Faith
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="freedom" />
												<label className="form-check-label" htmlFor="freedom">
													Freedom from Debt
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="principles" />
												<label className="form-check-label" htmlFor="principles">
													Principles
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="legacy" />
												<label className="form-check-label" htmlFor="legacy">
													Legacy
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="spiritual" />
												<label className="form-check-label" htmlFor="spiritual">
													Spiritual
												</label>
											</div>
										</form>   
									</div>
									<div className="column">
										<b>Dreams</b>
										<p>Where you want to be</p>
										<form>            
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="home" />
												<label className="form-check-label" htmlFor="home">
													Home
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="car" />
												<label className="form-check-label" htmlFor="car">
													Car
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="vacation" />
												<label className="form-check-label" htmlFor="vacation">
													Vacation
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="children" />
												<label className="form-check-label" htmlFor="children">
													Childrens future
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="lifestyle" />
												<label className="form-check-label" htmlFor="lifestyle">
													Lifestyle
												</label>
											</div>

											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="savings" />
												<label className="form-check-label" htmlFor="savings">
													Savings
												</label>
											</div>
											
											<div className="form-check">
												<input className="form-check-input" type="checkbox" id="retirement" />
												<label className="form-check-label" htmlFor="retirement">
													Early Retirement
												</label>
											</div>
										</form>
									</div>
								</div>
							</li>
							<li>
								Do you see yourself doing, what you are doing 20 years from now?
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="years" id="veryLikely" value="option1" />
										<label className="form-check-label" htmlFor="veryLikely">
											Very likely
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="years" id="somewhatLikely" value="option2" />
										<label className="form-check-label" htmlFor="somewhatLikely">
											Somewhat likely
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="years" id="neitherLikely" value="option3" />
										<label className="form-check-label" htmlFor="neitherLikely">
											Neither likely nor unlikely
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="years" id="unlikely" value="option3" />
										<label className="form-check-label" htmlFor="unlikely">
											Unlikely
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="years" id="veryUnlikely" value="option3" />
										<label className="form-check-label" htmlFor="veryUnlikely">
											Very unlikely
										</label>
									</div>
								</form>
							</li>
							<li>
								How confident are you that you are on the right track to save enough for retirement?
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="confident" id="extremeConfident" value="option1" />
										<label className="form-check-label" htmlFor="extremeConfident">
											Extremely confident
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="confident" id="somewhatConfident" value="option2" />
										<label className="form-check-label" htmlFor="somewhatConfident">
											Somewhat confident
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="confident" id="notConfident" value="option3" />
										<label className="form-check-label" htmlFor="notConfident">
											Not at all confident
										</label>
									</div>
								</form>
							</li>
							<li>
								Do you have any idea about asset based income?
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="assetIncome" id="assetIncome1" value="option1" />
										<label className="form-check-label" htmlFor="assetIncome1">
											Yes
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="assetIncome" id="assetIncome2" value="option2" />
										<label className="form-check-label" htmlFor="assetIncome2">
											No
										</label>
									</div>
								</form>
							</li>
							<li>
								How much time can you devote per week to build an “Asset based business” if you decide to launch one?
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="timeDevote" id="timeDevote1" value="option1" />
										<label className="form-check-label" htmlFor="timeDevote1">
											8-10hrs
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="timeDevote" id="timeDevote2" value="option2" />
										<label className="form-check-label" htmlFor="timeDevote2">
											10-15hrs
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="timeDevote" id="timeDevote3" value="option1" />
										<label className="form-check-label" htmlFor="timeDevote3">
											15-20hrs
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="timeDevote" id="timeDevote4" value="option2" />
										<label className="form-check-label" htmlFor="timeDevote4">
											25 hrs and above
										</label>
									</div>
								</form>
							</li>
							<li>
								How would you rate yourself in terms of Learn to Lead?
								<p>(say 5 is ready to learn and 1 is not ready to learn)</p>
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="learnToLead" id="learnToLead1" value="option1" />
										<label className="form-check-label" htmlFor="learnToLead1">
											1
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="learnToLead" id="learnToLead2" value="option2" />
										<label className="form-check-label" htmlFor="learnToLead2">
											2
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="learnToLead" id="learnToLead3" value="option3" />
										<label className="form-check-label" htmlFor="learnToLead3">
											3
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="learnToLead" id="learnToLead4" value="option3" />
										<label className="form-check-label" htmlFor="learnToLead4">
											4
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="learnToLead" id="learnToLead5" value="option3" />
										<label className="form-check-label" htmlFor="learnToLead5">
											5
										</label>
									</div>
								</form>
							</li>
							<li>
								Who makes the decision at your home?
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="homeDecision" id="selfDecision" value="option3" />
										<label className="form-check-label" htmlFor="selfDecision">
											Self
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="homeDecision" id="selfspouseDecision" value="option3" />
										<label className="form-check-label" htmlFor="selfspouseDecision">
											Self & Spouse
										</label>
									</div>
								</form>
							</li>
							<li>
								Are you Process Oriented or Result Oriented?
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="oriented" id="processOriented" value="option3" />
										<label className="form-check-label" htmlFor="processOriented">
											Process
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="oriented" id="resultOriented" value="option3" />
										<label className="form-check-label" htmlFor="resultOriented">
											Result
										</label>
									</div>
								</form>	
							</li>
							<li>
								Are you a Long Term Thinker or a Short Term Thinker?
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="thinker" id="longTerm" value="option3" />
										<label className="form-check-label" htmlFor="longTerm">
											Long term
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="thinker" id="shortTerm" value="option3" />
										<label className="form-check-label" htmlFor="shortTerm">
											Short term
										</label>
									</div>
								</form>
							</li>
							<li>
								In which area you are more conscious about?
								<form>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="conscious" id="health" value="option3" />
										<label className="form-check-label" htmlFor="health">
											Health
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="conscious" id="envClean" value="option3" />
										<label className="form-check-label" htmlFor="envClean">
											Environmental Cleanliness
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="conscious" id="cleanliness" value="option3" />
										<label className="form-check-label" htmlFor="cleanliness">
											Cleanliness at home and personal
										</label>
									</div>

									<div className="form-check">
										<input className="form-check-input" type="radio" name="conscious" id="skinCare" value="option3" />
										<label className="form-check-label" htmlFor="skinCare">
											Skin care
										</label>
									</div>
								</form>
							</li>
						</ol>
					</li>
					<li>
						MASAWA (Make Someone Aware Who/What is Available)
						<p>
							There is a Master Mind group who will keep on working with us.
							These are  group of people who are Successful in each and every area of their own expertise. When we have accessibility to that group do you think will it be helpful and take your business in the right way?
						</p>
					</li>
				</ol>	
			</div>
		);

}

export default MeetAndGreetTwo;