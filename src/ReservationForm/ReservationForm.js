import React, {Component} from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  makeNewReservation = (event) => {
    event.preventDefault()
    const {submitReservation} = this.props
    const newReservation = {...this.state}
    submitReservation(newReservation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    });
  }

  render() {
    return (
      <form className='resy-form'>
        <input
          id='name'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          id='date'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          id='time'
          name='time'
          placeholder='Time (hh:mm)'
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          id='guest-number'
          name='number'
          placeholder='Number of guests'
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
        />
        <button
          id='submit-reservation'
          name='submitReservation'
          onClick={(event) => this.makeNewReservation(event)}>
            Make Reservation
        </button>
      </form>
    );
  }
}

export default ReservationForm;
