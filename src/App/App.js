import React, { Component } from 'react';
import './App.css';
import ApiCalls from '../apiCall'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    };
  }

  componentDidMount() {
    const {getAllReservations} = ApiCalls();
    const findExistingReservations = async () => {
      const reservations = await getAllReservations();
      console.log(reservations)
      this.setState({ reservations })
    };
    findExistingReservations();
  }

  renderReservations = () => {
    return this.state.reservations.map(reservation => {
      return (
        <article className='single-resy'>
          <h4>{reservation.name}</h4>
          <p>{reservation.date}</p>
          <p>{reservation.time}</p>
          <p>{`Guest Number:${reservation.number}`}</p>
        </article>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.state.reservations && this.renderReservations()}
        </div>
      </div>
    )
  }
}

export default App;


// Resy structure
// id: integer
// name: string
// date: string
// number: integer
