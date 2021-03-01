import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
 

export default class BeerDetails extends Component {
state = {
    beer: {}
}

componentDidMount() {
    const id = this.props.match.params.Id;
axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
.then(response => {
console.log('This is response',response);
this.setState({
    beer: response.data
})
    })
.catch(err => {
    console.log(err);
})

}

render() {

    console.log("this props:", this.props)
       if (!this.state.beer) {
           return <h3>Loading...</h3>
       }

      return (
        <div>
        <Navbar/>
        <h3>{this.state.beer.name}</h3>
        <Link to='/beers'>Back</Link>
        </div>
      )
    }
}


