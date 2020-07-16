import React from "react";
import ReservationForm from "./ReservationForm";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Reservation Form', () => {
  it('should provide the necessry input fields', () => {
    const {getByPlaceholderText} = render(
      <ReservationForm />
    )

    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date', {exact: false});
    const timeInput = getByPlaceholderText('Time', {exact: false});
    const guestInput = getByPlaceholderText('Number of guest', {exact: false});

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(guestInput).toBeInTheDocument();
  })
});
