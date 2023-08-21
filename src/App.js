import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./Components/Header/Navbar1";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Hotel from "./pages/Hotel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/HotelList" element={<HotelList />} />
        <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="*" element={<><Navbar1 /> <h1 style={{ textAlign: 'center', marginTop: '20%' }}>No Page Found!</h1></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
