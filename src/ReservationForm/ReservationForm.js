import React, {Component} from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guestNumber: null
    };
  }

  // handleChange = () => {
  //   this.setState([event.target
  // }

  render() {
    return (
      <form className='resy-form'>
        <input
          id='name'
          name='name'
          placeholder='Name'
        />
        <input
          id='date'
          name='date'
          placeholder='Date (mm/dd)'
        />
        <input
          id='time'
          name='time'
          placeholder='Time (hh:mm)'
        />
        <input
          id='guest-number'
          name='guestNumber'
          placeholder='Number of guests'
        />
        <button
          id='submit-reservation'
          name='submitReservation'>
            Make Reservation
        </button>
      </form>
    );
  }
}

export default ReservationForm;
