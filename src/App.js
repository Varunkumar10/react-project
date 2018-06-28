import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import styles from "./App.css";
import { Footer } from "./components/Footer";
import { Candidate } from "./components/Candidate";
import { MeetAndGreet1 } from "./components/MeetAndGreet1";
import { MeetAndGreet2 } from "./components/MeetAndGreet2";
import { Pagination } from "./components/Pagination";
import { Home } from "./components/Home";
import { BoardPlanOne } from "./components/BoardPlanOne";
import { BoardPlanTwo } from "./components/BoardPlanTwo";

class App extends React.Component {
  constructor(props){
    super();
  }

  render() {
    return (
      <Router>   
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path='/' component={ Home } exact />
              <Route path='/candidate' component={ Candidate } exact />
              <Route path='/content' component={ Content } exact />
              <Route path='/meetandgreet1' component={ MeetAndGreet1 } exact/>
              <Route path='/meetandgreet2' component={ MeetAndGreet2 } exact/>
              <Route path='/boardplanone' component={ BoardPlanOne } exact/>
              <Route path='/boardplantwo' component={ BoardPlanTwo } exact/>
            </Switch>
          </div>
          <Footer />
        </div> 
      </Router>
    );
  }
}
export default App;
