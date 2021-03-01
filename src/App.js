import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import Newbeer from './components/newbeer';
import Randombeer from './components/randombeer';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
 
class App extends Component {

  state = {
    countries: []
}

componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        this.setState({countries: response.data})
    })
    console.log("hello")
    console.log("hello")
}

  render() {
    return (
      <div className="App">
      <Router>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/beers' component={Beers}/>
      <Route path='/newbeer' component={Newbeer}/>
      <Route path='/randombeer' component={Randombeer}/>
      </Switch>
      </Router>
        
      </div>
    );
  }
}
 
export default App;