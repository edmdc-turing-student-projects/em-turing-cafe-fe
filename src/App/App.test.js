import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from './App';
import "@testing-library/jest-dom";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('Adding a new Reservation', () => {
  it('should display a new card when form is submited', () => {
    const {getByPlaceholderText, getByText, getByRole} = render(<App />)

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date', {exact: false});
    const timeInput = getByPlaceholderText('Time', {exact: false});
    const guestInput = getByPlaceholderText('Number of guest', {exact: false});
    const submitButton = getByRole('button', {name: 'Make Reservation'})

    fireEvent.change(nameInput, {target: {value: 'Edwin'}})
    fireEvent.change(dateInput, {target: {value: '10/10'}})
    fireEvent.change(timeInput, {target: {value: '10:10'}})
    fireEvent.change(guestInput, {target: {value: '3'}})
    fireEvent.click(submitButton)

    const name = getByText('Edwin')
    const date = getByText('10/10')
    const time = getByText('10:10')

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  });
})
