import React from "react";
import '../App.css';

const Candidate = (props) => {
  return(
    <div className="candidate">
      <h5>Qualifying for Dropping The Message (DTM)</h5>
      <ol>
        <li className="candidate-list">
          <span>Candidate belongs to:</span>
          <form>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="assetIncome" id="assetIncome1" value="option1" />
              <label className="form-check-label" htmlFor="assetIncome1">
                A Listl
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="assetIncome" id="assetIncome2" value="option2" />
              <label className="form-check-label" htmlFor="assetIncome2">
                B List
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="assetIncome" id="assetIncome2" value="option2" />
              <label className="form-check-label" htmlFor="assetIncome2">
                C List
              </label>
            </div>

            <div className="form-group row">
              <label htmlFor="userName" className="col-sm-3 col-form-label">Name</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" id="userName" placeholder="Enter your name" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="mobileNo" className="col-sm-3 col-form-label">Mobile No:</label>
              <div className="col-sm-4">
                <input type="tel" className="form-control" id="mobileNo" placeholder="Enter your mobile number" />
              </div>
            </div>
          </form>
        </li>
        <li className="candidate-list">
          Use the FORM technique
          <ul>
            <li>F – Family</li>
            <li>O – Occupation</li>
            <li>R – Recreation</li>
            <li>M – Money</li>
          </ul>
        </li>
        <li className="candidate-list">
          Check the HASH
          <ul>
            <li>H – Humble</li>
            <li>A – Appreciable</li>
            <li>S – Smart</li>
            <li>H - Hungry & Hardworking</li>
          </ul>
        </li>
        <li className="candidate-list">
          Qualified in HASH
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
      </ol>			
    </div>
  );
}

export default Candidate;