import './App.css';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BookingForm from './BookingForm';

export function initializeTimes() {
  return {availableTimes: ['17.00', '18:00', '19.00']};
}

export function updateTimes(state, action) {
  if (action.date === '2/2/23') return {availableTimes: ['17.00', '18:00']};
  return state;
}

function App() {
  const initialState = initializeTimes();
  const [state, dispatch] = useReducer(updateTimes, initialState);
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/reservations' element={<BookingForm state={state} dispatch={dispatch}/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
