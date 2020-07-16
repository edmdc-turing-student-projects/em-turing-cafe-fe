import React from "react";
import ReservationCards from "./ReservationCards";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('A reservation card', () => {

  const reservation = [
    {
      date: "12/29",
      id: 1,
      name: "Christie",
      number: 12,
      time: "7:00"
    },
  ]

  it('should have a name, date, and time', () => {
    const {getByText} = render(
      <ReservationCards reservations={reservation} />
    )

    const name = getByText('Christie')
    const date = getByText('12/29')
    const time = getByText('7:00')

    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  })
});
