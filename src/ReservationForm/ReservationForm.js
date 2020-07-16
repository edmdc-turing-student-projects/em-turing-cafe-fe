import React, {Component} from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    };
  }
}

export default ReservationForm;
