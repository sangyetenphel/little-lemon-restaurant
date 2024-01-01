import { fireEvent, render, screen } from '@testing-library/react';
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

global.alert = jest.fn();
test('Submission is dissallowed if date selected is less than today.', () => {
  const today = '1/1/24';
  render(
    <Router>
      <BookingForm />
    </Router>
  );
  const dateInput = document.getElementById('res-date');
  fireEvent.change(dateInput, {target: {value: '12/31/23'}});
  // expect(dateInput).toBeLessThan(today);
  expect(global.alert).toHaveBeenCalledWith('Cant book a table from the past!');
})

test("If the button has a className of button", () => {
  render(
    <Router>
      <BookingForm />
    </Router>
  )
  const button = screen.getByText("Continue");
  expect(button).toHaveClass('button');
})

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