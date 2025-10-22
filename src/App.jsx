import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { ToastBar } from 'react-hot-toast'
import Footer from './components/Footer'
import MovieDetails from './pages/MovieDetails'
function App() {
  const [count, setCount] = useState(0)
  const adminRoute = useLocation().pathname.startsWith('/admin');
  return (
    <>
    {/* <ToastBar/> */}
    {!adminRoute && <Navbar />}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
      <Route path='/favorites' element={<Favorite/>} />
    </Routes>
    {!adminRoute && <Footer/>}
    </>
  )
}

export default App
