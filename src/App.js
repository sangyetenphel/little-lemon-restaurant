import './App.css';
import { useEffect, useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI } from './mockAPI';


const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-indexed (0-11), so adding 1
const day = today.getDate();
const todayDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

function App() {
  const [availableDate, setAvailableDate] = useState();
  const [date, setDate] = useState(todayDate)
  const [state, dispatch] = useReducer(updateTimes, availableDate);

  function updateTimes(state, action){
    if (action.date) return setDate(action.date);
  }

  useEffect(() => {
    fetchAPI(date)
    .then(data => {
      setAvailableDate({availableTimes: data})
    })
  }, [date])

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/reservations' element={<BookingForm state={availableDate} dispatch={dispatch}/>} />
      <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
