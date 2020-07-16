import React, {Component} from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    };
  }
handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  makeNewReservation = (event) => {
    event.preventDefault()
    this.props.submitReservation({...this.state})
  }

  render() {
    return (
      <form className='resy-form'>
        <input
          id='name'
          name='name'
          placeholder='Name'
          onChange={(event) => this.handleChange(event)}
        />
        <input
          id='date'
          name='date'
          placeholder='Date (mm/dd)'
          onChange={(event) => this.handleChange(event)}
        />
        <input
          id='time'
          name='time'
          placeholder='Time (hh:mm)'
          onChange={(event) => this.handleChange(event)}
        />
        <input
          id='guest-number'
          name='number'
          placeholder='Number of guests'
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
