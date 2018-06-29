import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";
import Footer from "./components/Footer";
import Candidate from "./components/Candidate";
import MeetAndGreetOne from "./components/MeetAndGreetOne";
import MeetAndGreetTwo from "./components/MeetAndGreetTwo";
import Home from "./components/Home";
import BoardPlanOne from "./components/BoardPlanOne";
import BoardPlanTwo from "./components/BoardPlanTwo";
import DashBoard from "./components/DashBoard";
import LoginPage from "./components/LoginPage";
import CreateAccount from "./components/CreateAccount";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>   
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path='/' component={ LoginPage } exact />
              <Route path='/home' component={ Home } exact />
              <Route path='/createaccount' component={ CreateAccount } exact />
              <Route path='/dashboard' component={ DashBoard } exact />
              <Route path='/candidate' component={ Candidate } exact />
              <Route path='/content' component={ Content } exact />
              <Route path='/meetandgreetone' component={ MeetAndGreetOne } exact />
              <Route path='/meetandgreettwo' component={ MeetAndGreetTwo } exact />
              <Route path='/boardplanone' component={ BoardPlanOne } exact />
              <Route path='/boardplantwo' component={ BoardPlanTwo } exact />
            </Switch>
          </div>
          <Footer />
        </div> 
      </Router>
    );
  }
}
export default App;
