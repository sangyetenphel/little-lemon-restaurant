import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import {initializeTimes, updateTimes } from './App';

test('renders the Confirmation & Reminder Heading', () => {
  render(<BookingForm />);
  const HeadingElement = screen.getByText('Confirmation & Reminder');
  expect(HeadingElement).toBeInTheDocument();
});

test('initializeTimes returns the expected initial state', () => {
  const initialState = initializeTimes();
  const expectedInitialState = {availableTimes: ['17.00', '18:00', '19.00']};
  expect(initialState).toEqual(expectedInitialState);
});

test('updateTimes returns the same state when date does not match', ()=> {
  const currentState = {vailableTimes: ['17.00', '18:00', '19.00']};
  const action = {date: '1/1/22'};
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(currentState);
});
