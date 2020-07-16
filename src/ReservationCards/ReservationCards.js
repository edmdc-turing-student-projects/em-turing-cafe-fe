import React from 'react';
import './ReservationCards.css'

const ReservationCards = ({ reservations }) => {
  const renderReservations = () => {
    return reservations.map((reservation, index) => {
      return (
        <article className='single-resy' key={index}>
          <h4>{reservation.name}</h4>
          <p>{reservation.date}</p>
          <p>{reservation.time}</p>
          <p>{`Guest Number:${reservation.number}`}</p>
        </article>
      )
    })
  }

  return (
    <>
      {renderReservations()}
    </>
  )
};

export default ReservationCards;
