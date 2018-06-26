import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import styles from './App.css';
import { Footer } from "./components/Footer";
import { Candidate } from "./components/Candidate";
import { MeetAndGreet1 } from "./components/MeetAndGreet1";
import { Pagination } from "./components/Pagination";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      page: 1,
      userData: {

      }
    };
  }

  handlePageNext = () => {
    this.setState({
      page: 2
    });
  }

  render() {
    return (
      <Router>   
        <div>
          <Header />        
          <div className="container">
            <Switch>
              <Route path='/Home' component={ Home } exact/>           
              <Route path='/meetandgreet1' component={ MeetAndGreet1 } exact/>
              <Route path='/content' component={ Content } exact/>
              <Route path='/candidate' component={ Candidate} exact/>
            </Switch>
          </div>
          <Pagination />
          <Footer />
         </div> 
        </Router>
    );
  }
}
export default App;
