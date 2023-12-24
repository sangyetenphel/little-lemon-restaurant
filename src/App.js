import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ReserveTable from './ReserveTable';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/reservations' element={<ReserveTable/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
