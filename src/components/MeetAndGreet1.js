import React from "react";
import styles from '../App.css';
import mgone from "../assets/mgone.png";

export const MeetAndGreet1 = (props) => {
		return (	
		<div>
  	  <h5>Meet and Greet 1 (MG1)</h5>
  	  <p><strong>Intension:</strong> Understanding the candidate better while meeting</p>
  	  <p>Share 1:380 concepts and let him speak about his/her understanding.</p>
  	  <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Employee, Self-employed</th>
            <th scope="col">Big business</th>
          </tr>
        </thead>
        <tbody>
          <tr>          
            <td>% of People</td>
            <td>95%</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Income Level</td>
            <td>5%</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>If they shared Rs.100</td>
            <td>
              Rs.5 for 95 People <br />
              Per Person 0.05 paisa
            </td>
            <td>
              Rs.95 for 5 People <br />
              Per person Rs.19
            </td>
          </tr>
          <tr>
            <td>Risk taken (%)</td>
            <td>1</td>
            <td>380</td>
          </tr>          
        </tbody>
      </table>
      <ol className="mg1-list">
        <li>Then listen to the candidate’s response to this which will help us to understand their attitude like
          <ol type="a">
            <li>Mind-set (How is their response whether open minded)</li>
            <li>Discernment (Are they interested to listen to the unseen or unheard)</li>
            <li>Skillset (their current occupation will help us understand this)</li>
            <li>Flexibility (This is understood as we build relationship with them)</li>
            <li>Framework (Is he/she organised)</li>
          </ol>
        </li>  
        <li>
          <p>For example</p>
          <img className="img-mgone" alt="meetandgreetone" src={mgone}/>
          <table className="table">
              <thead>
               <tr>                
                  <th scope="col">Conventional model</th>
                  <th scope="col">Our business model</th>
                </tr>
              </thead>
              <tbody>
                <tr>          
                  <td>Capital Expenditure Involved</td>
                  <td>Operational expenditure involved</td>      
                </tr>
                <tr>
                  <td>Full time Employee</td>
                  <td>Outsourcing possible</td>
                </tr>
                <tr>
                  <td>Distribution Channel</td>
                  <td>Education for distributor</td>
                </tr>
                <tr>
                  <td>Advertisement</td>
                  <td>Word of mouth</td>  
                </tr>          
              </tbody>
          </table>
        </li> 
        <li><p>Then check if the candidate is a voracious reader or listener or interested in viewing informative videos.</p>        
          <form>            
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="reading" />
              <label className="form-check-label" htmlFor="reading">
                Reading
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="listening" />
              <label className="form-check-label" htmlFor="listening">
                Listening
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="viewing" />
              <label className="form-check-label" htmlFor="viewing">
                Viewing
              </label>
            </div>
          </form>   
        </li>        
        <li>Based on the response Share the Book of “21st Business Century” or CD of “Key to financial freedom” or the Cash flow video.</li>
      </ol>
      <p>If you feel that the person is not able to relate /understand what you are explaining in MG1, put them in open and then bring back to MG1.</p>
  	</div>
    );
}

export default MeetAndGreet1;