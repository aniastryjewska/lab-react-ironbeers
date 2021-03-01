import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class Beers extends Component {

    state = {
        beers: []
    }
    
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        console.log("hello")
        console.log(this.state.beers)
        })
        
    }
    render() {
      return (
        <div>
        <header>
              <Navbar/>
        </header>
        <div className="Beers">
        {this.state.beers.map(beer => 
        <div>
        <h3>{beer.name}</h3>
        <h5>{beer.tagline}</h5>
        <h6>Created by: {beer.tagline}</h6>
        <img src={beer.image_url} alt="beer"/>
        </div>)}
        </div>
        </div>
      );
    }
  }
   
  export default Beers;
 