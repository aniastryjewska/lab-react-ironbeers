import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import Newbeer from './components/newbeer';
import Randombeer from './components/randombeer';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BeerDetail from './components/BeerDetail';



class App extends Component {



  render() {
    return (
      <div className="App">
      <Router>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/beers' component={Beers}/>
      <Route path='/newbeer' component={Newbeer}/>
      <Route path='/randombeer' component={Randombeer}/>
      <Route exact path="/beers/:id" component={BeerDetail} />
      </Switch>
      </Router>
        
      </div>
    );
  }
}
 
export default App;