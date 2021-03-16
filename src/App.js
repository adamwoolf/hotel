import React, { useEffect, useState } from 'react'
import './styles/style.css';
import TopBar from './components/TopBar';
import InputBar from './components/InputBar';
import ProgressBar from './components/ProgressBar';
import SummaryCard from './components/SummaryCard';
import { Row, Col } from 'react-bootstrap'
import HotelCard from './components/HotelCard';

import hotel1 from './assets/room_1.png'
import hotel2 from './assets/room_2.png'
import hotel3 from './assets/room_3.png'
import moment from 'moment';
import Footer from './components/Footer';

const adults = [
  'Adults: 0', 'Adults: 1', 'Adults: 2', 'Adults: 3', 'Adults: 4',
]

const children = [
  'Children: 0', 'Children: 1', 'Children: 2', 'Children: 3', 'Children: 4',
]

const hotels = [
  {id:1 ,name: 'Mini Dreamy Room', description: 'Generous and comfortable, these modern, furnished rooms offer two queen-size beds and are on the first floor.',
   size: '20m2', beds: 1, people: 2, price:200, image: hotel1},
   {id:2 ,name: 'Seet Bungalow', description: 'The perfect blend of comfort and culture, our superior room with access to the central garden view has the stunning natural light.',
   size: '50m2', beds: 1, people: 2, price:350, image: hotel2},
   {id:3 ,name: 'Los Cocos Suite', 
   description: 'If you want a little extra from your stay, you might like our superior rooms. An ocean view room has a private beach and free minibar and kayak usage.',
   size: '125m2', beds: 3, people: 4, price:450, image: hotel3},
]



function App() {
  const today = moment().format('DD/MM/YYYY')
  const tomorrow  = moment().add(1,'days').format('DD/MM/YYYY');
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(tomorrow)
  const [adultsSelected, setAdultsSelected] = useState(0)
  const [childrenSelected, setChildrenSelected] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState({})
  const [booking, setBooking] = useState({})



const modify = () => {
const booked = {
  startDate, endDate, adultsSelected, childrenSelected
}
setBooking(booked)

}

var a = moment(startDate, "DD/MM/YYYY");
var b = moment(endDate, "DD/MM/YYYY");
var days = b.diff(a, "days");


const onSubmit = () => {
let booking = {
  arrival: startDate, 
  departure: endDate,
  adults: adultsSelected,
  children: childrenSelected,
  room: selectedRoom,
  numberOfNights: days,
  totalPrice: days * selectedRoom.price
}
localStorage.setItem('Room Booking', JSON.stringify(booking))
}

const [promo, setPromo] = useState(null)

useEffect(() => {
if(window.location.href.includes('promo_code')){ setPromo(parseInt(window.location.href.split('=')[1]))}
console.log(window.location.href.split('=')[1])

}, [])

  return (
   <div>
<TopBar/>
<InputBar
startDate={startDate}
setStart={setStartDate}
setEnd={setEndDate}
endDate={endDate}
children={children}
adults={adults}
selectAdults={e => setAdultsSelected(+e.target.value)}
selectChildren={e =>  setChildrenSelected(+e.target.value)}
modify={modify}

/>
<div className="main" > 
<Row>
  <Col md={8}>
  <ProgressBar/>  

    {hotels.map((hotel, index) => 
    <HotelCard click={() => setSelectedRoom(hotel)} promo={promo} selected={selectedRoom} key={index} h={hotel}/>
 )}
  </Col>
  <Col md={4} >
  <SummaryCard
  booked={booking}
  selectedRoom={selectedRoom}
  promo={promo}
  submit={onSubmit}
  days={days}
  />
  </Col>
  </Row>    
  </div>
  <Footer/>
   </div>
  );
}

export default App;
