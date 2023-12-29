import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import {initializeTimes, updateTimes } from './App';
import { BrowserRouter as Router} from 'react-router-dom';

test('renders the heading "RESERVE A TABLE"', () => {
  render(
    <Router>
      <BookingForm />
    </Router>
  );
  const headingElement = screen.getByText("RESERVE A TABLE")
  expect(headingElement).toBeInTheDocument();
});

// test('initializeTimes returns the expected initial state', () => {
//   const expectedInitialState = { availableTimes: ['17.00', '18:00', '19.00'] };
//   const initialState = initializeTimes();
//   expect(initialState).toEqual(expectedInitialState);
// });

// test('updateTimes returns the same state when date does not match', () => {
//   const currentState = { availableTimes: ['17.00', '18:00', '19.00'] };
//   const action = { date: '2023-12-26' };
//   const newState = updateTimes(currentState, action);
//   expect(newState).toEqual(currentState);
// });