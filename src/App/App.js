import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../apiCall'

class App extends Component {
  componentDidMount() {
    const {getAllReservations} = ApiCalls();
    const findExistingReservations = async () => {
      const reservations = await getAllReservations();
      console.log(reservations)
    };
    findExistingReservations();
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
